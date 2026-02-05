import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowUpRight
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          email: 'form@hr-lider.kz'
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Отлично! Мы свяжемся с вами в течение 15 минут.' 
        });
        setFormData({ name: '', phone: '', company: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: data.error || 'Произошла ошибка. Попробуйте еще раз.' 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Ошибка сети. Проверьте подключение.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Top transition gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-900/5 to-transparent"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.015) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Section indicator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-dark-600 font-semibold text-sm mb-8 shadow-sm">
            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
            Связаться с нами
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-dark-900 leading-[1.1] mb-8">
            Получите
            <br />
            <span className="gradient-text">консультацию</span>
          </h2>
          
          <p className="text-2xl text-dark-500 max-w-2xl mx-auto">
            Ответим на любой вопрос за 15 минут
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main contact card */}
            <div className="bg-dark-900 rounded-[2.5rem] p-10 text-white">
              <h3 className="text-3xl font-bold mb-8">Контакты</h3>
              
              <div className="space-y-6">
                <a href="tel:+77782237411" className="flex items-center gap-5 group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-dark-300 text-sm mb-1">Телефон</p>
                    <p className="text-2xl font-bold">+7 778 223 74 11</p>
                  </div>
                </a>
                
                <a href="mailto:info@hr-lider.kz" className="flex items-center gap-5 group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-dark-300 text-sm mb-1">Email</p>
                    <p className="text-2xl font-bold">info@hr-lider.kz</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-dark-300 text-sm mb-1">Офис</p>
                    <p className="text-xl font-bold">Весь Казахстан</p>
                  </div>
                </div>
              </div>

              {/* Messengers */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-dark-300 mb-4">Мессенджеры и соцсети</p>
                <div className="grid grid-cols-3 gap-3">
                  <a href="https://wa.me/77782237411" className="py-4 bg-green-500 hover:bg-green-600 rounded-2xl text-center font-bold transition-all hover:scale-105 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <span className="hidden sm:inline">WhatsApp</span>
                  </a>
                  <a href="https://t.me/hrlider" className="py-4 bg-sky-500 hover:bg-sky-600 rounded-2xl text-center font-bold transition-all hover:scale-105 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    <span className="hidden sm:inline">Telegram</span>
                  </a>
                  <a href="https://instagram.com/hrlider.kz" className="py-4 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 rounded-2xl text-center font-bold transition-all hover:scale-105 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                    <span className="hidden sm:inline">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-dark-100">
                <p className="text-5xl font-black text-primary-600 mb-2">15</p>
                <p className="text-dark-500 font-medium">минут на ответ</p>
              </div>
              <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-dark-100">
                <p className="text-5xl font-black text-dark-900 mb-2">24/7</p>
                <p className="text-dark-500 font-medium">поддержка</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] p-10 lg:p-14 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_20px_60px_-20px_rgba(0,0,0,0.1)]">
              <h3 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-10">
                Оставить заявку
              </h3>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-lg font-semibold text-dark-700 mb-3">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-8 py-6 text-xl rounded-2xl border-2 border-dark-200 focus:border-dark-900 focus:ring-0 outline-none transition-all bg-dark-50"
                    placeholder="Как вас зовут?"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-lg font-semibold text-dark-700 mb-3">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-8 py-6 text-xl rounded-2xl border-2 border-dark-200 focus:border-dark-900 focus:ring-0 outline-none transition-all bg-dark-50"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-lg font-semibold text-dark-700 mb-3">
                    Компания <span className="text-dark-400 font-normal">(необязательно)</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-8 py-6 text-xl rounded-2xl border-2 border-dark-200 focus:border-dark-900 focus:ring-0 outline-none transition-all bg-dark-50"
                    placeholder="Название компании"
                  />
                </div>
              </div>

              {/* Status message */}
              {status.message && (
                <div className={`mt-6 p-6 rounded-2xl flex items-center gap-4 text-lg ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-700 border-2 border-green-200' 
                    : 'bg-red-50 text-red-700 border-2 border-red-200'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle className="w-7 h-7 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-7 h-7 flex-shrink-0" />
                  )}
                  {status.message}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-10 w-full btn-primary text-xl py-7 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-7 h-7 mr-3 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    Отправить заявку
                    <ArrowUpRight className="w-7 h-7 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
