import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MapPin, Target, Eye, Users } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 md:py-32 text-white overflow-hidden relative px-4 md:px-0">
        <div className="max-w-7xl mx-auto md:px-10 relative z-10 text-center md:text-left">
          <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight mb-4">{t('about_page.title')}</h1>
          <p className="text-slate-400 max-w-2xl text-lg mx-auto md:mx-0">{t('about_page.subtitle')}</p>
        </div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-20" />
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest border-b border-indigo-50 pb-2 inline-block">
              {t('about_page.mission_title')}
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              {t('about_page.mission_desc')}
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-xs font-bold text-teal-600 uppercase tracking-widest border-b border-teal-50 pb-2 inline-block">
              {t('about_page.vision_title')}
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              {t('about_page.vision_desc')}
            </p>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
            alt="Students collaborating" 
            className="rounded-[2rem] md:rounded-[3rem] shadow-2xl border-2 md:border-4 border-white"
          />
        </div>
      </section>

      {/* Why Nukus? */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold">{t('about_page.why_title')}</h2>
            <p className="text-gray-600 max-w-xl mx-auto">{t('about_page.why_subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: t('about_page.feature1_title'), desc: t('about_page.feature1_desc') },
              { icon: Users, title: t('about_page.feature2_title'), desc: t('about_page.feature2_desc') },
              { icon: Users, title: t('about_page.feature3_title'), desc: t('about_page.feature3_desc') }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
