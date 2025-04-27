import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Play, ArrowRight, Code, ShieldCheck, Rocket, Award, Star, Users, Clock, BookOpen, Zap, ChevronRight } from "lucide-react";

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

  const floatingVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

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

  // Enhanced module animation
  const moduleAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 overflow-hidden min-h-[600px] flex items-center">
      {/* Animated grid background with gradient */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.05, 0],
              scale: 1,
              transition: { 
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }
            }}
            className="absolute border border-neutral-700 rounded-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              rotate: Math.random() * 360
            }}
          />
        ))}
      </div>

      {/* Floating particles with more variety */}
      {[...Array(100)].map((_, i) => {
        const colors = [
          "from-primary-400 to-secondary-500",
          "from-purple-400 to-pink-500",
          "from-blue-400 to-teal-400",
          "from-yellow-400 to-orange-500"
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
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-secondary-500/10 blur-[100px]"></div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Enhanced content */}
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={floatingItem} custom={0} className="mb-6">
                <span className="inline-flex items-center px-4 py-2 text-sm font-semibold tracking-wider text-primary-200 uppercase bg-dark-700/50 rounded-full border border-primary-500/30">
                  <Zap className="mr-2 w-4 h-4 fill-primary-500 text-primary-500" />
                  New Courses Available
                </span>
              </motion.div>

              <motion.h1 
                variants={floatingItem} 
                custom={1}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-500 to-accent-pink animate-gradient">
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

              {/* Enhanced stats */}
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
                <button className="group flex items-center px-7 py-4 bg-gradient-to-r from-primary-500 to-secondary-600 hover:from-primary-600 hover:to-secondary-700 rounded-xl font-semibold text-white transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50">
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

          {/* Right side - Enhanced 3D course visualization */}
          <div className="relative hidden lg:block h-[500px]">
            {/* Main course card with improved styling */}
            <motion.div 
              initial="hidden"
              animate="visible"
              className="absolute top-0 right-0 w-full h-full"
            >
              {/* Main course card */}
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
                className="absolute top-12 right-16 w-80 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl shadow-2xl overflow-hidden border border-neutral-700 z-20"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="h-44 bg-gradient-to-r from-secondary-500 to-accent-pink relative overflow-hidden">
                  <motion.div
                    animate={{
                      rotate: 360,
                      transition: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                    className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-white/10"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code size={48} className="text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 px-2 py-1 bg-black/30 rounded text-xs text-white backdrop-blur-sm">
                    <span className="font-medium">PRO</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white text-lg">Advanced React Patterns</h3>
                    <div className="flex items-center bg-dark-700 px-2 py-1 rounded text-xs">
                      <Star className="mr-1 w-3 h-3 fill-yellow-400 text-yellow-400" /> 
                      <span>4.9</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-3 gap-4 text-xs text-neutral-400">
                    <span className="flex items-center"><Users className="mr-1 w-3 h-3" /> 1.2k</span>
                    <span className="flex items-center"><Clock className="mr-1 w-3 h-3" /> 18h</span>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between text-xs text-neutral-400 mb-1">
                      <span>Progress</span>
                      <span>65%</span>
                    </div>
                    <div className="w-full bg-neutral-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "65%" }}
                        transition={{ duration: 1, delay: 1 }}
                        className="bg-gradient-to-r from-primary-400 to-secondary-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-5 py-2.5 bg-neutral-700 hover:bg-neutral-600 rounded-lg text-sm font-medium text-white transition-colors"
                  >
                    Continue Learning
                  </motion.button>
                </div>
              </motion.div>

              {/* Animated progress rings with improved design */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute top-36 right-96 w-44 h-44"
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
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-white font-bold text-2xl">75%</span>
                  <span className="text-neutral-400 text-xs mt-1">Course Completion</span>
                </div>
              </motion.div>

              {/* Floating course modules with enhanced design */}
              {[1, 2, 3, 4, 5, 6].map((i) => {
  const moduleData = [
    { title: "React Hooks", icon: <Code size={16} />, color: "primary" },
    { title: "Context API", icon: <ShieldCheck size={16} />, color: "secondary" },
    { title: "State Mgmt", icon: <Rocket size={16} />, color: "purple" },
    { title: "Performance", icon: <Zap size={16} />, color: "yellow" },
    { title: "Suspense", icon: <Clock size={16} />, color: "pink" },
    { title: "Concurrent", icon: <BookOpen size={16} />, color: "teal" }
  ];
  
  const currentModule = moduleData[i-1];
  const colorClass = `text-${currentModule.color}-400`;
  
  return (
    <motion.div
      key={i}
      initial={{ 
        x: i % 2 ? -200 : 200,
        y: i * 50,
        opacity: 0,
        rotate: i % 2 ? -5 : 5
      }}
      animate={{ 
        x: i % 2 ? 0 : 700,
        y: i * 50,
        opacity: 1,
        rotate: 0,
        transition: {
          delay: i * 0.3,
          duration: 0.8,
          ease: "backOut"
        }
      }}
      whileHover={{
        scale: 1.05,
        y: i * 50 - 10,
        zIndex: 30,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
        transition: { duration: 0.3 }
      }}
      className={`absolute border-${currentModule.color}-500/30 bg-${currentModule.color}-500/10 z-10 backdrop-blur-sm border rounded-xl p-4 shadow-lg`}
      style={{
        width: `${170 + i * 10}px`,
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
        <div className="flex items-center gap-3">
          <motion.div 
            className={`p-2 rounded-lg ${colorClass} bg-white/5`}
            whileHover={{ scale: 1.1 }}
          >
            {currentModule.icon}
          </motion.div>
          <div className="flex-1">
            <h4 className="font-medium text-white text-sm">Module {i}</h4>
            <p className="text-xs text-neutral-400">{currentModule.title}</p>
          </div>
          <ChevronRight className="w-4 h-4 text-neutral-500" />
        </div>
      </motion.div>
    </motion.div>
  );
})}

              {/* Connection lines with glow */}
              {[1, 3, 5].map((i) => (
                <motion.svg
                  key={`line-${i}`}
                  className="absolute z-0"
                  style={{
                    top: `${i * 50 + 20}px`,
                    left: i % 2 ? `${120 + i * 30 - 20}px` : '700px',
                    width: i % 2 ? `calc(50% - ${120 + i * 30}px)` : `calc(50% - 700px)`,
                    height: '2px'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: 2.5 }}
                >
                  <motion.line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke={i % 2 ? "#3b82f6" : "#a855f7"}
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 2 + i * 0.1 }}
                  />
                </motion.svg>
              ))}

         

              {/* Floating badges */}
              <motion.div 
                className="absolute top-10 left-20 bg-gradient-to-r from-primary-500 to-secondary-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg"
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
                Most Popular Course 🔥
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;