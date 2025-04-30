import React from 'react';
import { motion } from 'framer-motion';

const GetStartedSection = () => {
  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardHover = {
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  const steps = [
    {
      id: 1,
      title: "Explore Courses",
      description: "Browse our library of courses in any category.",
      icon: "📚",
    },
    {
      id: 2,
      title: "Sign Up Free",
      description: "Create an account in under a minute.",
      icon: "🚀",
    },
    {
      id: 3,
      title: "Start Learning",
      description: "Dive into your first lesson immediately.",
      icon: "🎓",
    },
  ];

  return (
    <section className="py-16 bg-dark-800 relative overflow-hidden">
      {/* Background gradient (optional) */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 to-dark-800 opacity-90"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-4"
          >
            Start Learning <span className="text-primary-400">Today</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-neutral-300 text-lg max-w-2xl mx-auto"
          >
            Join thousands of students mastering new skills on Skilyfy.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              whileHover="hover"
              variants={cardHover}
              className="bg-dark-700 p-6 rounded-xl border border-neutral-800 hover:border-primary-500 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-900 bg-opacity-50 flex items-center justify-center text-xl mr-4">
                  {step.icon}
                </div>
                <span className="text-primary-400 font-bold">Step {index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-neutral-400">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg shadow-lg transition-all"
          >
            Get Started for Free
          </motion.button>

          {/* Animated trust indicator */}
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-6 flex items-center justify-center text-neutral-400"
          >
            <span>Trusted by 50,000+ learners</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;