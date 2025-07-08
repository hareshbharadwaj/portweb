import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection

      let newActiveSection = 'home'; // Default to home
      
      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          // Check if we're in the middle 50% of the section for better accuracy
          const sectionMiddle = offsetTop + (offsetHeight * 0.25);
          const sectionEnd = offsetTop + (offsetHeight * 0.75);
          
          if (scrollPosition >= sectionMiddle && scrollPosition < sectionEnd) {
            newActiveSection = navItems[index].id;
          }
        }
      });
      
      // Only update if different to prevent unnecessary re-renders
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div className="bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 px-6 py-4 shadow-2xl">
        <div className="container mx-auto flex items-center justify-between">
          {/* Portfolio Logo */}
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.div>

          {/* Navigation Menu */}
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
      </div>
    </motion.nav>
  );
}