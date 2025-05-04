import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Play, ArrowRight, Code, ShieldCheck, Rocket, Award, Star, Users, Clock, BookOpen, Zap, ChevronRight, LucideAward, AwardIcon, Trophy, TrendingUp, FileText, Video, Target, BarChart2, Clock1, CheckCircle, ChevronLeft } from "lucide-react";
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
import ReviewSection from "../../components/Reviews";
import GetStartedSection from "../../components/GetStartedSection";
import Courses from "../../components/Courses";
import Categories from "../../components/Categories";
import { useNavigate } from "react-router-dom";


const CourseBanner = () => {
  const controls = useAnimation();
const [currentSlide, setCurrentSlide] = useState(0);
const sliderContainerRef = useRef(null);
const totalSlides = 3;

const navigate=useNavigate()
const goToSlide = (index) => {
  setCurrentSlide(index);
  if (sliderContainerRef.current) {
    sliderContainerRef.current.style.transform = `translateX(-${index * 100}%)`;
  }
};

const goToNextSlide = () => {
  const nextSlide = (currentSlide + 1) % totalSlides;
  goToSlide(nextSlide);
};

const goToPrevSlide = () => {
  const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  goToSlide(prevSlide);
};

// Auto-advance slides (optional)
useEffect(() => {
  const interval = setInterval(goToNextSlide, 5000);
  return () => clearInterval(interval);
}, [currentSlide]);

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
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
 
  const goals = [
    {
      icon: <Target className="w-6 h-6 text-primary-500" />,
      title: "Goal-Oriented Learning",
      description: "Customize your learning path to match your career objectives and personal growth targets.",
      features: [
        "Personalized course recommendations",
        "Skill-based learning tracks",
        "Progress milestones"
      ]
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-secondary-500" />,
      title: "Skill Measurement",
      description: "Track your proficiency growth with our assessment system and visual progress indicators.",
      features: [
        "Pre- and post-course assessments",
        "Skill level analytics",
        "Gap identification"
      ]
    },
    {
      icon: <Clock1 className="w-6 h-6 text-accent-purple" />,
      title: "Flexible Pace",
      description: "Learn at your own speed with on-demand content that fits your schedule.",
      features: [
        "Self-paced courses",
        "Mobile-friendly content",
        "Lifetime access"
      ]
    }
  ];
  const loadCourses = () => {
    navigate("/courses")
  };

  const stats = [
    { value: "87%", label: "Career advancement", icon: <Award className="w-5 h-5" /> },
    { value: "12M+", label: "Learning minutes", icon: <Clock className="w-5 h-5" /> },
    { value: "94%", label: "Completion rate", icon: <CheckCircle className="w-5 h-5" /> }
  ];

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
             <button onclick={loadCourses} className="group flex items-center px-7 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-xl font-semibold text-white transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50">
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
      className="text-center w-full px-4 md:px-36 py-16 bg-neutral-100"
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
 


<Courses/>







<Categories/>
    <ReviewSection/>


    <section className="py-16 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-dark-800 mb-4"
          >
            Learning Focused on <span className="text-primary-600">Your Goals</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-500 max-w-3xl mx-auto"
          >
            Our platform adapts to your learning style and career aspirations with personalized recommendations and progress tracking.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary-50">
                  {goal.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-800">{goal.title}</h3>
              </div>
              <p className="text-neutral-500 mb-6">{goal.description}</p>
              <ul className="space-y-3">
                {goal.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <BookOpen className="w-12 h-12 mb-6 text-white/80" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Start learning with purpose today</h3>
                <p className="text-white/90 mb-6">
                  Join thousands of learners who've transformed their careers through our goal-driven approach to education.
                </p>
                <button className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-neutral-100 transition-colors">
                  Explore Learning Paths
                </button>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {stat.icon}
                      <span className="text-lg font-bold">{stat.value}</span>
                    </div>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

<GetStartedSection/>

    <div className="bg-neutral-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-primary font-bold mb-8"
        >
          Trending Now
        </motion.h3>
        
        <motion.hr 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 border-t-2 border-neutral-200"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Column 1 */}
          <motion.div variants={itemVariants}>
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
          </motion.div>
          
          {/* Column 2 */}
          <motion.div variants={itemVariants}>
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
          </motion.div>
          
          {/* Column 3 */}
          <motion.div variants={itemVariants}>
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
          </motion.div>
          
          {/* Column 4 */}
          <motion.div variants={itemVariants}>
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
          </motion.div>
        </motion.div>

      
      {/* Slider Section */}
      <div className="py-16 relative  overflow-hidden">
          <div 
            ref={sliderContainerRef}
            className="slider-container flex w-full transition-transform duration-500 ease-in-out"
          >
            {/* Slide 1 */}
            <div className="slider-slide min-w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pr-8">
                <span className="px-2 text-2xl border-r border-neutral-500">Booz</span>
                <span className="px-2 text-2xl border-r border-neutral-500">Allen</span>
                <span className="text-2xl pl-2">Hemilton</span>
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
            <div className="slider-slide min-w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pr-8">
                <span className="px-2 text-2xl border-r border-neutral-500">Tech</span>
                <span className="px-2 text-2xl border-r border-neutral-500">Company</span>
                <span className="text-2xl pl-2">Inc</span>
                <h3 className="text-3xl font-semibold py-8">Tech Company Improves Employee Skills with Online Learning Platform</h3>
                
                <div className="my-8 grid grid-cols-2 gap-4">
                  <div className="pr-4">
                    <h3 className="text-4xl font-bold mb-2">85%</h3>
                    <p className="text-lg text-neutral-500 pr-6">skill improvement among employees</p>
                    <hr className="my-4"/>
                  </div>
                  <div className="pl-4">
                    <h3 className="text-4xl font-bold mb-2">90%</h3>
                    <p className="text-lg text-neutral-500 pr-6">employee satisfaction with training</p>
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
                  src="https://st2.depositphotos.com/20363444/47416/i/450/depositphotos_474164570-stock-photo-cheerful-businessman-holding-laptop-african.jpg" 
                  alt="Tech Company" 
                  className="max-h-80 object-contain rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Slide 3 */}
            <div className="slider-slide min-w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pr-8">
                <span className="px-2 text-2xl border-r border-neutral-500">Global</span>
                <span className="px-2 text-2xl border-r border-neutral-500">Finance</span>
                <span className="text-2xl pl-2">Corp</span>
                <h3 className="text-3xl font-semibold py-8">Financial Institution Transforms Workforce with Digital Learning</h3>
                
                <div className="my-8 grid grid-cols-2 gap-4">
                  <div className="pr-4">
                    <h3 className="text-4xl font-bold mb-2">75%</h3>
                    <p className="text-lg text-neutral-500 pr-6">faster onboarding for new hires</p>
                    <hr className="my-4"/>
                  </div>
                  <div className="pl-4">
                    <h3 className="text-4xl font-bold mb-2">88%</h3>
                    <p className="text-lg text-neutral-500 pr-6">of employees completed certification</p>
                    <hr className="my-4"/>
                  </div>
                </div>
                
                <button className="group flex items-center px-7 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
              </div>
              
              <div className="flex items-center justify-center">
                <img 
                  src="https://img.freepik.com/free-photo/middle-aged-hispanic-business-people_23-2151098612.jpg?semt=ais_hybrid&w=740" 
                  alt="Finance Corp" 
                  className="max-h-80 object-contain rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          {/* Slider Navigation */}
          <div className="flex justify-start mt-8 space-x-4">
            <button 
              onClick={goToPrevSlide}
              className="slider-prev px-4 py-2 text-primary rounded hover:bg-primary-50 transition-colors duration-300"
            >
           <ChevronLeft />
            </button>
            
            {/* Slide indicators */}
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full mt-4 ${currentSlide === index ? 'bg-primary' : 'bg-neutral-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
            
            <button 
              onClick={goToNextSlide}
              className="slider-next px-4 py-2 text-primary rounded hover:bg-primary-50 transition-colors duration-300"
            >
           <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>

    


 </>
  );
};

export default CourseBanner;