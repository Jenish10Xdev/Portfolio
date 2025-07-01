import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Particles from './Component/Particles'
import Navigation from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Skills from './Component/Skills'
import Projects from './Component/Projects'
import Awards from './Component/Awards'
import Contact from './Component/Contact'
import ContactForm from './Component/ContactForm'

const themes = {
  default: 'bg-black',
  pink: 'bg-pink-900',
  green: 'bg-green-900',
  blue: 'bg-blue-900',
};

const themeNames = [
  { key: 'default', label: 'Default' },
  { key: 'pink', label: 'Pink' },
  { key: 'green', label: 'Green' },
  { key: 'blue', label: 'Blue' },
];

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'default');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Persist theme in localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  return (
    <>
      {/* Cool Theme Button */}
      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 100 }}>
        <button
          aria-label="Open theme menu"
          className="w-12 h-12 flex items-center justify-center bg-neutral-800 text-white rounded-full shadow-lg border border-white/10 hover:bg-neutral-700 hover:scale-105 transition-all duration-200 focus:outline-none"
          style={{ fontSize: 28 }}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span role="img" aria-label="Theme Palette">🎨</span>
        </button>
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute right-0 mt-2 w-40 bg-black/90 rounded-lg shadow-lg py-2 flex flex-col border border-white/10 animate-fade-in"
            style={{ top: '52px', animation: 'fadeIn 0.2s' }}
          >
            {themeNames.map((t) => (
              <button
                key={t.key}
                className={`w-full text-left px-4 py-2 text-sm font-semibold rounded hover:bg-white/10 transition-colors ${theme === t.key ? 'text-blue-400' : 'text-white'}`}
                onClick={() => { setTheme(t.key); setMenuOpen(false); }}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Full website background with theme */}
      <div className={`${themes[theme]} transition-colors duration-500`} style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Main content above background */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
      </div>
      {/* Fade-in animation for menu */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}

export default App
