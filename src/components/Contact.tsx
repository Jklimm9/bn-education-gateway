
import { useState } from 'react';
import { Phone, Mail, Instagram, Link } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-burgundy-700 to-burgundy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Зв'яжіться з нами
          </h2>
          <p className="text-xl text-burgundy-100 max-w-3xl mx-auto">
            Готові розпочати шлях до навчання мрії? Залиште заявку на безкоштовну консультацію
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-3xl font-semibold mb-8">
                Наші контакти
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-burgundy-700" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон (WhatsApp)</p>
                    <p className="text-burgundy-100">+380 XX XXX XX XX</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-burgundy-700" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-burgundy-100">info@bngroup.org</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-burgundy-700" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-burgundy-100">@bn_educationgroup</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center">
                    <Link className="w-6 h-6 text-burgundy-700" />
                  </div>
                  <div>
                    <p className="font-medium">Веб-сайт</p>
                    <p className="text-burgundy-100">bngroup.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-semibold mb-6">
              Залишити заявку
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше ім'я"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-burgundy-100 focus:outline-none focus:border-gold-400"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-burgundy-100 focus:outline-none focus:border-gold-400"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-burgundy-100 focus:outline-none focus:border-gold-400"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Повідомлення (необов'язково)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-burgundy-100 focus:outline-none focus:border-gold-400 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gold-400 hover:bg-gold-500 text-burgundy-700 font-bold py-4 px-6 rounded-lg transition-colors duration-300"
              >
                Відправити заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
