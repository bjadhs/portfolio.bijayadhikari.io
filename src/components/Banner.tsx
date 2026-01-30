import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      } as const,
    },
  };

  return (
    <section
      id='banner'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary'
    >
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000' />
        <div className='absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000' />
      </div>

      {/* Grid overlay */}
      <div className='absolute inset-0 bg-grid-pattern opacity-5' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20'>
        <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-12 items-center'>
          {/* Left Column - Text Content */}
          <motion.div
            className='space-y-4 sm:space-y-6 z-10'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.div variants={itemVariants} className='space-y-1 sm:space-y-2'>
              <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight'>
                <span className='block text-text-primary'>👋🏼 Hey there,</span>
                <span className='block'>
                  I'm{' '}
                  <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                    Bijaya Adhikari
                  </span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className='text-xs md:text-sm text-text-secondary leading-relaxed max-w-2xl'
            >
              A self taught Full-Stack developer specializing in React, Next.js,
              and React Native. I craft beautiful, performant applications that
              solve real-world problems and deliver exceptional user
              experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className='flex flex-col sm:flex-row gap-3 items-stretch sm:items-center'
            >
              {/* Astonishing View Projects CTA Button */}
              <motion.button
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className='group relative px-6 py-2.5 font-bold text-white rounded-xl overflow-hidden'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated gradient background */}
                <div className='absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 animate-gradient-x' />
                
                {/* Shimmer effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out' />
                
                {/* Glowing border effect */}
                <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm' />
                <div className='absolute inset-[2px] rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500' />
                
                {/* Pulse ring animation */}
                <div className='absolute inset-0 rounded-xl animate-ping bg-fuchsia-500/30 duration-1000' />
                
                {/* Content */}
                <span className='relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base'>
                  <span className='drop-shadow-lg'>View Projects</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowRight size={18} className='drop-shadow-lg' />
                  </motion.span>
                </span>
              </motion.button>

              <Button
                variant='secondary'
                size='md'
                rightIcon={<Download size={18} />}
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download CV
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className='flex space-x-3 sm:space-x-4'>
              {[
                { href: 'https://github.com', label: 'GitHub' },
                { href: 'https://linkedin.com', label: 'LinkedIn' },
                { href: 'https://twitter.com', label: 'Twitter' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm glass rounded-lg text-text-secondary hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all'
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className='relative flex justify-center lg:justify-end'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className='relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96'>
              {/* Decorative geometric shapes - hidden on mobile */}
              <motion.div
                className='hidden sm:block absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-4 border-cyan-400/30 rounded-lg'
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              <motion.div
                className='hidden sm:block absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border-2 border-purple-400/30'
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className='hidden sm:block absolute top-1/2 -right-3 sm:-right-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-4 border-pink-400/20 rounded-full'
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Grid pattern decoration - smaller on mobile */}
              <div className='hidden sm:grid absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 grid-cols-3 gap-1.5 sm:gap-2 opacity-30'>
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-sm'
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>

              {/* Main image container */}
              <motion.div
                className='relative w-full h-full glass-strong rounded-2xl p-2 neon-glow overflow-hidden'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className='relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden group'>
                  <img
                    src='/bijaya.png'
                    alt='Bijaya Adhikari'
                    className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent' />

                  {/* Animated corner accents - smaller on mobile */}
                  <div className='absolute top-2 left-2 sm:top-4 sm:left-4 w-5 h-5 sm:w-8 sm:h-8 border-l-2 border-t-2 border-cyan-400/50' />
                  <div className='absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-5 h-5 sm:w-8 sm:h-8 border-r-2 border-b-2 border-cyan-400/50' />
                </div>
              </motion.div>

              {/* Floating line accent */}
              <motion.div
                className='absolute -bottom-2 sm:-bottom-4 left-1/4 w-20 sm:w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent'
                animate={{
                  x: [0, 20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on small mobile */}
      <motion.div
        className='hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2'
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className='w-6 h-10 glass rounded-full flex justify-center items-start p-2'>
          <div className='w-1 h-3 bg-cyan-400 rounded-full animate-bounce' />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
