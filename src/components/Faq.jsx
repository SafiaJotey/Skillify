import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-sm overflow-hidden border border-neutral-200 mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-primary-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: "#f0f9ff" }} // primary-50
      >
        <span className="font-medium text-neutral-800">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-5 h-5 text-primary-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-5 overflow-hidden"
          >
            <div className="pb-4 text-neutral-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How do I access my course after purchase?",
      answer: "You'll receive an email with a link to your dashboard. All courses are available under 'My Learning'."
    },
    {
      question: "Can I download course materials?",
      answer: "Yes, most courses include downloadable resources (PDFs, code files). Look for the 'Downloads' tab."
    },
    {
      question: "Do you offer certificates?",
      answer: "Yes! Complete all modules to unlock your certificate (like the one in your trophy component)."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day refund policy if you haven’t completed more than 20% of the course."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-neutral-800 mb-6 flex items-center">
        <svg
          className="w-6 h-6 text-primary-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;