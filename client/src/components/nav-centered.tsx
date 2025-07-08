import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

export function CenteredNavigation() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollToSection } = useSmoothScroll();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-full px-6 py-3 shadow-2xl">
        <ul className="flex space-x-1">
          {navItems.map((item) => (
            <motion.li key={item.id}>
              <motion.button
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeSection === item.id 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}