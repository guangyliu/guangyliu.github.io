import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import JoinPage from './components/JoinPage';
import { checkForUpdate } from './version';

export default function App() {
  // /join is served as its own path (a copy of index.html, see vite.config.ts).
  const [currentPage, setCurrentPageState] = useState<'home' | 'blog' | 'join'>(
    () => (window.location.pathname.replace(/\/+$/, '') === '/join' ? 'join' : 'home'));
  const setCurrentPage = (page: 'home' | 'blog' | 'join') => {
    const path = page === 'join' ? '/join' : '/';
    if (window.location.pathname !== path) window.history.pushState(null, '', path);
    setCurrentPageState(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const onPop = () => setCurrentPageState(window.location.pathname.replace(/\/+$/, '') === '/join' ? 'join' : 'home');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  const [isDark, setIsDark] = useState(false);

  // Pick up a newly deployed version on load and whenever the tab comes back into view.
  useEffect(() => {
    checkForUpdate();
    const onVisible = () => { if (document.visibilityState === 'visible') checkForUpdate(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background page-fade-in">
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex gap-8" style={{ gap: "2rem" }}>
            <button
              onClick={() => setCurrentPage('home')}
              className="hover:opacity-60 transition-opacity"
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('join')}
              className="hover:opacity-60 transition-opacity"
            >
              Join us
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
        {currentPage === 'home' ? <HomePage /> : currentPage === 'join' ? <JoinPage /> : <BlogPage />}
      </main>
    </div>
  );
}
