
import SkillsTest from './SkillsTest';

const Test = () => {
  return (
    <section id="test" className="py-20 bg-white">
      <div className="container mx-auto px-4">
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
