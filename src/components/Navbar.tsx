import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Shapes } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Button from './ui/Button';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.courses'), path: '/courses' },
    { name: t('nav.features'), path: '/features' },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const toggleLanguage = () => {
    const langs = ['en', 'uz', 'kaa', 'ru'];
    const nextIndex = (langs.indexOf(i18n.language) + 1) % langs.length;
    i18n.changeLanguage(langs[nextIndex]);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl font-mono">CG</div>
              <div className="leading-tight font-bold hidden sm:block">
                <span className="block text-indigo-600">NUKUS</span>
                <span className="text-[9px] text-slate-500 uppercase tracking-widest">{t('footer.academy_name')}</span>
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-colors hover:text-indigo-600",
                  location.pathname === link.path ? "text-indigo-600" : "text-slate-500"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2 xl:space-x-3 bg-slate-50 px-3 xl:px-4 py-2 rounded-full border border-slate-100">
              {['uz', 'kaa', 'ru', 'en'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                  className={cn(
                    "text-[10px] font-black uppercase transition-all hover:scale-110 cursor-pointer",
                    i18n.language === lang ? "text-indigo-600 font-black scale-110" : "text-slate-300 font-black"
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>
            <a href="tel:+998930957778" className="bg-indigo-50 text-indigo-700 px-3 xl:px-4 py-2 rounded-full border border-indigo-100 text-[10px] xl:text-xs font-bold transition-all hover:bg-indigo-100 uppercase tracking-widest whitespace-nowrap">
              +998 93 095 77 78
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
              {['uz', 'kaa', 'ru', 'en'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                  className={cn(
                    "text-[10px] font-black uppercase transition-all",
                    i18n.language === lang ? "text-indigo-600" : "text-slate-300"
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            style={{ originY: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 py-6 px-4 space-y-2 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm font-bold uppercase tracking-widest rounded-xl transition-all",
                  location.pathname === link.path ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-slate-100 mt-4 px-4">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full py-4 text-xs tracking-widest font-black">{t('nav.enroll')}</Button>
              </Link>
              <a href="tel:+998930957778" className="block text-center mt-6 text-sm font-extrabold text-slate-900">
                +998 93 095 77 78
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
