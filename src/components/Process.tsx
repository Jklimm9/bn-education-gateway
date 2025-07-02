
const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Зустріч і визначення цілей",
      description: "Консультація для розуміння ваших освітніх амбіцій"
    },
    {
      number: "02", 
      title: "Підбір викладача",
      description: "Індивідуальний добір експерта за вашим профілем"
    },
    {
      number: "03",
      title: "Ознайомче заняття",
      description: "Безкоштовна зустріч з викладачем та планування"
    },
    {
      number: "04",
      title: "Формування розкладу",
      description: "Створення гнучкого графіку під ваші потреби"
    },
    {
      number: "05",
      title: "Навчальний процес",
      description: "Індивідуальні заняття з персональним підходом"
    },
    {
      number: "06",
      title: "Щотижневі фідбеки",
      description: "Регулярні звіти про прогрес та рекомендації"
    },
    {
      number: "07",
      title: "Результат",
      description: "Успішне досягнення ваших освітніх цілей"
    }
  ];

  return (
    <section id="process" className="py-16 bg-gradient-to-br from-burgundy-50 to-gold-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-burgundy-700 mb-6">
            Як проходить навчання
          </h2>
          <p className="text-xl text-burgundy-600 max-w-3xl mx-auto">
            Покроковий процес від першої консультації до вступу в університет мрії
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gold-400 h-full"></div>

          <div className="space-y-8 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="premium-card p-6 rounded-2xl">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-burgundy-700 to-gold-400 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                      <h3 className="font-playfair text-xl font-semibold text-burgundy-700">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-burgundy-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-gold-400 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
