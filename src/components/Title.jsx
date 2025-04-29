import React from 'react'
import { motion } from "framer-motion";

export default function Title({ heading, subHeading, dark = false }) {
  const textAnimation = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Professional underline with dots animation
  // const underlineAnimation = {
  //   hidden: { scaleX: 0, opacity: 0 },
  //   show: {
  //     scaleX: 1,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.8,
  //       ease: [0.22, 1, 0.36, 1]
  //     }
  //   }
  // };




  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="flex flex-col items-center"
    >
      <motion.h2
        variants={textAnimation}
        className="text-3xl md:text-4xl font-bold text-center leading-tight"
      >
        {heading.text} <span className="text-primary-500">{heading?.focus}</span>
      </motion.h2>

     

      <motion.p
        variants={textAnimation}
        className={`${dark ? "text-neutral-200" : "text-neutral-600"} text-lg md:text-xl mt-6  text-center max-w-2xl mb-8  md:mb-12 leading-relaxed`}
      >
        {subHeading}
      </motion.p>
      {/* <motion.div className="relative mt-2 h-1 w-40 mb-8  md:mb-12 w-f">
        <motion.div
          variants={underlineAnimation}
          className="absolute h-full w-full bg-primary-400 origin-right"
        />
       
      </motion.div> */}
    </motion.div>
  );
}