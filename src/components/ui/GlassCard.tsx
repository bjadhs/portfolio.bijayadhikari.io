import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'minimal';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hover = true,
  onClick,
  ...props
}) => {
  const variants = {
    default: 'glass border-border rounded-2xl',
    elevated: 'glass-strong border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-500/10',
    minimal: 'glass border-transparent rounded-xl backdrop-blur-sm',
  };

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  return (
    <motion.div
      className={cn(
        variants[variant],
        paddings[padding],
        className,
        'transition-all duration-300'
      )}
      whileHover={hover ? {
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0, 255, 255, 0.15)',
        borderColor: 'rgba(0, 255, 255, 0.3)',
      } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  className,
  maxWidth = '2xl',
  ...props
}) => {
  const widths = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        widths[maxWidth],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};