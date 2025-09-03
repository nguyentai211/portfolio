import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { useScrollTracking } from './hooks/useScrollTracking';
import { 
  getTranslations, 
  getPersonalData, 
  getExperienceData, 
  getProjectsData 
} from './utils/dataLoader';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { activeSection, isScrolled, scrollToSection } = useScrollTracking();

  // Load data
  const translations = getTranslations(language);
  const personalData = getPersonalData();
  const experienceData = getExperienceData();
  const projectsData = getProjectsData();

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        isScrolled={isScrolled}
        isDarkMode={isDarkMode}
        language={language}
        translations={translations}
        scrollToSection={handleScrollToSection}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
      />

      <HeroSection 
        translations={translations}
        personalData={personalData}
      />

      <AboutSection 
        translations={translations}
        personalData={personalData}
        language={language}
      />

      <ExperienceSection 
        translations={translations}
        experienceData={experienceData}
        language={language}
      />

      <ProjectsSection 
        translations={translations}
        projectsData={projectsData}
        language={language}
      />

      <ContactSection 
        translations={translations}
        personalData={personalData}
        language={language}
      />

      <Footer 
        translations={translations}
        personalData={personalData}
      />
    </div>
  );
};

export default App;