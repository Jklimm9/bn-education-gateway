
import { Check } from 'lucide-react';

const About = () => {
  const advantages = [
    "Персональний графік навчання",
    "Постійний супровід менеджера",
    "Звітність та фідбек викладачів",
    "Детальні програми підготовки",
    "Моніторинг результатів",
    "Гнучкий розклад занять"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-burgundy-700 mb-6">
            Про Центр Підготовки
          </h2>
          <p className="text-xl text-burgundy-600 max-w-3xl mx-auto">
            Ми створили унікальну платформу для індивідуальної підготовки, 
            де кожен студент отримує персональний підхід та найкращих викладачів світу
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="font-playfair text-3xl font-semibold text-burgundy-700 mb-6">
              Наша місія
            </h3>
            <p className="text-lg text-burgundy-600 mb-8 leading-relaxed">
              Ми віримо, що кожен студент заслуговує на найкращу освіту. 
              Наш центр об'єднує топових викладачів з престижних університетів 
              для індивідуальної роботи з кожним учнем.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gold-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-burgundy-700 font-medium">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card p-8 rounded-2xl animate-slide-in-right">
            <h4 className="font-playfair text-2xl font-semibold text-burgundy-700 mb-6">
              Наші викладачі
            </h4>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-burgundy-700 to-gold-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">PhD</span>
                </div>
                <div>
                  <h5 className="font-semibold text-burgundy-700">Доктори наук</h5>
                  <p className="text-burgundy-600">Випускники Гарварду, Стенфорду</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-burgundy-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KCL</span>
                </div>
                <div>
                  <h5 className="font-semibold text-burgundy-700">King's College London</h5>
                  <p className="text-burgundy-600">Експерти з підготовки до A-Level</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-burgundy-700 to-gold-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">5+</span>
                </div>
                <div>
                  <h5 className="font-semibold text-burgundy-700">Досвід викладання</h5>
                  <p className="text-burgundy-600">Понад 5 років в освіті</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
