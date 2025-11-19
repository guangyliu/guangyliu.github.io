import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog'>('home');
  const [showSplash, setShowSplash] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex gap-8">
            <button
              onClick={() => setCurrentPage('home')}
              className="hover:opacity-60 transition-opacity"
            >
              Home
            </button>
            {/* Blog button hidden until content is ready */}
            {/* <button
              onClick={() => setCurrentPage('blog')}
              className="hover:opacity-60 transition-opacity"
            >
              Blog
            </button> */}
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-muted rounded-lg transition-all duration-300"
            aria-label="Toggle theme"
          >
            <div className="transform transition-transform duration-300 hover:rotate-12">
              {isDark ? (
                <Sun className="w-5 h-5 transition-transform duration-300" />
              ) : (
                <Moon className="w-5 h-5 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>
      </nav>

      <main className="pt-20">
        {currentPage === 'home' ? <HomePage /> : <BlogPage />}
      </main>
    </div>
  );
}
