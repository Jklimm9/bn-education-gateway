
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'Про центр' },
    { href: '#process', label: 'Як навчаємо' },
    { href: '#subjects', label: 'Предмети' },
    { href: '#test', label: 'Тест' },
    { href: '#contact', label: 'Контакти' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-burgundy-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-burgundy-700 to-gold-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">BN</span>
            </div>
            <div>
              <h1 className="font-playfair font-bold text-xl text-burgundy-700">BN Education</h1>
              <p className="text-xs text-burgundy-600">Group</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-burgundy-700 hover:text-gold-400 font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button className="hidden md:block bg-burgundy-700 hover:bg-burgundy-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105">
            Безкоштовна консультація
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-burgundy-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-burgundy-100">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-burgundy-700 hover:text-gold-400 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-burgundy-700 hover:bg-burgundy-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 mt-4">
                Безкоштовна консультація
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
