import { motion } from 'framer-motion';
import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Web Developer",
    rating: 5,
    content: "This course transformed my career. The content is well-structured and the instructors are incredibly knowledgeable.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "UX Designer",
    rating: 4,
    content: "Excellent practical examples. I've applied several techniques directly to my projects with great results.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Product Manager",
    rating: 5,
    content: "The best investment I've made in my professional development. The community support is outstanding.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const ReviewSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextReview = () => {
    setDirection(1);
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const reviewVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <section className="py-16 px-4 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-300 mb-4">What Our Students Say</h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our students have to say about their learning experience.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentReview}
            custom={direction}
            variants={reviewVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-dark-700 rounded-xl shadow-xl p-8 md:p-10 relative border border-dark-600"
          >
            <Quote className="text-primary-900/20 w-10 h-10 absolute top-6 left-6" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary-900/30"
                >
                  <img 
                    src={reviews[currentReview].avatar} 
                    alt={reviews[currentReview].name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              <div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20}
                      fill={i < reviews[currentReview].rating ? "currentColor" : "none"}
                      className={`${i < reviews[currentReview].rating ? 'text-primary-500' : 'text-neutral-600'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-neutral-200 text-lg mb-4 italic">
                  "{reviews[currentReview].content}"
                </p>
                
                <div>
                  <h4 className="font-bold text-primary-300">{reviews[currentReview].name}</h4>
                  <p className="text-primary-400">{reviews[currentReview].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <button 
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-dark-600 p-3 rounded-full shadow-md hover:bg-primary-900/20 transition-colors border border-dark-500"
            aria-label="Previous review"
          >
            <ChevronLeft className="text-primary-400 w-5 h-5" />
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-dark-600 p-3 rounded-full shadow-md hover:bg-primary-900/20 transition-colors border border-dark-500"
            aria-label="Next review"
          >
            <ChevronRight className="text-primary-400 w-5 h-5" />
          </button>
          
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentReview ? 1 : -1);
                  setCurrentReview(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${index === currentReview ? 'bg-primary-400 w-6' : 'bg-neutral-600'}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;