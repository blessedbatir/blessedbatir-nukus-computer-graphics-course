import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowRight, Star, Clock, User, Zap, Palette, Boxes, Award, Shapes } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] px-4 sm:px-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <span className="inline-block py-2 px-4 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            {t('hero.batch_info')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight text-center md:text-left">
            {t('hero.title')}
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-lg leading-relaxed text-center md:text-left mx-auto md:mx-0">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 w-full">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full px-8 py-4">{t('hero.cta')}</Button>
            </Link>
            <Link to="/courses" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full px-8 py-4">{t('hero.syllabus')}</Button>
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-6 border-t border-slate-200 pt-8 uppercase">
            <div className="text-center md:text-left">
              <div className="text-lg md:text-2xl font-bold text-slate-900 leading-tight">{t('stats.duration')}</div>
              <div className="text-[9px] md:text-[10px] text-slate-500 font-bold tracking-widest mt-1">{t('stats.duration_label')}</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-lg md:text-2xl font-bold text-slate-900 leading-tight">{t('stats.focus')}</div>
              <div className="text-[9px] md:text-[10px] text-slate-500 font-bold tracking-widest mt-1">{t('stats.focus_label')}</div>
            </div>
            <div className="text-center md:text-left col-span-2 md:col-span-1">
              <div className="text-lg md:text-2xl font-bold text-slate-900 leading-tight">{t('stats.level')}</div>
              <div className="text-[9px] md:text-[10px] text-slate-500 font-bold tracking-widest mt-1">{t('stats.level_label')}</div>
            </div>
          </div>
        </motion.div>

        {/* Right Visual Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 lg:p-12 border border-slate-100 rounded-[2.5rem] shadow-sm flex flex-col"
        >
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 border-b border-slate-50 pb-4">{t('hero.modules_title')}</h3>
          <div className="space-y-4">
            {[
              { icon: 'Ps', color: 'bg-blue-100 text-blue-600', title: 'Adobe Photoshop', desc: 'Retouching & Digital Art' },
              { icon: 'Ai', color: 'bg-orange-100 text-orange-600', title: 'Adobe Illustrator', desc: 'Vector & Illustration' },
              { icon: '3D', color: 'bg-purple-100 text-purple-600', title: '3D Fundamentals', desc: 'Modeling & Materials' },
              { icon: 'UI', color: 'bg-green-100 text-green-600', title: 'UI/UX Design', desc: 'Interfaces & Prototyping' }
            ].map((mod, i) => (
              <motion.div 
                key={mod.title} 
                whileHover={{ x: 5 }}
                className="p-5 rounded-2xl bg-slate-50/50 border border-slate-100 flex items-center transition-all hover:bg-white hover:shadow-md"
              >
                <div className={`w-12 h-12 ${mod.color} rounded-lg flex items-center justify-center font-bold mr-4 shrink-0`}>{mod.icon}</div>
                <div>
                  <div className="font-bold text-slate-800">{mod.title}</div>
                  <div className="text-xs text-slate-500">{mod.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-slate-900 rounded-3xl text-white relative overflow-hidden group">
            <div className="relative z-10">
              <div className="text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-2">Student Success</div>
              <p className="text-sm italic mb-6 leading-relaxed">{t('home.testimonial_quote')}</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500 border-2 border-slate-800 flex items-center justify-center font-bold text-xs">AA</div>
                <div>
                  <div className="font-bold text-sm">{t('home.testimonial_author')}</div>
                  <div className="text-indigo-300 text-[10px] font-bold uppercase">{t('home.testimonial_year')}</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-indigo-600 rounded-full opacity-10 group-hover:scale-125 transition-transform duration-700" />
          </div>
        </motion.div>
      </section>

      {/* Global Success Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-12 mb-24">
        <div className="bg-indigo-600 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between text-white gap-8 border shadow-2xl shadow-indigo-100 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{t('features_page.banner_title')}</h2>
            <p className="text-indigo-100 text-lg">{t('features_page.banner_subtitle')}</p>
          </div>
          <Link to="/contact" className="w-full md:w-auto">
            <Button size="lg" className="w-full md:w-auto bg-white text-indigo-600 hover:bg-slate-50 border-none shadow-none">{t('hero.cta')}</Button>
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-10 grid md:grid-cols-3 gap-12">
        {[
          { icon: Clock, title: t('home.highlights.h1_title'), desc: t('home.highlights.h1_desc') },
          { icon: User, title: t('home.highlights.h2_title'), desc: t('home.highlights.h2_desc') },
          { icon: Zap, title: t('home.highlights.h3_title'), desc: t('home.highlights.h3_desc') }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="space-y-4"
          >
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
