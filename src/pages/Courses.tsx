import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { CheckCircle2, Monitor, Layout, Layers, Box, PenTool, Award, Shapes } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function Courses() {
  const { t } = useTranslation();

  const syllabus = [
    { 
      module: t('courses_page.modules.m1'), 
      title: t('courses_page.modules.m1_title'), 
      topics: t('courses_page.modules.topics.m1', { returnObjects: true }) as string[],
      icon: <PenTool className="w-6 h-6" />
    },
    { 
      module: t('courses_page.modules.m2'), 
      title: t('courses_page.modules.m2_title'), 
      topics: t('courses_page.modules.topics.m2', { returnObjects: true }) as string[],
      icon: <Monitor className="w-6 h-6" />
    },
    { 
      module: t('courses_page.modules.m3'), 
      title: t('courses_page.modules.m3_title'), 
      topics: t('courses_page.modules.topics.m3', { returnObjects: true }) as string[],
      icon: <Layout className="w-6 h-6" />
    },
    { 
      module: t('courses_page.modules.m4'), 
      title: t('courses_page.modules.m4_title'), 
      topics: t('courses_page.modules.topics.m4', { returnObjects: true }) as string[],
      icon: <Box className="w-6 h-6" />
    }
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-gray-900 border-b border-gray-800 pt-24 md:pt-32 pb-16 md:pb-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-4 relative z-10">
          <div className="max-w-3xl space-y-6 text-center md:text-left">
            <h1 className="text-4xl lg:text-7xl font-bold tracking-tight">{t('courses_page.title')}</h1>
            <p className="text-lg md:text-xl text-gray-400">{t('courses_page.subtitle')}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-teal-500" />
                <span className="font-bold text-sm md:text-base">{t('courses_page.batch')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-teal-500" />
                <span className="font-bold text-sm md:text-base">{t('courses_page.seats')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform translate-x-1/4 hidden md:block" />
      </section>

      {/* Curriculum */}
      <section className="max-w-7xl mx-auto px-6 md:px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold">{t('courses_page.curriculum_title')}</h2>
            <p className="text-gray-600">{t('courses_page.curriculum_subtitle')}</p>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest bg-gray-100 px-4 py-2 rounded-lg inline-block">{t('courses_page.total_hours')}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {syllabus.map((item, i) => (
            <div key={i} className="group p-6 md:p-8 bg-white border border-gray-100 rounded-[2rem] md:rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-100 transition-all">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-14 h-14 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <span className="text-xs md:text-sm font-bold text-blue-600 uppercase tracking-widest">{item.module}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{item.title}</h3>
              <ul className="space-y-3 md:space-y-4">
                {item.topics.map((topic, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-600 text-sm md:text-base">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Fees & Schedule */}
      <section className="bg-blue-50 py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] md:rounded-3xl shadow-2xl p-8 md:p-16 grid md:grid-cols-2 gap-12 border border-blue-100">
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold">{t('courses_page.investment_title')}</h2>
            <p className="text-gray-600 text-sm md:text-base">{t('courses_page.investment_subtitle')}</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0"><Layers className="w-6 h-6" /></div>
                <div>
                  <p className="font-bold text-gray-900">{t('courses_page.reg_fee')}</p>
                  <p className="text-xs md:text-sm text-gray-500">{t('courses_page.reg_fee_desc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 shrink-0"><Award className="w-6 h-6" /></div>
                <div>
                  <p className="font-bold text-gray-900">{t('courses_page.cert_title')}</p>
                  <p className="text-xs md:text-sm text-gray-500">{t('courses_page.cert_desc')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white flex flex-col justify-center items-center text-center space-y-6">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">{t('courses_page.access')}</p>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold tracking-tight">{t('courses_page.price')}</p>
              <p className="text-gray-400 text-xs md:text-sm">{t('courses_page.installments')}</p>
            </div>
            <Link to="/contact" className="w-full">
              <Button className="w-full" size="lg">{t('courses_page.apply')}</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
