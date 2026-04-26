import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Send, Phone, MapPin, Mail, Shapes } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="h-auto md:h-20 bg-white border-t border-slate-200 px-6 sm:px-10 py-8 md:py-0 flex flex-col md:flex-row items-center justify-between shrink-0 space-y-6 md:space-y-0">
      <div className="text-xs text-slate-400 font-medium text-center md:text-left leading-relaxed">
        © 2026 <Link to="/admin" className="hover:text-slate-500 transition-colors">{t('footer.academy_name')}</Link>. <span className="block md:inline">{t('footer.rights')}</span>
      </div>
      <div className="flex space-x-6">
        <a href="https://t.me/your_telegram" className="text-slate-400 hover:text-indigo-600 text-[10px] font-bold uppercase tracking-widest transition-colors font-mono">Telegram</a>
        <a href="#" className="text-slate-400 hover:text-indigo-600 text-[10px] font-bold uppercase tracking-widest transition-colors font-mono">Instagram</a>
        <a href="#" className="text-slate-400 hover:text-indigo-600 text-[10px] font-bold uppercase tracking-widest transition-colors font-mono">LinkedIn</a>
      </div>
      <div className="text-[10px] text-slate-400 font-medium italic text-center md:text-right max-w-[200px]">
        {t('contact.address')}
      </div>
    </footer>
  );
}
