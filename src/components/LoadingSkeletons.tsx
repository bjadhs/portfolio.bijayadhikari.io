import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SkeletonProps {
  className?: string;
}

const shimmer: Variants = {
  initial: { x: '-100%' },
  animate: {
    x: '100%',
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
    },
  },
};

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg bg-gray-800 ${className}`}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent"
        variants={shimmer}
      />
    </motion.div>
  );
};

export const ProfileSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 p-6 glass rounded-2xl">
      <div className="flex items-center space-x-4">
        <Skeleton className="w-20 h-20 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
};

export const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="glass rounded-2xl overflow-hidden neon-glow">
      <Skeleton className="w-full h-48" />
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="flex space-x-2">
          <Skeleton className="h-8 w-16 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const TechStackSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="glass p-4 rounded-xl space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Skeleton className="w-12 h-12 mx-auto rounded-lg" />
          <Skeleton className="h-4 w-20 mx-auto" />
        </motion.div>
      ))}
    </div>
  );
};

export const HeaderSkeleton: React.FC = () => {
  return (
    <header className="fixed top-0 w-full glass z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Skeleton className="w-8 h-8 rounded-full" />
            <div className="hidden sm:block space-y-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>
          
          <Skeleton className="w-24 h-8 rounded-md" />
        </div>
      </div>
    </header>
  );
};