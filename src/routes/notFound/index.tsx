import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';

export default function NotFoundPage() {
    const isMobile=useIsMobile()
    const MotionComponent = isMobile ? 'div' :motion.div  ;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 dark:bg-dark-900 text-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-8xl font-extrabold text-primary-500 mb-6"
      >
        404
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4"
      >
        Oops! Page Not Found
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-md"
      >
        The page you’re looking for doesn’t exist. It might have been moved or deleted.
      </motion.p>
      <MotionComponent 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-all"
        >
          Back to Home
        </Link>
      </MotionComponent >
    </div>
  );
}
