import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const { t } = useTranslation();
  
  const posts = [
    {
      title: "The Rise of Digital Arts in Nukus",
      excerpt: "How technology is reshaping the creative landscape in the heart of Karakalpakstan...",
      author: "Admin",
      date: "Oct 12, 2025",
      image: "https://images.unsplash.com/photo-1547027072-333f016c0985?q=80&w=2070&auto=format&fit=crop",
      tag: t('blog_page.tags.community')
    },
    {
      title: "5 Tips for Beginner 3D Artists",
      excerpt: "Starting with Blender can be overwhelming. Here's a quick guide to getting started...",
      author: "Expert Mentor",
      date: "Nov 05, 2025",
      image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop",
      tag: t('blog_page.tags.tutorials')
    },
    {
      title: "Why Color Theory Matters in 2026",
      excerpt: "Understanding human psychology through the lens of modern digital design colors...",
      author: "Design Lead",
      date: "Dec 01, 2025",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
      tag: t('blog_page.tags.theory')
    }
  ];

  return (
    <div className="pb-24">
      {/* Search Header */}
      <section className="bg-gray-50 pt-24 md:pt-32 pb-12 md:pb-16 border-b border-gray-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t('blog_page.title')}</h1>
            <p className="text-gray-500 text-sm md:text-base">{t('blog_page.subtitle')}</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder={t('blog_page.search')} 
              className="w-full bg-white border border-gray-200 rounded-2xl py-3 md:py-4 pl-12 pr-6 outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-sm md:text-base"
            />
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col h-full bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-blue-600 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                  {post.tag}
                </span>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col space-y-4">
                <div className="flex items-center space-x-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  <Link to={`/blog/${i}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                <Link 
                  to={`/blog/${i}`} 
                  className="inline-flex items-center space-x-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors pt-4 group/link"
                >
                  <span>{t('blog_page.read_more')}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Pagination Placeholder */}
      <section className="max-w-7xl mx-auto px-6 flex justify-center pt-8">
        <div className="flex space-x-2">
          <button className="w-10 h-10 rounded-lg bg-blue-600 text-white font-bold text-sm">1</button>
          <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 font-bold text-sm">2</button>
          <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 font-bold text-sm">3</button>
        </div>
      </section>
    </div>
  );
}
