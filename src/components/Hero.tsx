import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-burgundy-50 via-white to-gold-50 flex items-center justify-center relative overflow-hidden">
      {/* Harvard Photo Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4076&q=80"
          alt="Harvard University"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-50/80 via-white/90 to-gold-50/80"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Шлях до навчання мрії</span>
            <br />
            <span className="text-burgundy-700">починається тут</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-burgundy-600 mb-8 font-light leading-relaxed">
            Індивідуальна підготовка до вступу в топ-школи та університети світу 
            з викладачами з Гарварду, Стенфорду та King's College London
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary text-lg px-10 py-4">
              Безкоштовна консультація
            </button>
            <button className="btn-secondary text-lg px-10 py-4">
              Дізнатися більше
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-burgundy-700 mb-2">95%</div>
              <div className="text-burgundy-600">Успішних вступів</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-burgundy-700 mb-2">PhD</div>
              <div className="text-burgundy-600">Викладачі</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-burgundy-700 mb-2">1:1</div>
              <div className="text-burgundy-600">Індивідуально</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="text-burgundy-700 w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
