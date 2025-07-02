
import SkillsTest from './SkillsTest';

const Test = () => {
  return (
    <section id="test" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/f7964c41-b79e-4381-8f69-cf9e0a9c7f88.png"
          alt="Graduates celebrating"
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(1.1)' }}
        />
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-burgundy-700 mb-6">
            Тест на визначення потенціалу
          </h2>
          <p className="text-xl text-burgundy-600 max-w-3xl mx-auto">
            Пройдіть короткий тест, щоб краще зрозуміти сильні сторони вашої дитини 
            та отримати персональні рекомендації щодо навчання
          </p>
        </div>

        <SkillsTest />
      </div>
    </section>
  );
};

export default Test;
