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

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content */}
          <motion.div
            className='space-y-8 z-10'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.div variants={itemVariants} className='space-y-2'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
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
              className='text-sm md:text-md text-text-secondary leading-relaxed max-w-2xl'
            >
              A self taught Full-Stack developer specializing in React, Next.js,
              and React Native. I craft beautiful, performant applications that
              solve real-world problems and deliver exceptional user
              experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className='flex flex-wrap gap-4'
            >
              <Button
                variant='primary'
                size='lg'
                rightIcon={<ArrowRight size={20} />}
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View Projects
              </Button>
              <Button
                variant='secondary'
                size='lg'
                rightIcon={<Download size={20} />}
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download CV
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className='flex space-x-6'>
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
                  className='p-3 glass rounded-lg text-text-secondary hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all'
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
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
            <div className='relative w-80 h-80 md:w-96 md:h-96'>
              {/* Decorative geometric shapes */}
              <motion.div
                className='absolute -top-6 -right-6 w-24 h-24 border-4 border-cyan-400/30 rounded-lg'
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
                className='absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border-2 border-purple-400/30'
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
                className='absolute top-1/2 -right-4 w-16 h-16 border-4 border-pink-400/20 rounded-full'
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Grid pattern decoration */}
              <div className='absolute -top-8 -left-8 w-16 h-16 grid grid-cols-3 gap-2 opacity-30'>
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className='w-2 h-2 bg-cyan-400 rounded-sm'
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
                <div className='relative w-full h-full rounded-xl overflow-hidden group'>
                  <img
                    src='/bijaya.png'
                    alt='Bijaya Adhikari'
                    className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent' />

                  {/* Animated corner accents */}
                  <div className='absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50' />
                  <div className='absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50' />
                </div>
              </motion.div>

              {/* Floating line accent */}
              <motion.div
                className='absolute -bottom-4 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent'
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

      {/* Scroll indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
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
