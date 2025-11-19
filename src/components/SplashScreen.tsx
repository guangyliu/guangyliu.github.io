import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [currentText, setCurrentText] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const texts = [
    "Modeling the World",
    "Building Intelligent Worlds",
    "Welcome"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 1000);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2700);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-background flex items-center justify-center transition-opacity duration-700 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center space-y-8">
        <div className="h-20 flex items-center justify-center">
          <h1
            key={currentText}
            className="animate-[fadeInUp_0.6s_ease-out]"
          >
            {texts[currentText]}
          </h1>
        </div>
        <div className="w-24 h-0.5 bg-foreground mx-auto animate-[expand_1.5s_ease-out]" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          0% {
            width: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 6rem;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}