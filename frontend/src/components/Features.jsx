import { useState } from 'react';
import { Plus, Minus, Zap, Shield, Clock, TrendingUp, HeadphonesIcon, Banknote } from 'lucide-react';

export default function Features() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    { icon: Zap, title: 'Эффективность', text: 'Освободите команду от HR-рутины' },
    { icon: Banknote, title: 'Экономия', text: 'Снизьте расходы на кадровую службу' },
    { icon: TrendingUp, title: 'Результат', text: 'Гарантируем достижение целей' },
    { icon: Shield, title: 'Защита', text: 'Без штрафов и нарушений' },
    { icon: Clock, title: 'Скорость', text: 'Оперативное решение задач' },
    { icon: HeadphonesIcon, title: 'Поддержка', text: 'Консультации 24/7' },
  ];

  const faqItems = [
    {
      question: 'Когда проводится обучение?',
      answer: 'Обучение проводится по факту укомплектования групп. Время согласовывается с участниками. Также доступно online обучение в любое удобное время.'
    },
    {
      question: 'В каком формате проходит обучение?',
      answer: 'Обучение проходит в online или offline формате в любом городе Казахстана. Мы подстраиваемся под ваши потребности.'
    },
    {
      question: 'Какова стоимость услуг?',
      answer: 'Стоимость зависит от объёма работ. Для корпоративных клиентов предусмотрены специальные условия. Свяжитесь с нами для расчёта.'
    },
    {
      question: 'Кто проводит обучение?',
      answer: 'Сертифицированные специалисты с практическим опытом 10-20+ лет, научными степенями и званиями в сфере трудового права.'
    }
  ];

  return (
    <section id="features" className="section-padding bg-dark-900 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 rounded-full text-white/80 font-semibold text-sm mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
            Преимущества
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] mb-8">
            Почему выбирают
            <br />
            <span className="text-primary-400">HR Лидер</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-32">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 lg:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-dark-300 text-lg">{benefit.text}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Частые вопросы
          </h3>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`rounded-3xl overflow-hidden transition-all duration-500 ${
                  openFaq === index 
                    ? 'bg-white text-dark-900' 
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <h4 className={`text-xl lg:text-2xl font-bold pr-4 ${openFaq === index ? 'text-dark-900' : 'text-white'}`}>
                    {item.question}
                  </h4>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    openFaq === index ? 'bg-dark-900 text-white' : 'bg-white/10 text-white'
                  }`}>
                    {openFaq === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${
                  openFaq === index ? 'max-h-60 pb-8 px-8' : 'max-h-0'
                }`}>
                  <p className="text-xl text-dark-500 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
