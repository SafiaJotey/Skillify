import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Play, ArrowRight, Code, ShieldCheck, Rocket, Award, Star, Users, Clock, BookOpen, Zap, ChevronRight, LucideAward, AwardIcon, Trophy, TrendingUp } from "lucide-react";
import banner from "../../assets/banner_high_res.png"
import samsung_logo from "../../assets/samsung_logo.svg"
import cisco_logo from "../../assets/cisco_logo.svg"
import citi_logo from "../../assets/citi_logo.svg"
import ericsson_logo from "../../assets/ericsson_logo.svg"
import hewlett_packard_enterprise_logo from "../../assets/hewlett_packard_enterprise_logo.svg"
import procter_gamble_logo from "../../assets/procter_gamble_logo.svg"
import vimeo_logo_resized from "../../assets/vimeo_logo_resized.svg"
import volkswagen_logo from "../../assets/volkswagen_logo.svg"
import FAQ from "../../components/Faq";
import Title from "../../components/Title";
import { useRef, useState } from 'react';

const CourseBanner = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      await controls.start({ 
        y: [-5, 5, -5],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      });
    };
    sequence();
  }, [controls]);

  const logos = [
    { src: samsung_logo, alt: "Samsung" },
    { src: cisco_logo, alt: "Cisco" },
    { src: citi_logo, alt: "Citi" },
    { src: ericsson_logo, alt: "Ericsson" },
    { src: hewlett_packard_enterprise_logo, alt: "Hewlett Packard Enterprise" },
    { src: procter_gamble_logo, alt: "Procter & Gamble" },
    { src: vimeo_logo_resized, alt: "Vimeo" },
    { src: volkswagen_logo, alt: "Volkswagen" }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const floatingItem = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        type: "spring",
        damping: 6
      }
    })
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };
  const courses = {
    all: [
      {
        id: 1,
        title: 'React Masterclass',
        instructor: 'Jane Smith',
        rating: 4.9,
        students: 12500,
        price: 89.99,
        category: 'web',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: 2,
        title: 'Python for Data Science',
        instructor: 'John Doe',
        rating: 4.7,
        students: 18700,
        price: 99.99,
        category: 'data',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHl0aG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: 3,
        title: 'UI/UX Design Fundamentals',
        instructor: 'Alex Johnson',
        rating: 4.8,
        students: 9200,
        price: 79.99,
        category: 'design',
        image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWklMjB1aXh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: 4,
        title: 'Advanced JavaScript Patterns',
        instructor: 'Sarah Williams',
        rating: 4.9,
        students: 15300,
        price: 94.99,
        category: 'web',
        image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
      }
    ],
    web: [
      {
        id: 1,
        title: 'React Masterclass',
        instructor: 'Jane Smith',
        rating: 4.9,
        students: 12500,
        price: 89.99,
        category: 'web',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: 4,
        title: 'Advanced JavaScript Patterns',
        instructor: 'Sarah Williams',
        rating: 4.9,
        students: 15300,
        price: 94.99,
        category: 'web',
        image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
      }
    ],
    data: [
      {
        id: 2,
        title: 'Python for Data Science',
        instructor: 'John Doe',
        rating: 4.7,
        students: 18700,
        price: 99.99,
        category: 'data',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHl0aG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
      }
    ],
    design: [
      {
        id: 3,
        title: 'UI/UX Design Fundamentals',
        instructor: 'Alex Johnson',
        rating: 4.8,
        students: 9200,
        price: 79.99,
        category: 'design',
        image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWklMjB1aXh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
      }
    ]
  };


  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderContainerRef = useRef(null);
  const animationObserverRef = useRef(null);
  const [activeTab, setActiveTab] = useState('all');
  // Slider navigation
  const goToPrevSlide = () => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : 1)); // Assuming 2 slides (0 and 1)
  };

  const goToNextSlide = () => {
    setCurrentSlide(prev => (prev < 1 ? prev + 1 : 0)); // Assuming 2 slides (0 and 1)
  };

  // Update slider position when currentSlide changes
  useEffect(() => {
    if (sliderContainerRef.current) {
      const offset = -currentSlide * 100;
      sliderContainerRef.current.style.transform = `translateX(${offset}%)`;
      sliderContainerRef.current.style.transition = 'transform 0.5s ease-in-out';
    }
  }, [currentSlide]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationClass = element.classList.contains('animate-fade-in-up') 
            ? 'animate-fade-in-up' 
            : 'animate-fade-in';
          element.classList.add(animationClass);
        }
      });
    };

    animationObserverRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    const elements = document.querySelectorAll('.opacity-0');
    elements.forEach(el => animationObserverRef.current.observe(el));

    return () => {
      if (animationObserverRef.current) {
        animationObserverRef.current.disconnect();
      }
    };
  }, []);

  return (
   <> 
   <div className="relative bg-dark-800 overflow-hidden h-screen py-36 flex items-center">
   {/* Animated grid background */}
   <div className="absolute inset-0 overflow-hidden opacity-20">
     {[...Array(80)].map((_, i) => (
       <motion.div
         key={i}
      
       />
     ))}
   </div>

   {/* Floating particles */}
   {[...Array(100)].map((_, i) => {
     const colors = [
       "from-primary-400 to-secondary-500",
       "from-secondary-500 to-primary-600",
       "from-secondary-400 to-secondary-600",
       "from-secondary-800 to-primary-400"
     ];
     const randomColor = colors[Math.floor(Math.random() * colors.length)];
     
     return (
       <motion.div
         key={i}
         custom={i}
         initial={{ opacity: 0 }}
         animate={{
           opacity: [0, 0.6, 0],
           y: [0, -100],
           x: [0, (Math.random() - 0.5) * 100],
           transition: {
             duration: 10 + Math.random() * 10,
             repeat: Infinity,
             delay: Math.random() * 5
           }
         }}
         className={`absolute rounded-full bg-gradient-to-r ${randomColor}`}
         style={{
           top: `${Math.random() * 100}%`,
           left: `${Math.random() * 100}%`,
           width: `${2 + Math.random() * 5}px`,
           height: `${2 + Math.random() * 5}px`,
         }}
       />
     );
   })}

   {/* Glow effects */}
   <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary-500/10 blur-[100px]"></div>
   <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-primary-500/10 blur-[100px]"></div>

   {/* Main content */}
   <div className="container mx-auto px-6 relative z-10">
     <div className="grid lg:grid-cols-2 gap-12 items-center">
       {/* Left side */}
       <div className="">
         <motion.div
           initial="hidden"
           animate="visible"
           variants={staggerContainer}
         >
           <motion.div variants={floatingItem} custom={0} className="mb-6">
             <span className="inline-flex items-center px-4 py-2 text-sm font-semibold tracking-wider text-primary-100 uppercase bg-dark-700/50 rounded-full border border-primary-500/30">
               <Zap className="mr-2 w-4 h-4 fill-primary-400 text-primary-400" />
               New Courses Available
             </span>
           </motion.div>

           <motion.h1 
             variants={floatingItem} 
             custom={1}
             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
           >
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
               Master Skills
             </span>{" "}
             Like a Pro Developer
           </motion.h1>

           <motion.p 
             variants={floatingItem} 
             custom={2}
             className="text-xl text-neutral-300 mb-8 max-w-lg leading-relaxed"
           >
             Build <span className="font-semibold text-primary-300">production-ready</span> applications with our interactive, project-based courses taught by industry experts.
           </motion.p>

           {/* Stats */}
           <motion.div 
             variants={floatingItem} 
             custom={3}
             className="flex flex-wrap gap-6 mb-8"
           >
             <div className="flex items-center">
               <div className="flex -space-x-2 mr-3">
                 {[...Array(3)].map((_, i) => (
                   <img 
                     key={i}
                     src={`https://i.pravatar.cc/150?img=${i + 10}`}
                     className="w-8 h-8 rounded-full border-2 border-dark-800"
                     alt="Student"
                   />
                 ))}
               </div>
               <div>
                 <div className="text-white font-semibold">10,000+ Students</div>
                 <div className="text-xs text-neutral-400">Already learning</div>
               </div>
             </div>
             <div className="flex items-center">
               <div className="mr-3 p-2 bg-primary-500/10 rounded-lg">
                 <Award className="w-5 h-5 text-primary-400" />
               </div>
               <div>
                 <div className="text-white font-semibold">Certified</div>
                 <div className="text-xs text-neutral-400">Industry-recognized</div>
               </div>
             </div>
           </motion.div>

           <motion.div variants={floatingItem} custom={4} className="flex flex-wrap gap-4">
             <button className="group flex items-center px-7 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-xl font-semibold text-white transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50">
               <span>Start Learning</span>
               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
             </button>
             
             <button className="group flex items-center px-7 py-4 bg-transparent border-2 border-neutral-700 hover:border-neutral-600 rounded-xl font-semibold text-white hover:bg-neutral-800/50 transition-all">
               <Play className="mr-2 group-hover:fill-current" size={18} />
               Watch Demo
             </button>
           </motion.div>
         </motion.div>
       </div>

       {/* Right side */}
       <div className="relative hidden lg:block h-[500px]">
<motion.div 
 initial="hidden"
 animate="visible"
 className="absolute top-0 right-0 w-full h-full"
>
 {/* Main feature card */}
 <motion.div
   variants={{
     hidden: { opacity: 0, y: 20, rotateY: 10 },
     visible: { 
       opacity: 1, 
       y: 0,
       rotateY: 0,
       transition: { duration: 0.8, ease: "easeOut" }
     }
   }}
   className="absolute -top-10 left-2 w-4/5 overflow-hidden z-20"
   whileHover={{ 
     y: -10,
     transition: { duration: 0.3 }
   }}
 >
  <motion.div
     animate={{
       y: [0, -10, 0],
       transition: {
         delay: 2,
         duration: 3,
         repeat: Infinity,
         ease: "easeInOut"
       }
     }}
   >
     <img src={banner} alt="Website Benefits" className="w-full"/>
   </motion.div>
 </motion.div>
{/* Progress rings */}
<motion.div 
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 1.5, duration: 0.8 }}
  className="absolute top-40 -left-16 w-44 h-44"
  whileHover="hover"
>
  <svg className="w-full h-full" viewBox="0 0 100 100">
    <motion.circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke="#334155"
      strokeWidth="8"
    />
    <motion.circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke="url(#progressGradient)"
      strokeWidth="8"
      strokeLinecap="round"
      initial={{ strokeDashoffset: 283, strokeDasharray: 283 }}
      animate={{ strokeDashoffset: 80 }}
      transition={{ duration: 2, delay: 1.8 }}
      variants={{
        hover: {
          strokeDashoffset: 0,
          transition: { duration: 0.5 }
        }
      }}
    />
    <defs>
      <motion.linearGradient 
        id="progressGradient" 
        x1="0%" 
        y1="0%" 
        x2="100%" 
        y2="0%"
        variants={{
          hover: {
            x1: ["0%", "100%", "0%"],
            x2: ["100%", "0%", "100%"],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }
          }
        }}
      >
        <stop offset="0%" stopColor="#06b6d4" /> {/* primary-500 - DEFAULT */}
        <stop offset="50%" stopColor="#22d3ee" /> {/* primary-400 */}
        <stop offset="100%" stopColor="#67e8f9" /> {/* primary-300 */}
      </motion.linearGradient>
    </defs>
  </svg>
  <div className="absolute inset-0 flex items-center justify-center flex-col">
    <motion.div
      animate={{
        y: [0, -5, 0],
        transition: {
          delay: 2,
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      variants={{
        hover: {
          scale: 1.1,
          transition: { duration: 0.3 }
        }
      }}
    >
      <Trophy className="w-8 h-8 text-primary-500 hover:text-primary-400 mb-4" />
    </motion.div>

    <span className="text-neutral-400 text-xs">Certificate On</span>
    <span className="text-neutral-400 text-xs mt-1 block">Course Completion</span>
  </div>
</motion.div>
        
 {/* Key Benefits Section - Consistent Card Styling */}
 {[
   { 
     title: "Expert Knowledge", 
     description: "content from industry experts",
     icon: <BookOpen size={16} />
   },
   { 
     title: "Save Time", 
     description: " straight to the point ",
     icon: <Clock size={16} />
   },
   { 
     title: "Practical Skills", 
     description: " real-world applications",
     icon: <Code size={16} />
   },
   { 
     title: "Community ", 
     description: "like-minded learners",
     icon: <Users size={16} />
   },
   { 
     title: "Stay Updated", 
     description: " latest  technologies",
     icon: <Zap size={16} />
   }
 ].map((benefit, i) => (
   <motion.div
     key={i}
     initial={{ 
       x: i % 2 ? -200 : 200,
       y: 0,
       opacity: 0,
       rotate: i % 2 ? -5 : 5
     }}
     animate={{ 
       x: i === 0 || i === 4 ? 470 : i === 2 ? 560 : 520,
       y: i * 100,
       opacity: 1,
       rotate: 0,
       transition: {
         delay: i * 0.3,
         duration: 2,
         ease: "backOut"
       }
     }}
     whileHover={{
       scale: 1.05,
       y: i * 90 - 10,
       zIndex: 30,
       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
       transition: { duration: 0.3 }
     }}
     className={`absolute border-primary-500/30 bg-primary-500/10 backdrop-blur-sm border rounded-xl p-4 z-10`}
     style={{
       width: "200px",
       height: "80px" // Consistent height for all cards
     }}
   >
     <motion.div
       animate={{
         y: [0, -10, 0],
         transition: {
           delay: 2 + i * 0.2,
           duration: 3 + i,
           repeat: Infinity,
           ease: "easeInOut"
         }
       }}
     >
       <div className="flex items-start gap-3 h-full">
         <motion.div 
           className={`p-2 rounded-lg text-primary-400 bg-white/5`}
           whileHover={{ scale: 1.1 }}
         >
           {benefit.icon}
         </motion.div>
         <div className="flex-1">
           <h4 className="font-medium text-white text-sm">{benefit.title}</h4>
           <p className="text-xs text-neutral-400">{benefit.description}</p>
         </div>
       </div>
     </motion.div>
   </motion.div>
 ))}

 {/* Featured Badge */}
 <motion.div 
   className="absolute top-0 -left-16 bg-gradient-to-r from-primary-500 to-primary-700 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg"
   initial={{ opacity: 0, y: 20 }}
   animate={{ 
     opacity: 1, 
     y: 0,
     transition: { delay: 3 }
   }}
   whileHover={{
     scale: 1.05,
     rotate: [0, -5, 5, 0],
     transition: { duration: 0.5 }
   }}
 >
   Trusted by Thousands 
 </motion.div>
</motion.div>

</div>
     </div>
   </div>
 </div>
 <motion.div 
      className="text-center w-full px-4 md:px-36 py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
     <Title 
  heading={{ text: "Our Partners", focus: "Worldwide" }}
  subHeading="Trusted by over 16,000 companies and millions of learners"

/>

      <motion.div 
        className="flex flex-wrap justify-center gap-8 md:gap-4 items-center w-full"
        variants={container}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover="hover"
            className="p-2 md:px-6"
          >
            <motion.img 
              src={logo.src} 
              alt={logo.alt}
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
 










    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Explore Our Courses
        </motion.h2>
        
        {/* Tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex space-x-1 bg-white p-1 rounded-full shadow-md border border-gray-200">
            {[
              { id: 'all', label: 'All Courses' },
              { id: 'web', label: 'Web Development' },
              { id: 'data', label: 'Data Science' },
              { id: 'design', label: 'UI/UX Design' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {courses[activeTab].map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {course.category === 'web' && 'Web Dev'}
                    {course.category === 'data' && 'Data'}
                    {course.category === 'design' && 'Design'}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">By {course.instructor}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'fill-current' : 'fill-gray-300'}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600 ml-2">
                      {course.rating} ({course.students.toLocaleString()})
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Enroll Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
          >
            View All Courses
          </motion.button>
        </motion.div>
      </div>
    </section>








 
    <div className="bg-neutral-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl text-primary font-bold mb-8 opacity-0">Trending Now</h3>
        <hr className="mb-8 border-t-2 border-neutral-200 opacity-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="opacity-0 animate-fade-in-up">
            <h3 className="text-4xl">React is a top skill</h3>
            <div className="my-8">
              <a href="#" className="text-lg text-primary font-semibold inline-block hover:underline hover:translate-x-1 transition-transform duration-300">
                See All React Courses <ChevronRight className="inline-block text-sm" />
              </a>
              <p className="text-neutral-500">4,415,930 learners</p>
            </div>
            <button className="group flex items-center px-4 py-2 bg-transparent border-2 border-primary-500 hover:border-primary-600 font-semibold text-primary transition-all duration-300 my-8 hover:bg-primary-50 rounded-md">
              Show All Trending courses <TrendingUp className="text-primary-400 mx-2 group-hover:translate-x-1 transition-transform duration-300"/>
            </button>
          </div>
          
          {/* Column 2 */}
          <div className="opacity-0 animate-fade-in-up animation-delay-100">
            <h3 className="text-3xl">Programming</h3>
            <div>
              <div className="hover:bg-neutral-50 p-2 rounded transition-all duration-300">
                <a href="#" className="text-lg text-primary font-semibold inline-block mt-3 hover:underline">JavaScript<ChevronRight className="inline-block text-sm" /></a>
                <p className="text-neutral-500">4,415,930 learners</p>
              </div>
              <div className="hover:bg-neutral-50 p-2 rounded transition-all duration-300">
                <a href="#" className="text-lg text-primary font-semibold inline-block mt-3 hover:underline">C++<ChevronRight className="inline-block text-sm" /></a>
                <p className="text-neutral-500">4,415,930 learners</p>
              </div>
              <div className="hover:bg-neutral-50 p-2 rounded transition-all duration-300">
                <a href="#" className="text-lg text-primary font-semibold inline-block mt-3 hover:underline">Python <ChevronRight className="inline-block text-sm" /></a>
                <p className="text-neutral-500">4,415,930 learners</p>
              </div>
            </div>
          </div>
          
          {/* Column 3 */}
          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <h3 className="text-3xl">Programming</h3>
            <div>
              <div className="hover:bg-neutral-50 p-2 rounded transition-all duration-300">
                <a href="#" className="text-lg text-primary font-semibold inline-block mt-3 hover:underline">JavaScript<ChevronRight className="inline-block text-sm" /></a>
                <p className="text-neutral-500">4,415,930 learners</p>
              </div>
              <div className="hover:bg-neutral-50 p-2 rounded transition-all duration-300">
                <a href="#" className="text-lg text-primary font-semibold inline-block mt-3 hover:underline">C++<ChevronRight className="inline-block text-sm" /></a>
                <p className="text-neutral-500">4,415,930 learners</p>
              </div>
              <div className="hover:bg-neutral-50 p-2 rounded transition-all duration-300">
                <a href="#" className="text-lg text-primary font-semibold inline-block mt-3 hover:underline">Python <ChevronRight className="inline-block text-sm" /></a>
                <p className="text-neutral-500">4,415,930 learners</p>
              </div>
            </div>
          </div>
          
          {/* Column 4 */}
          <div className="opacity-0 animate-fade-in-up animation-delay-300">
            <h3 className="text-3xl">Programming</h3>
            <div>
              <div className="hover:bg-neutral-50 p-2 rounded transition-all duration-300">
                <a href="#" className="text-lg text-primary font-semibold inline-block mt-3 hover:underline">JavaScript<ChevronRight className="inline-block text-sm" /></a>
                <p className="text-neutral-500">4,415,930 learners</p>
              </div>
              <div className="hover:bg-neutral-50 p-2 rounded transition-all duration-300">
                <a href="#" className="text-lg text-primary font-semibold inline-block mt-3 hover:underline">C++<ChevronRight className="inline-block text-sm" /></a>
                <p className="text-neutral-500">4,415,930 learners</p>
              </div>
              <div className="hover:bg-neutral-50 p-2 rounded transition-all duration-300">
                <a href="#" className="text-lg text-primary font-semibold inline-block mt-3 hover:underline">Python <ChevronRight className="inline-block text-sm" /></a>
                <p className="text-neutral-500">4,415,930 learners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="py-16 relative">
          <div 
            ref={sliderContainerRef}
            className="slider-container flex overflow-hidden w-full transition-transform duration-500 ease-in-out"
          >
            {/* Slide 1 */}
            <div className="slider-slide min-w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pr-8">
                <span className="text-2xl border-r pr-4 border-neutral-500">Booz</span>
                <span className="text-2xl border-r pr-4 border-neutral-500">Allen</span>
                <span className="text-2xl">Hemilton</span>
                <h3 className="text-3xl font-semibold py-8">Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling</h3>
                
                <div className="my-8 grid grid-cols-2 gap-4">
                  <div className="pr-4">
                    <h3 className="text-4xl font-bold mb-2">94%</h3>
                    <p className="text-lg text-neutral-500 pr-6">retention rate among participating employees</p>
                    <hr className="my-4"/>
                  </div>
                  <div className="pl-4">
                    <h3 className="text-4xl font-bold mb-2">94%</h3>
                    <p className="text-lg text-neutral-500 pr-6">retention rate among participating employees</p>
                    <hr className="my-4"/>
                  </div>
                </div>
                
                <button className="group flex items-center px-7 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <span>Start Learning</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
              </div>
              
              <div className="flex items-center justify-center">
                <img 
                  src="https://cms-images.udemycdn.com/content/c4gpjcmcsk/png/UB_Case_Studies_Booz_Allen_image.png?position=c&quality=80&x.app=portals" 
                  alt="Booz Allen Hamilton" 
                  className="max-h-80 object-contain rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
            
            {/* Slide 2 */}
            <div className="slider-slide bg-red-200 min-w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pr-8">
                <span className="text-2xl border-r pr-4 border-neutral-500">Another</span>
                <span className="text-2xl border-r pr-4 border-neutral-500">Example</span>
                <span className="text-2xl">Slide</span>
                <h3 className="text-3xl font-semibold py-8">Different content for the second slide in the slider</h3>
                
                <div className="my-8 grid grid-cols-2 gap-4">
                  <div className="pr-4">
                    <h3 className="text-4xl font-bold mb-2">85%</h3>
                    <p className="text-lg text-neutral-500 pr-6">success rate for this example</p>
                    <hr className="my-4"/>
                  </div>
                  <div className="pl-4">
                    <h3 className="text-4xl font-bold mb-2">90%</h3>
                    <p className="text-lg text-neutral-500 pr-6">satisfaction rate</p>
                    <hr className="my-4"/>
                  </div>
                </div>
                
                <button className="group flex items-center px-7 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
              </div>
              
              <div className="flex items-center justify-center">
                <img 
                  src="https://via.placeholder.com/600x400" 
                  alt="Placeholder" 
                  className="max-h-80 object-contain rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          {/* Slider Navigation */}
          <div className="flex  mt-8 space-x-4">
            <button 
              onClick={goToPrevSlide}
              className="slider-prev   text-primary   transition-colors duration-300"
            >
              &larr; Prev
            </button>
            <button 
              onClick={goToNextSlide}
              className="slider-next  text-primary  transition-colors duration-300"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Add these styles to your global CSS file or CSS-in-JS solution */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { 
            transform: translateY(20px);
            opacity: 0; 
          }
          to { 
            transform: translateY(0);
            opacity: 1; 
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>


 </>
  );
};

export default CourseBanner;