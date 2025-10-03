import { useEffect, useState } from 'react';
import { Code } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-accent rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-accent rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo animation */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-30 scale-110 animate-glow"></div>
          <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center border-4 border-primary/20">
            <Code className="w-10 h-10 text-primary" />
          </div>
        </div>

        {/* Brand name */}
        <h1 className="text-3xl font-bold mb-6">
          <span className="gradient-primary bg-clip-text text-transparent">Zoe Dev</span>
        </h1>

        {/* Progress bar */}
        <div className="w-48 h-1.5 bg-secondary/50 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full gradient-primary"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading text */}
        <p className="text-sm text-muted-foreground">
          {progress === 100 ? "Ready" : "Loading portfolio..."}
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;