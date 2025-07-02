
const Success = () => {
  const stories = [
    {
      name: "Гліб",
      achievement: "IELTS 8.5",
      description: "Покращив результат з 6.0 до 8.5 за 4 місяці індивідуальних занять з носієм мови",
      university: "Cambridge University",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Мирослава", 
      achievement: "A-Level A*A*A",
      description: "Успішно склала A-Level з викладачем з King's College London та вступила до Оксфорду",
      university: "Oxford University",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Максим",
      achievement: "TOEFL 118/120",
      description: "Підготувався до TOEFL та MBA програми, отримав стипендію в топ-10 бізнес-школі",
      university: "Stanford MBA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="success" className="py-20 bg-gradient-to-br from-gold-50 to-burgundy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-burgundy-700 mb-6">
            Історії успіху наших студентів
          </h2>
          <p className="text-xl text-burgundy-600 max-w-3xl mx-auto">
            Кожна історія - це результат наполегливої роботи студента та професійної підтримки наших викладачів
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="premium-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 border-gold-400">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="font-playfair text-2xl font-semibold text-burgundy-700 mb-2">
                {story.name}
              </h3>
              
              <div className="bg-gradient-to-r from-burgundy-700 to-gold-400 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                {story.achievement}
              </div>
              
              <p className="text-burgundy-600 mb-4 leading-relaxed">
                {story.description}
              </p>
              
              <div className="text-gold-500 font-semibold">
                📍 {story.university}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-10 py-4">
            Стати наступним успішним студентом
          </button>
        </div>
      </div>
    </section>
  );
};

export default Success;
