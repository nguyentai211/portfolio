import React, { useEffect, useState } from 'react';
import { User, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Hide splash screen after 1.7 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Wait for fade out animation
    }, 1700);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 z-[9999] flex items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none">
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 z-[9999] flex items-center justify-center transition-opacity duration-300">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center relative z-10">
        {/* Logo/Avatar */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm p-1 animate-scaleIn">
            <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center relative overflow-hidden group">
              <User size={48} className="text-blue-600 animate-pulse-slow" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 animate-float">
            <Sparkles className="text-yellow-300" size={20} />
          </div>
          <div className="absolute -bottom-2 -left-2 animate-float" style={{ animationDelay: '1s' }}>
            <Sparkles className="text-pink-300" size={16} />
          </div>
        </div>

        {/* Loading text */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp">
            tainguyen portfolio
          </h1>
          <div className="flex items-center justify-center space-x-1 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <div className="h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-white to-yellow-300 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white/80 text-sm mt-3 font-medium">
            Loading... {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;