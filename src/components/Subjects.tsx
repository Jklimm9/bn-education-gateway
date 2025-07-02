
import { Book, Calendar, FileText } from 'lucide-react';

const Subjects = () => {
  const categories = [
    {
      icon: <Book className="w-8 h-8" />,
      title: "Мови",
      items: ["Англійська", "Німецька", "Китайська", "Французька", "Іспанська"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Академічні предмети",
      items: ["Математика", "Хімія", "Біологія", "Економіка", "Фізика"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Підготовка до іспитів",
      items: ["IELTS", "TOEFL", "SAT", "ACT", "GMAT", "A-Level", "IB"]
    }
  ];

  const specialServices = [
    "Написання есе",
    "Створення портфоліо",
    "Підготовка до інтерв'ю",
    "Консультації з вибору університету"
  ];

  return (
    <section id="subjects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-burgundy-700 mb-6">
            Що вивчають у Центрі
          </h2>
          <p className="text-xl text-burgundy-600 max-w-3xl mx-auto">
            Широкий спектр дисциплін та спеціальних програм для підготовки до престижних університетів
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="premium-card p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-burgundy-700 to-gold-400 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                {category.icon}
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-burgundy-700 mb-6">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-burgundy-600 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-burgundy-700 to-gold-400 rounded-2xl p-8 text-center text-white">
          <h3 className="font-playfair text-3xl font-semibold mb-6">
            Спеціальні послуги
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 font-medium"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subjects;
