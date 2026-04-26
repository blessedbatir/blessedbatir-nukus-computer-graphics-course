import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(t('portfolio_page.categories.all'));

  const categories = [
    t('portfolio_page.categories.all'), 
    t('portfolio_page.categories.design'), 
    t('portfolio_page.categories.branding'), 
    t('portfolio_page.categories.three_d'), 
    t('portfolio_page.categories.social')
  ];
  
  const projects = [
    { title: "Eco-Brand Identity", student: "Azamat T.", category: t('portfolio_page.categories.branding'), image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" },
    { title: "Nukus Night Scene", student: "Aygerim M.", category: t('portfolio_page.categories.three_d'), image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop" },
    { title: "Mobile UI Kit", student: "Ruslan K.", category: t('portfolio_page.categories.design'), image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop" },
    { title: "Social Wave Ad", student: "Madiina B.", category: t('portfolio_page.categories.social'), image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop" },
    { title: "Cyberpunk Character", student: "Bekzod S.", category: t('portfolio_page.categories.three_d'), image: "https://images.unsplash.com/photo-1633513213192-358b5f3ee6b3?q=80&w=2072&auto=format&fit=crop" },
    { title: "Minimal Logo Set", student: "Saodat L.", category: t('portfolio_page.categories.branding'), image: "https://images.unsplash.com/photo-1541462608141-ad61093105df?q=80&w=2070&auto=format&fit=crop" },
  ];

  const filtered = activeTab === t('portfolio_page.categories.all') ? projects : projects.filter(p => p.category === activeTab);

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-white pt-24 md:pt-32 pb-12 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">{t('portfolio_page.title')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {t('portfolio_page.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="max-w-7xl mx-auto px-6 mb-8 md:mb-12">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 border-b border-gray-100 pb-6 md:pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-all",
                activeTab === cat ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded">{project.category}</span>
                    <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-tighter">{t('portfolio_page.project_by')} {project.student}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
