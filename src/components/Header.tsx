// Header.tsx
import { Mail, Menu, XCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import MessageModel from './MessageModel';
import { Button } from './ui/Button';

const Header = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // If on a different page, navigate home first then scroll
      if (location.pathname !== '/') {
        navigate('/', { replace: true });
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.getElementById(href.slice(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(href.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // External routes like /resume
      navigate(href);
    }
    closeMenu();
  };

  const menuVariants = {
    closed: { x: '100%', opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <>
      <motion.header
        className='fixed top-0 z-50 w-full glass-strong shadow-lg'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <motion.div
              className='flex items-center space-x-3'
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className='w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/25'
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                BJ
              </motion.div>
              <div className='hidden sm:block'>
                <h2 className='text-sm font-semibold text-text-primary'>
                  Bijaya Adhikari
                </h2>
                <p className='text-xs text-text-secondary'>
                  bijayadhikari107@gmail.com
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center space-x-8'>
              {[
                { name: 'Home', href: '#banner' },
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#project' },
                { name: 'Resume', href: '/resume' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className='text-sm font-medium text-text-secondary hover:text-cyan-400 transition-colors relative group'
                >
                  {item.name}
                  <motion.span
                    className='absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400'
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              ))}
            </nav>

            {/* Desktop Contact Button */}
            <motion.div
              className='hidden md:block'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setIsModelOpen(true)}
                leftIcon={<Mail size={16} />}
                size='sm'
                className='text-cyan'
              >
                Send Message
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className='md:hidden p-2 text-text-secondary hover:text-cyan-400 transition-colors'
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className='fixed inset-0 z-40 bg-black/60 backdrop-blur-sm'
              variants={backdropVariants}
              initial='closed'
              animate='open'
              exit='closed'
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.nav
              className='fixed top-0 right-0 w-4/5 max-w-sm h-full glass-strong shadow-2xl flex flex-col'
              variants={menuVariants}
              initial='closed'
              animate='open'
              exit='closed'
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className='flex justify-between items-center p-6 border-b border-border'>
                <h3 className='text-lg font-semibold text-text-primary'>
                  Menu
                </h3>
                <motion.button
                  onClick={closeMenu}
                  className='p-2 text-text-secondary hover:text-cyan-400 transition-colors'
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XCircle size={24} />
                </motion.button>
              </div>

              <div className='flex-1 flex flex-col justify-center p-6 space-y-6'>
                {[
                  { name: 'Home', href: '#banner' },
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#project' },
                  { name: 'Resume', href: '/resume' },
                  { name: 'Contact', href: '#contact' },
                ].map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className='text-lg font-medium text-text-secondary hover:text-cyan-400 transition-colors py-3 px-4 rounded-lg hover:bg-surface/50 w-full text-left'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.button>
                ))}

                <motion.div
                  className='pt-6'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    onClick={() => {
                      setIsModelOpen(true);
                      closeMenu();
                    }}
                    leftIcon={<Mail size={16} />}
                    className='w-full'
                  >
                    Send Message
                  </Button>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className='p-6 border-t border-border'>
                <div className='flex justify-center space-x-4'>
                  {[
                    { icon: 'GitHub', href: 'https://github.com' },
                    { icon: 'LinkedIn', href: 'https://linkedin.com' },
                    { icon: 'Twitter', href: 'https://twitter.com' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 text-text-secondary hover:text-cyan-400 transition-colors font-mono text-sm'
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Message Modal */}
      <AnimatePresence>
        {isModelOpen && (
          <MessageModel
            isModelOpen={isModelOpen}
            setIsModelOpen={setIsModelOpen}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
