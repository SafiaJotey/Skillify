import { Play, ArrowRight, Code,  Award,  Users, Clock, BookOpen, Zap,Trophy} from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import banner from "../assets/banner.webp"
import useMotion from "../hooks/useMotion";
import React, { Suspense } from "react";
import LoadingFallback from "./LoadingFallback";
function HeroSection() {
            const isMobile=useIsMobile()
       const motionComponents=useMotion()

const navigate=useNavigate()
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
  const loadCourses = () => {
    navigate("/courses")
  };

  return (
     <div className="relative bg-dark-800 overflow-hidden h-screen py-36 flex items-center">
   {/* Animated grid background */}
   <div className="absolute inset-0 overflow-hidden opacity-20">
     {[...Array(80)].map((_, i) => (
       <motionComponents.div 
         key={i}
      
       />
     ))}
   </div>

   {/* Floating particles */}
   {[...Array(isMobile?20:100)].map((_, i) => {
     const colors = [
       "from-primary-400 to-secondary-500",
       "from-secondary-500 to-primary-600",
       "from-secondary-400 to-secondary-600",
       "from-secondary-800 to-primary-400"
     ];
     const randomColor = colors[Math.floor(Math.random() * colors.length)];
     
     return (
       <motionComponents.div 
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
       <Suspense fallback={<LoadingFallback/>}>  
       <div className="">
         <motionComponents.div 
           initial="hidden"
           animate="visible"
           variants={staggerContainer}
         >
           <motionComponents.div  variants={floatingItem} custom={0} className="mb-6">
             <span className="inline-flex items-center px-4 py-2 text-sm font-semibold tracking-wider text-primary-100 uppercase bg-dark-700/50 rounded-full border border-primary-500/30">
               <Zap className="mr-2 w-4 h-4 fill-primary-400 text-primary-400" />
               New Courses Available
             </span>
           </motionComponents.div >

           <motionComponents.h1 
             variants={floatingItem} 
             custom={1}
             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
           >
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
               Master Skills
             </span>{" "}
             Like a Pro Developer
           </motionComponents.h1>
<div className="h-[170px] ">
 <Suspense fallback={<LoadingFallback/>}>   <motionComponents.p 
             variants={floatingItem} 
             custom={2}
             className="text-xl text-neutral-300 mb-8 max-w-lg "
           >
             Build <span className="font-semibold text-primary-300">production-ready</span> applications with our interactive, project-based courses taught by industry experts.
           </motionComponents.p></Suspense>

</div>
           
           {/* Stats */}
           <motionComponents.div  
             variants={floatingItem} 
             custom={3}
             className="flex flex-wrap gap-6 mb-8"
           >
             <div className="flex items-center">
               <div className="flex -space-x-2 mr-3">
  <div className="avatar-stack flex">
    {[...Array(3)].map((_, i) => (
      <div 
        key={i}
        className="avatar-mask"
        
        style={{ 
          backgroundImage: `url(https://i.pravatar.cc/80?img=${i + 10})`,
          zIndex: 3 - i,
          width: "32px",
    height: "32px",
    borderRadius: "50%",
    border:"2px solid #1a202c",
    backgroundSize: "cover",
    position: "relative"
        }}
        aria-hidden="true"
      />
    ))}
  </div>
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
           </motionComponents.div >

           <motionComponents.div  variants={floatingItem} custom={4} className="flex flex-wrap gap-4">
             <button aria-label='start learning' onclick={loadCourses} className="group flex items-center px-7 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-xl font-semibold text-white transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50">
               <span>Start Learning</span>
               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
             </button>
             
             <button aria-label='watch demo' className="group flex items-center px-7 py-4 bg-transparent border-2 border-neutral-700 hover:border-neutral-600 rounded-xl font-semibold text-white hover:bg-neutral-800/50 transition-all">
               <Play className="mr-2 group-hover:fill-current" size={18} />
               Watch Demo
             </button>
           </motionComponents.div >
         </motionComponents.div >
       </div>
</Suspense>
       {/* Right side */}
       <div className="relative hidden lg:block h-[500px]">
<motionComponents.div  
 initial="hidden"
 animate="visible"
 className="absolute top-0 right-0 w-full h-full"
>
 {/* Main feature card */}
 <motionComponents.div 
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
  <motionComponents.div 
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
     <img src={banner} alt="Website Benefits"  className="w-full h-full object-cover" loading="eager" decoding="async" fetchpriority="high" />
   </motionComponents.div >
 </motionComponents.div >
{/* Progress rings */}
{!isMobile&& <motionComponents.div  
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
    <motionComponents.div 
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
    </motionComponents.div >

    <span className="text-neutral-400 text-xs">Certificate On</span>
    <span className="text-neutral-400 text-xs mt-1 block">Course Completion</span>
  </div>
</motionComponents.div >}
        
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
   <motionComponents.div 
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
     <motionComponents.div 
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
         <motionComponents.div  
           className={`p-2 rounded-lg text-primary-400 bg-white/5`}
           whileHover={{ scale: 1.1 }}
         >
           {benefit.icon}
         </motionComponents.div >
         <div className="flex-1">
           <h4 className="font-medium text-white text-sm">{benefit.title}</h4>
           <p className="text-xs text-neutral-400">{benefit.description}</p>
         </div>
       </div>
     </motionComponents.div >
   </motionComponents.div >
 ))}

 {/* Featured Badge */}
 <motionComponents.div  
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
 </motionComponents.div >
</motionComponents.div >

</div>
     </div>
   </div>
 </div>
  )
}
export default React.memo(HeroSection)