import { ArrowUpRight, FileText, Scale, GraduationCap, Gavel } from 'lucide-react';

export default function Services() {
  const services = [
    {
      number: '01',
      icon: FileText,
      title: 'Кадровый аутсорсинг',
      description: 'Полное ведение кадрового делопроизводства, подготовка документов, анализ и разработка нормативных актов.',
      features: ['Ведение документации', 'Анализ рисков', 'Отчетность'],
    },
    {
      number: '02',
      icon: Scale,
      title: 'Юридическое сопровождение',
      description: 'Комплексная юридическая поддержка вашего бизнеса в сфере трудового права.',
      features: ['Консультации', 'Экспертиза', 'Защита в суде'],
    },
    {
      number: '03',
      icon: GraduationCap,
      title: 'Обучение согласительной комиссии',
      description: 'Профессиональные программы обучения для эффективного урегулирования трудовых споров.',
      features: ['Online и offline', 'Сертификаты', 'Практические кейсы'],
    },
    {
      number: '04',
      icon: Gavel,
      title: 'Урегулирование споров',
      description: 'Профессиональное разрешение трудовых конфликтов между работодателем и сотрудниками.',
      features: ['Медиация', 'Переговоры', 'Представительство'],
    },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{background: 'linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 50%, #f1f5f9 100%)'}}>
      {/* Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }}></div>
      
      {/* Section indicator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-dark-600 font-semibold text-sm mb-8 shadow-sm">
            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
            Наши услуги
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-dark-900 leading-[1.1] mb-8">
            Что мы можем
            <br />
            <span className="gradient-text">взять на себя</span>
          </h2>
          
          <p className="text-2xl text-dark-500 max-w-2xl mx-auto">
            Комплексные HR-решения для вашего бизнеса
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card relative overflow-hidden"
            >
              {/* Number badge */}
              <div className="absolute top-10 right-10 text-[120px] font-black text-dark-100 leading-none pointer-events-none select-none group-hover:text-primary-100 transition-colors duration-500">
                {service.number}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-20 h-20 bg-dark-900 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary-600 transition-all duration-500">
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xl text-dark-500 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {service.features.map((feature, i) => (
                    <span 
                      key={i} 
                      className="px-5 py-2.5 bg-dark-100 rounded-full text-dark-600 font-medium group-hover:bg-primary-50 group-hover:text-primary-700 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-lg font-bold text-dark-900 group-hover:text-primary-600 transition-colors"
                >
                  Подробнее
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-xl text-dark-500 mb-6">Не нашли нужную услугу?</p>
          <a href="#contact" className="btn-secondary">
            Обсудить ваш запрос
          </a>
        </div>
      </div>
    </section>
  );
}
