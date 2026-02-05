import { ArrowUpRight, Play } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '7+', label: 'Лет на рынке' },
    { value: '927+', label: 'Довольных клиентов' },
    { value: '93%', label: 'Успешных кейсов' },
  ];

  return (
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden noise">
        {/* Background */}
        <div className="absolute inset-0 mesh-gradient"></div>

        {/* Large decorative circles */}
        <div className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-gradient-to-br from-primary-200/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-primary-100/30 to-transparent rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>

        <div className="container-custom relative z-10 pt-48 pb-32">
          {/* Top badge */}
          <div className="flex justify-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-dark-100">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-dark-600 font-semibold">Работаем по всему Казахстану</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="text-center mb-16">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-dark-900 leading-[0.9] tracking-tight mb-8 animate-slide-up">
              Возьмём все
              <br />
              <span className="relative inline-block">
              <span className="gradient-text">сложности</span>
              <svg className="absolute -bottom-4 left-0 w-full h-6" viewBox="0 0 400 20" fill="none" preserveAspectRatio="none">
                <path d="M0 15 Q100 0, 200 15 T400 15" stroke="url(#heroGrad)" strokeWidth="8" strokeLinecap="round" fill="none"/>
                <defs>
                  <linearGradient id="heroGrad" x1="0" y1="0" x2="400" y2="0">
                    <stop offset="0%" stopColor="#2d7aff"/>
                    <stop offset="100%" stopColor="#8b5cf6"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
              <br />
              на себя
            </h1>

            <p className="text-2xl md:text-3xl text-dark-500 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
              Профессиональный кадровый аутсорсинг и юридические услуги для вашего бизнеса
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 animate-slide-up animation-delay-400">
            <a href="#contact" className="btn-primary group">
              Получить консультацию
              <ArrowUpRight className="w-6 h-6 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="#services" className="btn-secondary group">
              <div className="w-12 h-12 bg-dark-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-dark-200 transition-colors">
                <Play className="w-5 h-5 text-dark-600 ml-1" />
              </div>
              Смотреть услуги
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 animate-fade-in animation-delay-600">
            {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-5xl md:text-6xl lg:text-7xl font-black text-dark-900 mb-2">{stat.value}</p>
                  <p className="text-lg md:text-xl text-dark-400 font-medium">{stat.label}</p>
                </div>
            ))}
          </div>

          {/* Floating elements - smaller and positioned at far edges */}
          <div className="hidden 2xl:block">
            {/* Card 1 - smaller, moved to far left edge, vertically centered */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 bg-white rounded-2xl p-4 shadow-[0_16px_48px_rgba(0,0,0,0.08)] animate-float border border-dark-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg font-black">HR</span>
                </div>
                <div>
                  <p className="font-bold text-dark-900 text-sm">HR Лидер</p>
                  <p className="text-dark-400 text-xs">Экспертный подход</p>
                </div>
              </div>
            </div>

            {/* Card 2 - smaller, moved to far right edge, vertically centered */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 bg-dark-900 rounded-2xl p-4 shadow-[0_16px_48px_rgba(0,0,0,0.25)] animate-float animation-delay-400">
              <p className="text-3xl font-black text-white mb-0.5">17+</p>
              <p className="text-dark-400 text-xs font-medium">Лет опыта команды</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in animation-delay-800">
          <span className="text-sm text-dark-400 font-medium">Листайте вниз</span>
          <div className="w-8 h-14 rounded-full border-2 border-dark-300 flex justify-center pt-2">
            <div className="w-2 h-4 bg-dark-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>
  );
}