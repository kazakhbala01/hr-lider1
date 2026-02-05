import { ArrowUpRight, Check } from 'lucide-react';

export default function About() {
  const features = [
    'Кадровый аутсорсинг',
    'Обучение согласительной комиссии',
    'Юридическое сопровождение',
    'Урегулирование трудовых споров',
    'Разработка нормативных актов',
    'Консультации 24/7'
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'}}>
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-slate-100/50 to-transparent"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/50 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-100 rounded-full text-dark-600 font-semibold text-sm mb-8">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              О компании
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-dark-900 leading-[1.1] mb-8">
              Ваш надёжный
              <br />
              <span className="gradient-text">HR-партнёр</span>
            </h2>
            
            <p className="text-2xl text-dark-500 leading-relaxed mb-8">
              <span className="text-dark-900 font-semibold">HR Lider</span> – ведущая компания в области 
              HR-услуг, которая успешно работает на рынке Казахстана уже{' '}
              <span className="text-primary-600 font-bold">7 лет</span>.
            </p>
            
            <p className="text-xl text-dark-400 leading-relaxed mb-12">
              Более 1000 клиентов уже выбрали нас. Мы гарантируем результат 
              для каждого клиента и максимально заинтересованы в вашем успехе.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-dark-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-dark-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary group">
              Начать сотрудничество
              <ArrowUpRight className="w-6 h-6 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-dark-900 rounded-[3rem] p-12 text-white overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-transparent"></div>
              
              <div className="relative z-10">
                <div className="text-8xl sm:text-9xl font-black leading-none mb-4 gradient-text">7+</div>
                <p className="text-2xl font-bold mb-2">Лет на рынке</p>
                <p className="text-dark-300 text-lg">Успешной работы в сфере HR-услуг</p>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary-400/10 rounded-full blur-3xl"></div>
            </div>

            {/* Floating cards - repositioned to not overlap */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-dark-100 animate-float z-20">
              <p className="text-3xl font-black text-dark-900">927+</p>
              <p className="text-dark-400 font-medium text-sm">Клиентов</p>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-dark-100 animate-float animation-delay-400 z-20">
              <p className="text-3xl font-black text-primary-600">93%</p>
              <p className="text-dark-400 font-medium text-sm">Успех</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-100 to-transparent"></div>
    </section>
  );
}
