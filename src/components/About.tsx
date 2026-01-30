import { motion, Variants } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { Code2, Sparkles, Zap, Target } from 'lucide-react';

// Stats data - customize these to match your experience
const stats = [
  { icon: Code2, label: 'Years Experience', value: '1+' },
  { icon: Zap, label: 'Projects Completed', value: '5+' },
  { icon: Target, label: 'Technologies', value: '15+' },
  { icon: Sparkles, label: 'Production Apps', value: '3+' },
];

interface AboutProps {
  // User will provide 2 paragraphs of text
  paragraph1?: string;
  paragraph2?: string;
}

const About = ({ 
  paragraph1 = "Your first paragraph goes here. This is where you introduce yourself, your passion for development, and what drives you. Keep it concise and impactful.",
  paragraph2 = "Your second paragraph goes here. Highlight your key strengths, what makes you unique, and the value you bring to teams. Focus on outcomes and impact."
}: AboutProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const statsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const statItemVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      {/* Decorative blurred orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-text-secondary font-medium">Get to know me</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            
            {/* Animated underline */}
            <div className="flex justify-center">
              <motion.div 
                className="h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            
            {/* Text Content - Takes up 3 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
              <GlassCard variant="elevated" padding="lg" className="h-full">
                <div className="space-y-6">
                  {/* First Paragraph */}
                  <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                    {paragraph1}
                  </p>
                  
                  {/* Divider */}
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
                    <div className="w-2 h-2 rounded-full bg-cyan-400/50" />
                    <div className="h-px flex-1 bg-gradient-to-l from-purple-500/30 to-transparent" />
                  </div>
                  
                  {/* Second Paragraph */}
                  <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                    {paragraph2}
                  </p>
                </div>

                {/* Skills/Tags - Optional highlight */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-text-tertiary mb-4 font-medium uppercase tracking-wider">
                    Core Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'LangChain', 'Python'].map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 text-sm glass rounded-lg text-text-secondary hover:text-cyan-400 hover:border-cyan-400/30 transition-colors cursor-default"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Stats Grid - Takes up 2 columns */}
            <motion.div 
              variants={statsContainerVariants}
              className="lg:col-span-2 grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={statItemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className={index === 0 || index === 3 ? 'col-span-2 sm:col-span-1' : ''}
                >
                  <GlassCard 
                    variant="default" 
                    padding="lg"
                    className="h-full text-center group hover:border-cyan-400/30 transition-colors"
                  >
                    <motion.div
                      className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-colors"
                      whileHover={{ rotate: 5 }}
                    >
                      <stat.icon className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                    <p className="text-2xl sm:text-3xl font-bold text-text-primary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-text-tertiary">
                      {stat.label}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom CTA - Optional */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 sm:mt-16 text-center"
          >
            <p className="text-text-tertiary mb-4">
              Want to see what I can build?
            </p>
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              whileHover={{ x: 5 }}
            >
              <span className="font-medium">View My Projects</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
