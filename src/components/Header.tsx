// Header.tsx
import {
  Mail,
  Menu,
  X,
  Home,
  User,
  Briefcase,
  FileText,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import MessageModel from './MessageModel';
import { Button } from './ui/Button';

const Header = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('banner');
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const headerOpacity = useTransform(scrollY, [0, 50], [0.95, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['banner', 'about', 'project', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/', { replace: true });
        setTimeout(() => {
          const element = document.getElementById(href.slice(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(href.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
    closeMenu();
  };

  const isActive = (href: string) => {
    if (href.startsWith('#')) {
      return activeSection === href.slice(1);
    }
    return location.pathname === href;
  };

  const menuVariants = {
    closed: { x: '100%', opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const navItems = [
    { name: 'Home', href: '#banner', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#project', icon: Briefcase },
    { name: 'Resume', href: '/resume', icon: FileText },
  ];

  return (
    <>
      <motion.header
        className='fixed top-0 z-50 w-full backdrop-blur-xl border-b border-border/50 bg-bg-primary/80 dark:bg-bg-primary/80'
        style={{
          opacity: headerOpacity,
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo */}
            <motion.button
              onClick={() => handleNavigation('#banner')}
              className='flex items-center space-x-3 group hover:bg-cyan-400/10 rounded-xl p-2 -m-2 transition-colors duration-200'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className='relative w-12 h-12'
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity' />
                <div className='relative w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center font-bold text-white text-lg shadow-lg'>
                  BJ
                </div>
              </motion.div>
              <div className='hidden sm:block'>
                <h2 className='text-base font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                  Bijaya Adhikari
                </h2>
                <p className='text-xs text-text-tertiary font-mono'>
                  Full Stack Developer
                </p>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center space-x-1'>
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className='relative px-4 py-2 text-sm font-medium rounded-lg transition-colors group'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span
                      className={`flex items-center gap-2 relative z-10 ${
                        active
                          ? 'text-cyan-400'
                          : 'text-text-secondary group-hover:text-cyan-400'
                      }`}
                    >
                      <Icon size={16} />
                      {item.name}
                    </span>
                    {active && (
                      <motion.div
                        layoutId='activeTab'
                        className='absolute inset-0 bg-cyan-400/10 border border-cyan-400/30 rounded-lg'
                        initial={false}
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {!active && (
                      <motion.div
                        className='absolute inset-0 bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100'
                        initial={false}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.button>
                );
              })}

              {/* Get in Touch Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setIsModelOpen(true)}
                  leftIcon={<Mail size={16} />}
                  size='sm'
                  variant='neon'
                  className='ml-2'
                >
                  Get in Touch
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className='md:hidden relative p-2.5 rounded-lg bg-surface/50 border border-border hover:border-cyan-400/50 hover:bg-cyan-400/5 text-text-secondary hover:text-cyan-400 transition-all'
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
              className='fixed inset-0 z-40 bg-black/80 backdrop-blur-md'
              variants={backdropVariants}
              initial='closed'
              animate='open'
              exit='closed'
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.nav
              className='fixed top-0 right-0 w-full max-w-md h-full bg-bg-primary/95 backdrop-blur-2xl border-l border-border/50 shadow-2xl flex flex-col z-50'
              variants={menuVariants}
              initial='closed'
              animate='open'
              exit='closed'
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className='flex justify-between items-center p-6 border-b border-border/50'>
                <div>
                  <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                    Navigation
                  </h3>
                  <p className='text-xs text-text-tertiary mt-0.5'>
                    Explore my portfolio
                  </p>
                </div>
                <motion.button
                  onClick={closeMenu}
                  className='p-2.5 rounded-lg bg-surface/50 border border-border hover:border-cyan-400/50 text-text-secondary hover:text-cyan-400 transition-all'
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className='flex-1 flex flex-col justify-center px-6 py-8 space-y-3'>
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      className={`relative flex items-center gap-4 text-lg font-semibold py-4 px-5 rounded-xl transition-all ${
                        active
                          ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30'
                          : 'text-text-secondary hover:text-cyan-400 hover:bg-surface/50 border border-transparent hover:border-border'
                      }`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.08,
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                      }}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon
                        size={22}
                        className={
                          active ? 'text-cyan-400' : 'text-text-tertiary'
                        }
                      />
                      <span>{item.name}</span>
                      {active && (
                        <motion.div
                          className='absolute right-5 w-2 h-2 bg-cyan-400 rounded-full'
                          layoutId='mobileDot'
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}

                <motion.div
                  className='pt-4'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    onClick={() => {
                      setIsModelOpen(true);
                      closeMenu();
                    }}
                    leftIcon={<Mail size={18} />}
                    className='w-full'
                    variant='neon'
                    size='lg'
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                className='p-6 border-t border-border/50 bg-surface/30'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className='text-xs text-text-tertiary mb-4 text-center'>
                  Connect with me
                </p>
                <div className='flex justify-center gap-4'>
                  {[
                    {
                      label: 'GitHub',
                      href: 'https://github.com',
                      svg: (
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                        </svg>
                      ),
                    },
                    {
                      label: 'LinkedIn',
                      href: 'https://linkedin.com',
                      svg: (
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                        </svg>
                      ),
                    },
                    {
                      label: 'Twitter',
                      href: 'https://twitter.com',
                      svg: (
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                        </svg>
                      ),
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-3 rounded-lg bg-surface/50 border border-border hover:border-cyan-400/50 hover:bg-cyan-400/10 text-text-secondary hover:text-cyan-400 transition-all'
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                    >
                      {social.svg}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
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
