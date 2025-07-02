const Footer = () => {
  return <footer className="bg-burgundy-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-burgundy-700 to-gold-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BN</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">BN Education</h3>
                <p className="text-xs text-burgundy-300">Group</p>
              </div>
            </div>
            <p className="text-burgundy-100">Центр підготовки до топ-шкіл та університетів світу. Індивідуальний підхід, кращі викладачі, гарантований результат.</p>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Навігація</h4>
            <ul className="space-y-2 text-burgundy-100">
              <li><a href="#about" className="hover:text-gold-400 transition-colors">Про центр</a></li>
              <li><a href="#process" className="hover:text-gold-400 transition-colors">Як навчаємо</a></li>
              <li><a href="#subjects" className="hover:text-gold-400 transition-colors">Предмети</a></li>
              <li><a href="#success" className="hover:text-gold-400 transition-colors">Історії успіху</a></li>
              <li><a href="#test" className="hover:text-gold-400 transition-colors">Тест</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Контакти</h4>
            <ul className="space-y-2 text-burgundy-100">
              <li>📞 +380 XX XXX XX XX</li>
              <li>📧 info@bngroup.org</li>
              <li>📱 @bn_educationgroup</li>
              <li>🌐 bngroup.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-burgundy-700 mt-8 pt-8 text-center text-burgundy-100">
          <p>© 2025 BN Education Group. Всі права захищені.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;