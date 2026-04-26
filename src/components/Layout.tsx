import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-grow pt-20"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
