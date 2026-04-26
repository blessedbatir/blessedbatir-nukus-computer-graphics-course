import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Award, Laptop, Users, Rocket, LifeBuoy, FileCheck } from 'lucide-react';

export default function Features() {
  const { t } = useTranslation();

  const highlights = [
    { icon: Laptop, title: t('features_page.highlights.h1_title'), desc: t('features_page.highlights.h1_desc') },
    { icon: Award, title: t('features_page.highlights.h2_title'), desc: t('features_page.highlights.h2_desc') },
    { icon: Users, title: t('features_page.highlights.h3_title'), desc: t('features_page.highlights.h3_desc') },
    { icon: Rocket, title: t('features_page.highlights.h4_title'), desc: t('features_page.highlights.h4_desc') },
    { icon: LifeBuoy, title: t('features_page.highlights.h5_title'), desc: t('features_page.highlights.h5_desc') },
    { icon: FileCheck, title: t('features_page.highlights.h6_title'), desc: t('features_page.highlights.h6_desc') }
  ];

  return (
    <div className="pb-24">
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-white text-center px-6">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">{t('features_page.title')}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {t('features_page.subtitle')}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-12 md:py-16">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, borderColor: '#3b82f6' }}
            className="p-8 md:p-10 bg-white border border-gray-100 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all"
          >
            <div className="w-14 h-14 md:w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 md:mb-8">
              <item.icon className="w-6 h-6 md:w-8 h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Graduation Banner */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 text-white flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="space-y-6 md:w-2/3">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">{t('features_page.banner_title')}</h2>
                <p className="text-blue-100 text-lg">{t('features_page.banner_subtitle')}</p>
            </div>
            <div className="hidden md:block flex-shrink-0 animate-pulse">
                <Award className="w-32 h-32 text-white/20" />
            </div>
        </div>
      </section>
    </div>
  );
}
