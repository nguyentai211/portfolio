import React, { useEffect, useRef } from 'react';
import { Mail, Phone, Github, Globe, Send, MessageCircle } from 'lucide-react';

interface ContactSectionProps {
  translations: any;
  personalData: any;
  language: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ 
  translations, 
  personalData, 
  language 
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-flex items-center space-x-3 mb-6">
            <MessageCircle className="text-green-500 animate-pulse-slow" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {translations.contact.title}
              </span>
            </h2>
            <MessageCircle className="text-blue-500 animate-pulse-slow" size={32} />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {translations.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 fade-in-section stagger-1">
            <h3 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {translations.contact.info}
              </span>
            </h3>
            
            <div className="space-y-6">
              {[
                { 
                  icon: Mail, 
                  label: 'Email', 
                  value: personalData.email, 
                  href: `mailto:${personalData.email}`,
                  gradient: 'from-red-500 to-pink-600'
                },
                { 
                  icon: Phone, 
                  label: language === 'en' ? 'Phone' : 'Điện Thoại', 
                  value: personalData.phone, 
                  href: `tel:${personalData.phone}`,
                  gradient: 'from-green-500 to-emerald-600'
                },
                { 
                  icon: Github, 
                  label: 'GitHub', 
                  value: personalData.github.replace('https://', ''), 
                  href: personalData.github,
                  gradient: 'from-gray-600 to-gray-800'
                },
                { 
                  icon: Globe, 
                  label: language === 'en' ? 'Portfolio' : 'Hồ Sơ', 
                  value: personalData.portfolio.replace('https://', ''), 
                  href: personalData.portfolio,
                  gradient: 'from-blue-500 to-cyan-600'
                }
              ].map(({ icon: Icon, label, value, href, gradient }, index) => (
                <div 
                  key={index}
                  className={`group p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg card-hover animate-fadeInUp relative overflow-hidden`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient.replace('from-', 'from-').replace('to-', 'to-')}/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700`}></div>
                  <div className="flex items-center space-x-4 relative z-10">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${gradient} text-white group-hover:rotate-12 transition-transform duration-300`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                        {label}
                      </p>
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:${gradient} hover:bg-clip-text hover:text-transparent font-medium transition-all duration-300 break-all`}
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in-section stagger-2">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full -translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <h3 className="text-3xl font-bold mb-8 relative z-10">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {translations.contact.form.title}
                </span>
              </h3>
              
              <form className="space-y-6 relative z-10">
                <div className="animate-fadeInUp stagger-1">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    {translations.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500"
                    placeholder={translations.contact.form.placeholders.name}
                  />
                </div>

                <div className="animate-fadeInUp stagger-2">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    {translations.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500"
                    placeholder={translations.contact.form.placeholders.email}
                  />
                </div>

                <div className="animate-fadeInUp stagger-3">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    {translations.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500"
                    placeholder={translations.contact.form.placeholders.message}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 btn-enhanced shadow-xl group animate-fadeInUp stagger-4 relative overflow-hidden"
                >
                  <div className="flex items-center justify-center space-x-3 relative z-10">
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-lg">{translations.contact.form.send}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;