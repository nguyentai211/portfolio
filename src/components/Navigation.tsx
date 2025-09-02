import React from 'react';
import { 
  Menu, 
  X, 
  User, 
  Briefcase, 
  Folder, 
  Mail, 
  Sun, 
  Moon, 
  Languages 
} from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  isScrolled: boolean;
  isDarkMode: boolean;
  language: string;
  translations: any;
  scrollToSection: (sectionId: string) => void;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  isScrolled,
  isDarkMode,
  language,
  translations,
  scrollToSection,
  toggleTheme,
  toggleLanguage
}) => {
  const navItems = [
    { id: 'home', label: translations.nav.home, icon: User },
    { id: 'about', label: translations.nav.about, icon: User },
    { id: 'experience', label: translations.nav.experience, icon: Briefcase },
    { id: 'projects', label: translations.nav.projects, icon: Folder },
    { id: 'contact', label: translations.nav.contact, icon: Mail }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'nav-enhanced shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold gradient-text-animated float-animation">
          <div className="text-2xl font-bold gradient-text-animated">
            Tài Nguyễn
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg enhanced-hover magnetic whitespace-nowrap ${
                c                }
lassName={`flex items-center space-x-1 px-3 py-2 rounded-lg enhanced-hover whitespace-nowrap ${
                  activeSection === id
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <Icon size={16} />
                <span className="text-sm xl:text-base">{label}</span>
              </button>
            ))}
          </div>

          {/* Theme and Language toggles */}
          <div className="hidden lg:flex items-center space-x-2 ml-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 enhanced-hover"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 enhanced-hover"
              title="Switch language"
            >
              <Languages size={20} />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 ml-auto enhanced-hover"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            {/* Mobile Theme and Language toggles */}
            <div className="flex items-center justify-center space-x-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700 stagger-animation">
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 btn-enhanced"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                <span className="text-sm">{isDarkMode ? 'Light' : 'Dark'}</span>
              </button>
              
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 btn-enhanced"
              >
                <Languages size={20} />
                <span className="text-sm">{language === 'en' ? 'Tiếng Việt' : 'English'}</span>
              </button>
            </div>
            
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="flex items-center space-x-2 w-full px-4 py-3 text-left text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg enhanced-hover"
              >
                <Icon size={20} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
    )
    )
    }
  )
}