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
            <motion.div variants={itemVariants}>
              <motion.div
                className='inline-flex items-center space-x-2 px-4 py-2 glass rounded-full neon-glow'
                whileHover={{ scale: 1.05 }}
              >
                <div className='w-2 h-2 bg-cyan-400 rounded-full animate-pulse' />
                <span className='text-sm font-medium text-cyan-400'>
                  Software Engineer
                </span>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
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
              className='text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl'
            >
              Full-stack developer specializing in React, Next.js, and React
              Native. I craft beautiful, performant applications that solve
              real-world problems and deliver exceptional user experiences.
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
                  className='p-3 glass rounded-lg text-text-secondary hover:text-cyan-400 hover:border-cyan-400/50 transition-all'
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
            <div className='relative'>
              <motion.div
                className='relative w-80 h-80 md:w-96 md:h-96 glass-strong rounded-2xl p-2 neon-glow'
                animate={{
                  rotateY: [0, 5, -5, 0],
                  rotateX: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className='relative w-full h-full rounded-xl overflow-hidden'>
                  <img
                    src='/bj.png'
                    alt='Bijaya Adhikari'
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent' />
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className='absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-sm'
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className='absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-sm'
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
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
