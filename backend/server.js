import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { appendFileSync, existsSync, writeFileSync } from 'fs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// In-memory storage for contacts (for demo purposes)
// In production, use a database like MongoDB, PostgreSQL, or a service like Airtable
const contacts = [];

// CSV file path for persistent storage (simple file-based solution)
const CSV_FILE = './contacts.csv';

// Initialize CSV file with headers if it doesn't exist
if (!existsSync(CSV_FILE)) {
  writeFileSync(CSV_FILE, 'timestamp,name,email,phone,company,service,message\n');
}

// Configure nodemailer (optional - for email notifications)
// Set these in your .env file
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Validate required fields
const validateContact = (data) => {
  const errors = [];
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Имя должно содержать минимум 2 символа');
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Введите корректный email');
  }
  if (!data.phone || data.phone.trim().length < 10) {
    errors.push('Введите корректный номер телефона');
  }
  return errors;
};

// Escape CSV values
const escapeCSV = (value) => {
  if (!value) return '';
  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
};

// Routes
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'HR Lider API is running',
    endpoints: {
      'POST /api/contact': 'Submit contact form',
      'GET /api/contacts': 'Get all contacts (admin)'
    }
  });
});

// Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    // Validate
    const errors = validateContact(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ error: errors.join('. ') });
    }

    // Create contact object
    const contact = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      company: company?.trim() || '',
      service: service || '',
      message: message?.trim() || ''
    };

    // Store in memory
    contacts.push(contact);

    // Save to CSV file
    const csvRow = [
      contact.timestamp,
      escapeCSV(contact.name),
      escapeCSV(contact.email),
      escapeCSV(contact.phone),
      escapeCSV(contact.company),
      escapeCSV(contact.service),
      escapeCSV(contact.message)
    ].join(',') + '\n';

    appendFileSync(CSV_FILE, csvRow);

    // Send email notification (if configured)
    if (process.env.SMTP_USER && process.env.NOTIFICATION_EMAIL) {
      try {
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: process.env.NOTIFICATION_EMAIL,
          subject: `Новая заявка с сайта HR Лидер: ${name}`,
          html: `
            <h2>Новая заявка с сайта</h2>
            <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Имя:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Телефон:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Компания:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${company || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Услуга:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${service || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Сообщение:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${message || '-'}</td>
              </tr>
            </table>
            <p style="color: #666; font-size: 12px; margin-top: 20px;">
              Отправлено: ${new Date().toLocaleString('ru-RU')}
            </p>
          `
        });
        console.log('Email notification sent');
      } catch (emailError) {
        console.error('Failed to send email:', emailError.message);
        // Don't fail the request if email fails
      }
    }

    console.log('New contact saved:', contact.name, contact.email);

    res.status(201).json({ 
      success: true, 
      message: 'Заявка успешно отправлена',
      id: contact.id 
    });

  } catch (error) {
    console.error('Error processing contact:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера. Попробуйте позже.' });
  }
});

// Get all contacts (for admin purposes - add authentication in production!)
app.get('/api/contacts', (req, res) => {
  // In production, add authentication here!
  const adminKey = req.headers['x-admin-key'];
  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  res.json({ 
    count: contacts.length,
    contacts: contacts.reverse() // newest first
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 HR Lider API server running on port ${PORT}`);
  console.log(`📧 Email notifications: ${process.env.SMTP_USER ? 'Configured' : 'Not configured'}`);
});
