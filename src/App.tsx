import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Award, Calendar, Briefcase, Moon, Sun, Download, Languages } from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'vi' for Vietnamese

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Initialize language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
  }, []);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Handle language toggle
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'vi' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Translation function
  const t = (en: string, vi: string) => {
    return language === 'en' ? en : vi;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`font-sans ${darkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Portfolio</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {['home', 'about', 'timeline', 'awards', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${
                  activeSection === item 
                    ? 'text-indigo-600 dark:text-indigo-400 font-medium' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-300'
                } transition-colors duration-300`}
              >
                {t(
                  item === 'home' ? 'Home' : 
                  item === 'about' ? 'About' : 
                  item === 'timeline' ? 'Timeline' : 
                  item === 'awards' ? 'Awards' : 
                  item === 'projects' ? 'Projects' : 
                  'Contact',
                  
                  item === 'home' ? 'Trang chủ' : 
                  item === 'about' ? 'Giới thiệu' : 
                  item === 'timeline' ? 'Kinh nghiệm' : 
                  item === 'awards' ? 'Giải thưởng' : 
                  item === 'projects' ? 'Dự án' : 
                  'Liên hệ'
                )}
              </button>
            ))}
            
            {/* Download CV Button */}
            <a 
              href="/John_Doe_CV.pdf" 
              download
              className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300"
            >
              <Download size={18} className="mr-1" />
              {t('Download CV', 'Tải CV')}
            </a>
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <Languages size={18} className="inline mr-1" />
              {language === 'en' ? 'EN/VI' : 'VI/EN'}
            </button>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Dark Mode Toggle (Mobile) */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Language Toggle (Mobile) */}
            <button 
              onClick={toggleLanguage}
              className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {language === 'en' ? 'EN/VI' : 'VI/EN'}
            </button>
            
            <button 
              className="text-gray-600 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              {['home', 'about', 'timeline', 'awards', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`py-2 capitalize ${
                    activeSection === item 
                      ? 'text-indigo-600 dark:text-indigo-400 font-medium' 
                      : 'text-gray-600 dark:text-gray-300'
                  } transition-colors duration-300`}
                >
                  {t(
                    item === 'home' ? 'Home' : 
                    item === 'about' ? 'About' : 
                    item === 'timeline' ? 'Timeline' : 
                    item === 'awards' ? 'Awards' : 
                    item === 'projects' ? 'Projects' : 
                    'Contact',
                    
                    item === 'home' ? 'Trang chủ' : 
                    item === 'about' ? 'Giới thiệu' : 
                    item === 'timeline' ? 'Kinh nghiệm' : 
                    item === 'awards' ? 'Giải thưởng' : 
                    item === 'projects' ? 'Dự án' : 
                    'Liên hệ'
                  )}
                </button>
              ))}
              
              {/* Download CV Button (Mobile) */}
              <a 
                href="/John_Doe_CV.pdf" 
                download
                className="py-2 flex items-center text-indigo-600 dark:text-indigo-400"
              >
                <Download size={18} className="mr-1" />
                {t('Download CV', 'Tải CV')}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 py-16 md:py-0">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl transition-colors duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-2 rounded-full shadow-lg transition-colors duration-300">
                  {t('Developer', 'Lập trình viên')}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-gray-800 dark:text-gray-100 transition-colors duration-300">{t('Hi, I\'m ', 'Xin chào, tôi là ')}</span>
                <span className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300">John Doe</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                {t('Computer Science Student at MIT', 'Sinh viên Khoa học Máy tính tại MIT')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 transition-colors duration-300">
                {t(
                  'Passionate software developer with a focus on creating elegant solutions to complex problems. I love building applications that make a difference.',
                  'Lập trình viên đam mê với trọng tâm tạo ra các giải pháp tinh tế cho các vấn đề phức tạp. Tôi thích xây dựng các ứng dụng tạo nên sự khác biệt.'
                )}
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
                >
                  {t('Contact Me', 'Liên hệ với tôi')}
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition duration-300"
                >
                  {t('View Projects', 'Xem dự án')}
                </button>
                <a 
                  href="/John_Doe_CV.pdf" 
                  download
                  className="bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 flex items-center"
                >
                  <Download size={18} className="mr-2" />
                  {t('Download CV', 'Tải CV')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative text-gray-800 dark:text-white transition-colors duration-300">
            {t('About Me', 'Giới thiệu')}
            <div className="absolute w-20 h-1 bg-indigo-600 dark:bg-indigo-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-2 transition-colors duration-300"></div>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80" 
                  alt="About Me" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">John Doe</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                {t(
                  'I\'m a Computer Science student at MIT with a passion for web development and artificial intelligence. With over 3 years of experience in building web applications, I strive to create intuitive and efficient solutions that solve real-world problems.',
                  'Tôi là sinh viên Khoa học Máy tính tại MIT với niềm đam mê phát triển web và trí tuệ nhân tạo. Với hơn 3 năm kinh nghiệm xây dựng ứng dụng web, tôi luôn cố gắng tạo ra các giải pháp trực quan và hiệu quả giải quyết các vấn đề thực tế.'
                )}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                {t(
                  'My journey in technology began when I was 14, building simple websites for friends and family. Since then, I\'ve expanded my skills to include full-stack development, mobile app development, and machine learning. I\'m constantly learning and exploring new technologies to stay at the forefront of the industry.',
                  'Hành trình công nghệ của tôi bắt đầu khi tôi 14 tuổi, xây dựng các trang web đơn giản cho bạn bè và gia đình. Kể từ đó, tôi đã mở rộng kỹ năng của mình bao gồm phát triển full-stack, phát triển ứng dụng di động và học máy. Tôi liên tục học hỏi và khám phá các công nghệ mới để luôn đi đầu trong ngành.'
                )}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Mail size={20} className="text-indigo-600 dark:text-indigo-400 mr-2 transition-colors duration-300" />
                  <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">john.doe@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="text-indigo-600 dark:text-indigo-400 mr-2 transition-colors duration-300" />
                  <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={20} className="text-indigo-600 dark:text-indigo-400 mr-2 transition-colors duration-300" />
                  <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Boston, MA</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={20} className="text-indigo-600 dark:text-indigo-400 mr-2 transition-colors duration-300" />
                  <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    {t('Available from July 2025', 'Sẵn sàng từ tháng 7 năm 2025')}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white p-3 rounded-full transition duration-300">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white p-3 rounded-full transition duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative text-gray-800 dark:text-white transition-colors duration-300">
            {t('Experience Timeline', 'Kinh nghiệm làm việc')}
            <div className="absolute w-20 h-1 bg-indigo-600 dark:bg-indigo-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-2 transition-colors duration-300"></div>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-800 transition-colors duration-300"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                    {t('Software Engineer Intern', 'Thực tập sinh Kỹ sư Phần mềm')}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium transition-colors duration-300">Google</p>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    {t('May 2024 - August 2024', 'Tháng 5/2024 - Tháng 8/2024')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 transition-colors duration-300">
                    {t(
                      'Worked on the development of internal tools using React and Node.js. Implemented new features and fixed bugs in the existing codebase.',
                      'Làm việc phát triển các công cụ nội bộ sử dụng React và Node.js. Triển khai tính năng mới và sửa lỗi trong codebase hiện có.'
                    )}
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-start md:justify-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center shadow-lg z-10 transition-colors duration-300">
                    <Briefcase size={20} className="text-white" />
                  </div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12 md:text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                    {t('Frontend Developer', 'Lập trình viên Frontend')}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium transition-colors duration-300">
                    {t('Tech Startup', 'Công ty khởi nghiệp công nghệ')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    {t('June 2023 - April 2024', 'Tháng 6/2023 - Tháng 4/2024')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 transition-colors duration-300">
                    {t(
                      'Developed responsive web applications using React and TypeScript. Collaborated with designers to implement UI/UX improvements.',
                      'Phát triển ứng dụng web responsive sử dụng React và TypeScript. Hợp tác với nhà thiết kế để cải thiện UI/UX.'
                    )}
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-end md:justify-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center shadow-lg z-10 transition-colors duration-300">
                    <Briefcase size={20} className="text-white" />
                  </div>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                    {t('Web Development Intern', 'Thực tập sinh Phát triển Web')}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium transition-colors duration-300">
                    {t('Local Agency', 'Công ty địa phương')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    {t('May 2022 - August 2022', 'Tháng 5/2022 - Tháng 8/2022')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 transition-colors duration-300">
                    {t(
                      'Assisted in the development of client websites using HTML, CSS, and JavaScript. Learned about responsive design principles and SEO best practices.',
                      'Hỗ trợ phát triển các trang web khách hàng sử dụng HTML, CSS và JavaScript. Học về nguyên tắc thiết kế responsive và các phương pháp tối ưu SEO.'
                    )}
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-start md:justify-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center shadow-lg z-10 transition-colors duration-300">
                    <Briefcase size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative text-gray-800 dark:text-white transition-colors duration-300">
            {t('Awards & Activities', 'Giải thưởng & Hoạt động')}
            <div className="absolute w-20 h-1 bg-indigo-600 dark:bg-indigo-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-2 transition-colors duration-300"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Award 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                  <Award size={24} className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                  {t('Hackathon Winner', 'Người chiến thắng Hackathon')}
                </h3>
              </div>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 transition-colors duration-300">
                {t('MIT Hackathon 2024', 'MIT Hackathon 2024')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {t(
                  'First place in the annual MIT Hackathon for developing an AI-powered accessibility tool for visually impaired users.',
                  'Giải nhất tại MIT Hackathon thường niên cho việc phát triển công cụ trợ năng hỗ trợ bởi AI cho người khiếm thị.'
                )}
              </p>
            </div>
            
            {/* Award 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                  <Award size={24} className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                  {t('Dean\'s List', 'Danh sách Decan')}
                </h3>
              </div>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 transition-colors duration-300">2022 - 2024</p>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {t(
                  'Recognized for academic excellence with a GPA of 3.9/4.0 for three consecutive years.',
                  'Được công nhận về thành tích học tập xuất sắc với GPA 3.9/4.0 trong ba năm liên tiếp.'
                )}
              </p>
            </div>
            
            {/* Award 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                  <Award size={24} className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                  {t('Research Grant', 'Tài trợ Nghiên cứu')}
                </h3>
              </div>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 transition-colors duration-300">
                {t('Summer 2023', 'Mùa hè 2023')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {t(
                  'Received a $10,000 research grant for a project on machine learning applications in healthcare.',
                  'Nhận được khoản tài trợ nghiên cứu $10,000 cho dự án về ứng dụng học máy trong chăm sóc sức khỏe.'
                )}
              </p>
            </div>
            
            {/* Activity 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                  <Calendar size={24} className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                  {t('Volunteer Teaching', 'Dạy học Tình nguyện')}
                </h3>
              </div>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 transition-colors duration-300">
                {t('2022 - Present', '2022 - Hiện tại')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {t(
                  'Teaching programming to underprivileged high school students through a weekly workshop program.',
                  'Dạy lập trình cho học sinh trung học có hoàn cảnh khó khăn thông qua chương trình hội thảo hàng tuần.'
                )}
              </p>
            </div>
            
            {/* Activity 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                  <Calendar size={24} className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                  {t('Tech Conference Speaker', 'Diễn giả Hội nghị Công nghệ')}
                </h3>
              </div>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 transition-colors duration-300">2023</p>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {t(
                  'Presented a talk on "The Future of Web Development" at the annual TechCon conference.',
                  'Trình bày bài nói chuyện về "Tương lai của Phát triển Web" tại hội nghị TechCon thường niên.'
                )}
              </p>
            </div>
            
            {/* Activity 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                  <Calendar size={24} className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                  {t('Open Source Contributor', 'Người đóng góp Mã nguồn Mở')}
                </h3>
              </div>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 transition-colors duration-300">
                {t('2021 - Present', '2021 - Hiện tại')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {t(
                  'Active contributor to several open-source projects, including React libraries and developer tools.',
                  'Người đóng góp tích cực cho nhiều dự án mã nguồn mở, bao gồm các thư viện React và công cụ phát triển.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative text-gray-800 dark:text-white transition-colors duration-300">
            {t('My Projects', 'Dự án của tôi')}
            <div className="absolute w-20 h-1 bg-indigo-600 dark:bg-indigo-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-2 transition-colors duration-300"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Project 1" 
                  className="w-full h-full object-cover transition duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                  {t('E-commerce Platform', 'Nền tảng Thương mại Điện tử')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {t(
                    'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, and payment processing.',
                    'Nền tảng thương mại điện tử full-stack được xây dựng bằng React, Node.js và MongoDB. Tính năng bao gồm xác thực người dùng, tìm kiếm sản phẩm và xử lý thanh toán.'
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">React</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">Node.js</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">MongoDB</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">Stripe</span>
                </div>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300"
                >
                  {t('View on GitHub', 'Xem trên GitHub')} <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
                  alt="Project 2" 
                  className="w-full h-full object-cover transition duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                  {t('AI Image Generator', 'Trình tạo Hình ảnh AI')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {t(
                    'A web application that uses machine learning to generate unique images based on text descriptions. Built with React and TensorFlow.js.',
                    'Ứng dụng web sử dụng học máy để tạo ra hình ảnh độc đáo dựa trên mô tả văn bản. Được xây dựng bằng React và TensorFlow.js.'
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">React</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">TensorFlow.js</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">Express</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">Canvas API</span>
                </div>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300"
                >
                  {t('View on GitHub', 'Xem trên GitHub')} <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash. <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Project 3" 
                  className="w-full h-full object-cover transition duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                  {t('Task Management App', 'Ứng dụng Quản lý Công việc')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {t(
                    'A productivity application for managing tasks and projects. Features include drag-and-drop organization, reminders, and team collaboration.',
                    'Ứng dụng năng suất để quản lý công việc và dự án. Tính năng bao gồm tổ chức kéo thả, nhắc nhở và cộng tác nhóm.'
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">React</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">Redux</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">Firebase</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">Material UI</span>
                </div>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300"
                >
                  {t('View on GitHub', 'Xem trên GitHub')} <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            {/* Project 4 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Project 4" 
                  className="w-full h-full object-cover transition duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                  {t('Weather Dashboard', 'Bảng điều khiển Thời tiết')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {t(
                    'A weather application that provides real-time weather data and forecasts for locations worldwide. Includes interactive maps and charts.',
                    'Ứng dụng thời tiết cung cấp dữ liệu thời tiết thời gian thực và dự báo cho các địa điểm trên toàn thế giới. Bao gồm bản đồ và biểu đồ tương tác.'
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">JavaScript</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">OpenWeather API</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">Chart.js</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">Leaflet</span>
                </div>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300"
                >
                  {t('View on GitHub', 'Xem trên GitHub')} <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            {/* Project 5 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
                  alt="Project 5" 
                  className="w-full h-full object-cover transition duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                  {t('Social Media Dashboard', 'Bảng điều khiển Mạng xã hội')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {t(
                    'A dashboard for managing and analyzing social media accounts across multiple platforms. Includes analytics, scheduling, and content management.',
                    'Bảng điều khiển để quản lý và phân tích tài khoản mạng xã hội trên nhiều nền tảng. Bao gồm phân tích, lập lịch và quản lý nội dung.'
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">React</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">GraphQL</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">Apollo</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">D3.js</span>
                </div>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300"
                >
                  {t('View on GitHub', 'Xem trên GitHub')} <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            {/* Project 6 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" 
                  alt="Project 6" 
                  className="w-full h-full object-cover transition duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                  {t('Code Learning Platform', 'Nền tảng Học Lập trình')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {t(
                    'An interactive platform for learning programming languages with real-time code execution, challenges, and progress tracking.',
                    'Nền tảng tương tác để học các ngôn ngữ lập trình với thực thi mã thời gian thực, thử thách và theo dõi tiến độ.'
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">Vue.js</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">Express</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">Docker</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full transition-colors duration-300">Monaco Editor</span>
                </div>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300"
                >
                  {t('View on GitHub', 'Xem trên GitHub')} <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative text-gray-800 dark:text-white transition-colors duration-300">
            {t('Get In Touch', 'Liên hệ')}
            <div className="absolute w-20 h-1 bg-indigo-600 dark:bg-indigo-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-2 transition-colors duration-300"></div>
          </h2>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
                {t('Contact Information', 'Thông tin Liên hệ')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                {t(
                  'Feel free to reach out to me for job opportunities, collaborations, or just to say hello. I\'m always open to discussing new projects and ideas.',
                  'Hãy liên hệ với tôi để biết về cơ hội việc làm, hợp tác, hoặc chỉ để chào hỏi. Tôi luôn sẵn sàng thảo luận về các dự án và ý tưởng mới.'
                )}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                    <Mail size={24} className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 dark:text-white font-medium transition-colors duration-300">
                      {t('Email', 'Email')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">john.doe@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                    <Phone size={24} className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 dark:text-white font-medium transition-colors duration-300">
                      {t('Phone', 'Điện thoại')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                    <MapPin size={24} className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 dark:text-white font-medium transition-colors duration-300">
                      {t('Location', 'Địa điểm')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Boston, MA</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white p-3 rounded-full transition duration-300">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white p-3 rounded-full transition duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md transition-colors duration-300">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 transition-colors duration-300">
                    {t('Name', 'Họ tên')}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
                    placeholder={t('Your name', 'Họ tên của bạn')}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 transition-colors duration-300">
                    {t('Email', 'Email')}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
                    placeholder={t('Your email', 'Email của bạn')}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 transition-colors duration-300">
                    {t('Message', 'Tin nhắn')}
                  </label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
                    placeholder={t('Your message', 'Tin nhắn của bạn')}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-md transition duration-300"
                >
                  {t('Send Message', 'Gửi tin nhắn')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-400">
                {t('Software Developer', 'Lập trình viên')}
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-gray-400 hover:text-white transition duration-300">
                {t('Home', 'Trang chủ')}
              </a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-400 hover:text-white transition duration-300">
                {t('About', 'Giới thiệu')}
              </a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="text-gray-400 hover:text-white transition duration-300">
                {t('Projects', 'Dự án')}
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-gray-400 hover:text-white transition duration-300">
                {t('Contact', 'Liên hệ')}
              </a>
            </div>
          </div>
          
          <hr className="border-gray-700 my-6" />
          
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} John Doe. {t('All rights reserved.', 'Tất cả các quyền được bảo lưu.')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;