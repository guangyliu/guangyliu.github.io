import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [currentText, setCurrentText] = useState(0);
  
  const texts = [
    "Modeling the World",
    "Building Intelligent Worlds",
    "Welcome"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="h-20 flex items-center justify-center">
          <h1
            key={currentText}
            className="animate-[fadeIn_0.5s_ease-in-out]"
          >
            {texts[currentText]}
          </h1>
        </div>
        <div className="w-24 h-0.5 bg-foreground mx-auto animate-[expand_1.5s_ease-in-out]" />
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }
      `}</style>
    </div>
  );
}