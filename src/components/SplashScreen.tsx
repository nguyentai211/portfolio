import React, { useEffect, useState } from 'react';
import { User, Sparkles, Code, Zap } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    { text: 'Initializing...', icon: Sparkles },
    { text: 'Loading components...', icon: Code },
    { text: 'Setting up portfolio...', icon: User },
    { text: 'Almost ready...', icon: Zap },
    { text: 'Welcome!', icon: Sparkles }
  ];

  useEffect(() => {
    // Smooth progress animation using requestAnimationFrame
    let animationId: number;
    let startTime: number;
    const duration = 2000; // 2 seconds

    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progressPercent = Math.min((elapsed / duration) * 100, 100);
      
      // Smooth easing function
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progressPercent / 100) * 100;
      
      setProgress(easedProgress);
      
      // Update step based on progress
      const stepIndex = Math.floor((easedProgress / 100) * (loadingSteps.length - 1));
      setCurrentStep(stepIndex);

      if (progressPercent < 100) {
        animationId = requestAnimationFrame(animateProgress);
      } else {
        // Complete loading
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 400);
        }, 500);
      }
    };

    animationId = requestAnimationFrame(animateProgress);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 z-[9999] flex items-center justify-center opacity-0 transition-opacity duration-400 pointer-events-none">
      </div>
    );
  }

  const CurrentIcon = loadingSteps[currentStep]?.icon || Sparkles;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 z-[9999] flex items-center justify-center transition-opacity duration-400">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10 max-w-md mx-auto px-6">
        {/* Main logo with pulsing effect */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm p-1 animate-scaleIn">
            <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center relative overflow-hidden">
              <CurrentIcon 
                size={32} 
                className="text-blue-600 transition-all duration-500 ease-in-out" 
                style={{
                  transform: `scale(${1 + Math.sin(progress / 10) * 0.1})`
                }}
              />
            </div>
          </div>
          
          {/* Floating sparkles */}
          <div className="absolute -top-2 -right-2 animate-float">
            <Sparkles className="text-yellow-300" size={16} />
          </div>
          <div className="absolute -bottom-2 -left-2 animate-float" style={{ animationDelay: '1s' }}>
            <Sparkles className="text-pink-300" size={12} />
          </div>
        </div>

        {/* Brand name */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-fadeInUp">
          Tài Nguyễn
        </h1>
        <p className="text-white/80 text-lg mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Portfolio
        </p>

        {/* Loading step indicator */}
        <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-white/90 text-sm font-medium mb-2 transition-all duration-300">
            {loadingSteps[currentStep]?.text || 'Loading...'}
          </p>
        </div>

        {/* Enhanced progress bar */}
        <div className="w-full max-w-xs mx-auto animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="relative h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            {/* Background glow */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-white/10 to-yellow-300/20 rounded-full transition-all duration-300"
              style={{ 
                width: `${progress}%`,
                filter: 'blur(4px)'
              }}
            />
            
            {/* Main progress bar */}
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-white via-yellow-300 to-white rounded-full transition-all duration-100 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse rounded-full" />
            </div>
          </div>
          
          {/* Progress percentage */}
          <div className="flex justify-between items-center mt-3">
            <span className="text-white/60 text-xs font-medium">
              {Math.round(progress)}%
            </span>
            <span className="text-white/60 text-xs">
              {currentStep + 1}/{loadingSteps.length}
            </span>
          </div>
        </div>

        {/* Animated dots */}
        <div className="flex items-center justify-center space-x-1 mt-6 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;