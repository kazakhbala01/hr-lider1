import { Star } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Куанова Раиса Хамзиевна',
      role: 'Директор',
      experience: '17+',
      description: 'Юрист по трудовым спорам, лектор по обучению членов согласительных комиссий и HR-менеджер со стажем.',
    },
    {
      name: 'Рпашева Гульнара Танербергеновна',
      role: 'Лектор',
      experience: '20+',
      description: 'Специалист по обучению членов согласительных комиссий. Опыт топ-менеджера в крупных компаниях.',
    },
    {
      name: 'Аухадиев Даурен Тасбулатович',
      role: 'Юрист-правовед',
      experience: '10+',
      description: 'Юрист высшего уровня квалификации. Эксперт в сфере трудового права.',
    },
  ];

  return (
    <section id="team" className="section-padding relative overflow-hidden" style={{background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)'}}>
      {/* Section indicator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></div>
      
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-100 rounded-full text-dark-600 font-semibold text-sm mb-8">
            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
            Наша команда
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-dark-900 leading-[1.1] mb-8">
            Эксперты с
            <br />
            <span className="gradient-text">многолетним опытом</span>
          </h2>
          
          <p className="text-2xl text-dark-500 max-w-2xl mx-auto">
            Сертифицированные специалисты с практическим опытом
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              {/* Avatar */}
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-200 to-dark-100 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl font-black text-dark-300 group-hover:text-primary-400 transition-colors duration-500">
                    {member.name.charAt(0)}
                  </span>
                </div>
                {/* Experience badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-dark-900 text-white px-6 py-2 rounded-full font-bold shadow-xl">
                  {member.experience} лет
                </div>
              </div>

              {/* Info */}
              <h3 className="text-2xl font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                {member.name}
              </h3>
              <p className="text-lg text-primary-600 font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-dark-500 leading-relaxed mb-6">
                {member.description}
              </p>
              
              {/* Rating */}
              <div className="flex items-center justify-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <div className="inline-block p-10 lg:p-12 rounded-[3rem] bg-dark-900 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Хотите узнать больше?
            </h3>
            <p className="text-xl text-dark-300 mb-8">
              Свяжемся с вами в течение 15 минут
            </p>
            <a href="#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-dark-900 font-bold text-xl rounded-full hover:bg-dark-100 transition-colors">
              Задать вопрос
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
