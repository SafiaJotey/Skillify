import {  useAnimation } from "framer-motion";
import React, { lazy, Suspense, useEffect } from "react";
import { Play, ArrowRight, Code, ShieldCheck, Rocket, Award, Star, Users, Clock, BookOpen, Zap, ChevronRight, LucideAward, AwardIcon, Trophy, TrendingUp, FileText, Video, Target, BarChart2, Clock1, CheckCircle, ChevronLeft } from "lucide-react";

import samsung_logo from "../../assets/samsung_logo.svg"
import cisco_logo from "../../assets/cisco_logo.svg"
import citi_logo from "../../assets/citi_logo.svg"
import ericsson_logo from "../../assets/ericsson_logo.svg"
import hewlett_packard_enterprise_logo from "../../assets/hewlett_packard_enterprise_logo.svg"
import procter_gamble_logo from "../../assets/procter_gamble_logo.svg"
import vimeo_logo_resized from "../../assets/vimeo_logo_resized.svg"
import volkswagen_logo from "../../assets/volkswagen_logo.svg"
import { useRef, useState } from 'react';


import { useNavigate } from "react-router-dom";
import LoadingFallback from "../../components/LoadingFallback";

import useMotion from "../../hooks/useMotion";


const Title= lazy (()=>import("../../components/Title"))
const HeroSection= lazy (()=>import("../../components/HeroSection"))
const ReviewSection = lazy(() => import("../../components/Reviews"));
const GetStartedSection = lazy(() => import("../../components/GetStartedSection"));
const Courses = lazy(() => import("../../components/Courses"));
const Categories = lazy(() => import("../../components/Categories"));

const CourseBanner = () => {
  const motionComponents=useMotion()
console.log(motionComponents)
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
 <Suspense fallback={LoadingFallback}><HeroSection/></Suspense>
 <motionComponents.div 
      className="text-center w-full px-4 md:px-36 py-16 bg-neutral-100"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <Suspense fallback={LoadingFallback}>

        <Title 
  heading={{ text: "Our Partners", focus: "Worldwide" }}
  subHeading="Trusted by over 16,000 companies and millions of learners"

/></Suspense>


      <motionComponents.div 
        className="flex flex-wrap justify-center gap-8 md:gap-4 items-center w-full"
        variants={container}
      >
        {logos.map((logo, index) => (
          <motionComponents.div
            key={index}
            variants={item}
            whileHover="hover"
            className="p-2 md:px-6"
          >
            <motionComponents.img 
              src={logo.src} 
              alt={logo.alt}
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            />
          </motionComponents.div>
        ))}
      </motionComponents.div>
    </motionComponents.div>
 

<Suspense fallback={LoadingFallback}>
<Courses/></Suspense>



<Suspense fallback={LoadingFallback}>

<Categories/>

</Suspense>
<Suspense fallback={LoadingFallback}>

    <ReviewSection/></Suspense>


{/* 
 Learning Focused on Your Goals Your Goals */}
<Suspense fallback={<LoadingFallback/>}>
<section className="py-16 px-4 bg-neutral-50 lg:min-h-[1230px]  ">
  <div className="max-w-6xl mx-auto min-h-[1100px] ">
    {/* Header Section - Added min-height to prevent shift during animation */}
    <div className="text-center mb-16 min-h-[180px] md:min-h-[160px]">
      <motionComponents.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "100px" }}
        className="text-3xl md:text-4xl font-bold text-dark-800 mb-4"
      >
        Learning Focused on <span className="text-primary-600">Your Goals</span>
      </motionComponents.h2>
      <motionComponents.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "100px" }}
        className="text-lg text-neutral-500 max-w-3xl mx-auto"
      >
        Our platform adapts to your learning style and career aspirations with personalized recommendations and progress tracking.
      </motionComponents.p>
    </div>

    {/* Goals Grid - Added fixed height container */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 min-h-[500px] md:min-h-[400px]">
      {goals.map((goal, index) => (
        <motionComponents.div
          key={goal.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "50px" }}
          whileHover={{ y: -5 }}
          className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all h-full "
        >
          <div className="flex items-center gap-3 mb-4  h-[60px]">
            <div className="p-3 rounded-lg bg-primary-50 w-12 h-12 flex items-center justify-center">
              {React.cloneElement(goal.icon, {
                width: 24,
                height: 24,
                className: "text-primary-500"
              })}
            </div>
            <h3 className="text-xl font-bold text-dark-800">{goal.title}</h3>
          </div>
          <p className="text-neutral-500 mb-6 h-[100px]">{goal.description}</p>
          <ul className="space-y-3 h-[150px]">
            {goal.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <CheckCircle width={20} height={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">{feature}</span>
              </li>
            ))}
          </ul>
        </motionComponents.div>
      ))}
    </div>

    {/* CTA Section - Improved with stable dimensions */}
    <motionComponents.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "100px" }}
      className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 md:p-12 text-white min-h-[400px] "
    >
      <div className="max-w-4xl mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center gap-8 h-full">
          <div className="md:w-1/2">
            <BookOpen width={48} height={48} className="w-12 h-12 mb-6 text-white/80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Start learning with purpose today</h3>
            <p className="text-white/90 mb-6">
              Join thousands of learners who've transformed their careers through our goal-driven approach to education.
            </p>
            <button 
              aria-label='learning path' 
              className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Explore Learning Paths
            </button>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6 h-full">
            {stats.map((stat, index) => (
              <motionComponents.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true, margin: "50px" }}
                className="bg-white/10 p-4 rounded-lg backdrop-blur-sm h-full min-h-[120px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  {React.cloneElement(stat.icon, {
                    width: 20,
                    height: 20,
                    className: "text-white"
                  })}
                  <span className="text-lg font-bold">{stat.value}</span>
                </div>
                <p className="text-sm text-white/80">{stat.label}</p>
              </motionComponents.div>
            ))}
          </div>
        </div>
      </div>
    </motionComponents.div>
  </div>
</section>
</Suspense>

<Suspense fallback={LoadingFallback}><GetStartedSection/></Suspense>

    <div className="bg-neutral-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motionComponents.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-primary font-bold mb-8"
        >
          Trending Now
        </motionComponents.h3>
        
        <motionComponents.hr 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 border-t-2 border-neutral-200"
        />
        
        <motionComponents.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Column 1 */}
          <motionComponents.div variants={itemVariants}>
            <h3 className="text-4xl">React is a top skill</h3>
            <div className="my-8">
              <a href="#" className="text-lg text-primary font-semibold inline-block hover:underline hover:translate-x-1 transition-transform duration-300">
                See All React Courses <ChevronRight className="inline-block text-sm" />
              </a>
              <p className="text-neutral-500">4,415,930 learners</p>
            </div>
            <button aria-label='trending Course' className="group flex items-center px-4 py-2 bg-transparent border-2 border-primary-500 hover:border-primary-600 font-semibold text-primary transition-all duration-300 my-8 hover:bg-primary-50 rounded-md">
              Show All Trending courses <TrendingUp className="text-primary-400 mx-2 group-hover:translate-x-1 transition-transform duration-300"/>
            </button>
          </motionComponents.div>
          
          {/* Column 2 */}
          <motionComponents.div variants={itemVariants}>
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
          </motionComponents.div>
          
          {/* Column 3 */}
          <motionComponents.div variants={itemVariants}>
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
          </motionComponents.div>
          
          {/* Column 4 */}
          <motionComponents.div variants={itemVariants}>
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
          </motionComponents.div>
        </motionComponents.div>

      
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
                
                <button aria-label='start learning' className="group flex items-center px-7 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <span>Start Learning</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
              </div>
              
              <div className="flex items-center justify-center">
                <img 
                  src="" 
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
                
                <button aria-label='learn more' className="group flex items-center px-7 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
              </div>
              
              <div className="flex items-center justify-center">
                <img 
                  src="" 
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
                
                <button aria-label='vGet Started' className="group flex items-center px-7 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
              </div>
              
              <div className="flex items-center justify-center">
                <img 
                  src="" 
                  alt="Finance Corp" 
                  className="max-h-80 object-contain rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          {/* Slider Navigation */}
          <div className="flex justify-start mt-8 space-x-4">
            <button 
               aria-label="slider-prev "
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
              aria-label="slider-next"
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