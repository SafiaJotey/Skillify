import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Award, BookOpen, ChevronRight, FileText, Video, Code, Database, Paintbrush, Camera, Music, Globe, Cpu } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// Sample course images (you would replace these with actual image imports or URLs)
const courseImages = [
  '',
  
];

export default function Courses() {
  const [activeTab, setActiveTab] = useState('all');
  const [visibleCourses, setVisibleCourses] = useState(6);

  const courses = {
    all: [
      {
        id: 1,
        title: "Advanced React Patterns",
        description: "Master modern React architecture and advanced component patterns used by top companies.",
        category: "development",
        duration: "8h 30m",
        lessons: 42,
        level: "Advanced",
        icon: <BookOpen className="w-5 h-5 text-primary-500" />,
        image: courseImages[0]
      },
      {
        id: 2,
        title: "UI/UX Design Fundamentals",
        description: "Learn the core principles of user interface and experience design from industry experts.",
        category: "design",
        duration: "6h 15m",
        lessons: 35,
        level: "Beginner",
        icon: <FileText className="w-5 h-5 text-secondary-500" />,
        image:courseImages[0]
      },
      {
        id: 3,
        title: "Node.js Microservices",
        description: "Build scalable microservices architecture with Node.js and Docker.",
        category: "development",
        duration: "10h",
        lessons: 58,
        level: "Intermediate",
        icon: <Code className="w-5 h-5 text-primary-500" />,
        image: courseImages[0]
      },
      {
        id: 4,
        title: "Digital Photography Masterclass",
        description: "From beginner to professional - learn photography techniques from a seasoned pro.",
        category: "photography",
        duration: "12h",
        lessons: 65,
        level: "Beginner",
        icon: <Camera className="w-5 h-5 text-purple-500" />,
        image: courseImages[0]
      },
      {
        id: 5,
        title: "Data Science Fundamentals",
        description: "Introduction to data analysis, machine learning and statistical modeling with Python.",
        category: "data",
        duration: "15h",
        lessons: 72,
        level: "Intermediate",
        icon: <Database className="w-5 h-5 text-blue-500" />,
        image: courseImages[0]
      },
      {
        id: 6,
        title: "Music Theory for Producers",
        description: "Essential music theory concepts for electronic music producers and composers.",
        category: "music",
        duration: "7h 20m",
        lessons: 38,
        level: "Beginner",
        icon: <Music className="w-5 h-5 text-pink-500" />,
        image: courseImages[0]
      },
      {
        id: 7,
        title: "Advanced CSS and Sass",
        description: "Take your CSS skills to the next level with modern techniques and Sass workflows.",
        category: "development",
        duration: "9h 15m",
        lessons: 47,
        level: "Intermediate",
        icon: <Paintbrush className="w-5 h-5 text-orange-500" />,
        image: courseImages[0]
      },
      {
        id: 8,
        title: "Web Accessibility",
        description: "Learn how to build websites that are accessible to all users regardless of ability.",
        category: "development",
        duration: "5h 45m",
        lessons: 28,
        level: "Intermediate",
        icon: <Globe className="w-5 h-5 text-green-500" />,
        image:courseImages[0]
      },
      {
        id: 9,
        title: "Graphic Design Principles",
        description: "Core design theory, typography, color theory and layout techniques for print and digital.",
        category: "design",
        duration: "11h",
        lessons: 53,
        level: "Beginner",
        icon: <Paintbrush className="w-5 h-5 text-secondary-500" />,
        image: courseImages[0]
      },
      {
        id: 10,
        title: "Machine Learning Basics",
        description: "Introduction to machine learning algorithms and their practical applications.",
        category: "data",
        duration: "14h 30m",
        lessons: 68,
        level: "Advanced",
        icon: <Cpu className="w-5 h-5 text-blue-500" />,
        image: courseImages[0]
      },
      {
        id: 11,
        title: "Mobile App Development with Flutter",
        description: "Build cross-platform mobile applications using Google's Flutter framework.",
        category: "development",
        duration: "13h",
        lessons: 61,
        level: "Intermediate",
        icon: <Code className="w-5 h-5 text-primary-500" />,
        image:courseImages[0]
      },
      {
        id: 12,
        title: "Advanced JavaScript Patterns",
        description: "Deep dive into modern JavaScript patterns and best practices.",
        category: "development",
        duration: "10h 45m",
        lessons: 52,
        level: "Advanced",
        icon: <Code className="w-5 h-5 text-primary-500" />,
        image:courseImages[0]
      }
    ],
    development: [
      {
        id: 1,
        title: "Advanced React Patterns",
        description: "Master modern React architecture and advanced component patterns used by top companies.",
        duration: "8h 30m",
        lessons: 42,
        level: "Advanced",
        icon: <BookOpen className="w-5 h-5 text-primary-500" />,
        image: courseImages[0]
      },
      {
        id: 3,
        title: "Node.js Microservices",
        description: "Build scalable microservices architecture with Node.js and Docker.",
        duration: "10h",
        lessons: 58,
        level: "Intermediate",
        icon: <Code className="w-5 h-5 text-primary-500" />,
        image: courseImages[0]
      },
      {
        id: 7,
        title: "Advanced CSS and Sass",
        description: "Take your CSS skills to the next level with modern techniques and Sass workflows.",
        duration: "9h 15m",
        lessons: 47,
        level: "Intermediate",
        icon: <Paintbrush className="w-5 h-5 text-orange-500" />,
        image: courseImages[0]
      },
      {
        id: 8,
        title: "Web Accessibility",
        description: "Learn how to build websites that are accessible to all users regardless of ability.",
        duration: "5h 45m",
        lessons: 28,
        level: "Intermediate",
        icon: <Globe className="w-5 h-5 text-green-500" />,
        image: courseImages[0]
      },
      {
        id: 11,
        title: "Mobile App Development with Flutter",
        description: "Build cross-platform mobile applications using Google's Flutter framework.",
        duration: "13h",
        lessons: 61,
        level: "Intermediate",
        icon: <Code className="w-5 h-5 text-primary-500" />,
        image: courseImages[0]
      },
      {
        id: 12,
        title: "Advanced JavaScript Patterns",
        description: "Deep dive into modern JavaScript patterns and best practices.",
        duration: "10h 45m",
        lessons: 52,
        level: "Advanced",
        icon: <Code className="w-5 h-5 text-primary-500" />,
        image: courseImages[0]
      }
    ],
    design: [
      {
        id: 2,
        title: "UI/UX Design Fundamentals",
        description: "Learn the core principles of user interface and experience design from industry experts.",
        duration: "6h 15m",
        lessons: 35,
        level: "Beginner",
        icon: <FileText className="w-5 h-5 text-secondary-500" />,
        image:courseImages[0]
      },
      {
        id: 9,
        title: "Graphic Design Principles",
        description: "Core design theory, typography, color theory and layout techniques for print and digital.",
        duration: "11h",
        lessons: 53,
        level: "Beginner",
        icon: <Paintbrush className="w-5 h-5 text-secondary-500" />,
        image: courseImages[0]
      }
    ],
    photography: [
      {
        id: 4,
        title: "Digital Photography Masterclass",
        description: "From beginner to professional - learn photography techniques from a seasoned pro.",
        duration: "12h",
        lessons: 65,
        level: "Beginner",
        icon: <Camera className="w-5 h-5 text-purple-500" />,
        image:courseImages[0]
      }
    ],
    data: [
      {
        id: 5,
        title: "Data Science Fundamentals",
        description: "Introduction to data analysis, machine learning and statistical modeling with Python.",
        duration: "15h",
        lessons: 72,
        level: "Intermediate",
        icon: <Database className="w-5 h-5 text-blue-500" />,
        image:courseImages[0]
      },
     
      {
        id: 10,
        title: "Machine Learning Basics",
        description: "Introduction to machine learning algorithms and their practical applications.",
        duration: "14h 30m",
        lessons: 68,
        level: "Advanced",
        icon: <Cpu className="w-5 h-5 text-blue-500" />,
        image: courseImages[0]
      }
    ],
    music: [
      {
        id: 6,
        title: "Music Theory for Producers",
        description: "Essential music theory concepts for electronic music producers and composers.",
        duration: "7h 20m",
        lessons: 38,
        level: "Beginner",
        icon: <Music className="w-5 h-5 text-pink-500" />,
        image:courseImages[0]
      }
    ]
  };
  const navigate=useNavigate()
  const tabVariants = {
    active: {
      color: '#111827',
      borderBottomWidth: '2px',
      borderColor: '#06b6d4'
    },
    inactive: {
      color: '#64748b',
      borderBottomWidth: '0px'
    }
  };
  
  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
    }
  };
  const loadMoreCourses = () => {
    navigate("/courses")
  };
  const courseDetails = (id) => {
    navigate(`/courseDetails/${id}`)
  };

  const currentCourses = courses[activeTab].slice(0, visibleCourses);

    
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-dark-800 mb-4"
          >
            Explore Our Courses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-500 max-w-2xl mx-auto"
          >
            Learn in-demand skills with our comprehensive curriculum designed by industry professionals.
          </motion.p>
        </div>

        <div className="mb-10">
          <div className="flex justify-center gap-2 md:gap-6 border-b border-neutral-200 overflow-x-auto pb-1">
            {['all', 'development', 'design', 'photography', 'data', 'music'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setVisibleCourses(6);
                }}
                initial={false}
                animate={activeTab === tab ? 'active' : 'inactive'}
                variants={tabVariants}
                className="px-4 py-3 text-sm md:text-base font-medium capitalize transition-colors whitespace-nowrap"
              >
                {tab === 'all' ? 'All Courses' : tab}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCourses.map((course) => (
            <motion.div
              key={course.id}
              whileHover="hover"
              variants={cardVariants}
              className="bg-white rounded-xl border border-neutral-200 overflow-hidden transition-all"
            >
              <div className="h-40 overflow-hidden">
               
                <img

 src={course.image} 
                  alt={course.title}
        className="w-full h-full object-cover"
  loading="eager" decoding="async"
  fetchpriority="low" 
/>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-50">
                    {course.icon}
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-neutral-100 text-neutral-600">
                    {course.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-dark-800 mb-2">{course.title}</h3>
                <p className="text-neutral-500 mb-4">{course.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-neutral-500 mb-6">
                  <span className="flex items-center gap-1">
                    <Video className="w-4 h-4" />
                    {course.lessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    {course.duration}
                  </span>
                </div>
                
                {/* <button className="w-full flex items-center justify-between group"  onClick={()=>courseDetails(course?.id)}> 
                  <span className="font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
                    View Course
                  </span>
                  <ChevronRight className="w-5 h-5 text-primary-500 group-hover:translate-x-1 transition-transform" />
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button 
              onClick={loadMoreCourses}
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
             Browse All Courses
            </button>
          </motion.div>
      </div>
    </section>
  )
}