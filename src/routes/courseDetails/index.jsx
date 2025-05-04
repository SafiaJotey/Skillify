import { motion } from "framer-motion";
import { 
  Clock, Star, Users, BookOpen, Award, Briefcase, 
  CheckCircle, Play, Download, ChevronDown, ChevronUp,
  Shield, Bookmark, FileText, HelpCircle, MessageSquare
} from "lucide-react";
import { useState } from "react";

const CourseDetailsPage = () => {
  // Sample course data
  const course = {
    title: "Advanced Animation with Framer Motion",
    category: "Web Development",
    instructor: "Alex Motion",
    rating: 4.9,
    CountReviews: 1284,
    students: 8450,
    duration: "28 hours",
    level: "Intermediate",
    lastUpdated: "June 2023",
    thumbnail: "/course-thumbnail.jpg",
    price: 129.99,
    discountPrice: 89.99,
    description: "Master professional animation techniques used by top tech companies. Learn to create fluid, performant animations for modern web applications using Framer Motion and React.",
    longDescription: "This comprehensive course takes you from animation fundamentals to advanced techniques. You'll learn how to create stunning user experiences through motion design, optimize performance, and implement complex animations in real-world projects. By the end, you'll be able to build professional-grade animations that delight users and enhance usability.",
    
    highlights: [
      "Create complex animations with Framer Motion",
      "30+ professional animation techniques",
      "10 real-world projects with source code",
      "Performance optimization strategies",
      "Interactive component patterns",
      "Gesture-based animations",
      "Advanced layout animations"
    ],
    
    requirements: [
      "Basic React knowledge",
      "JavaScript fundamentals",
      "CSS basics",
      "Node.js installed (we'll guide you)"
    ],
    
    sections: [
      {
        title: "Getting Started",
        lectures: [
          { title: "Introduction to Motion Design", duration: "12:45", preview: true },
          { title: "Setting Up Framer Motion", duration: "08:30", preview: true },
          { title: "Your First Animation", duration: "15:20" },
        ]
      },
      {
        title: "Core Principles",
        lectures: [
          { title: "Timing and Spacing", duration: "15:20" },
          { title: "Easing Functions Deep Dive", duration: "18:10" },
          { title: "Spring Physics", duration: "22:45", preview: true },
        ]
      }
    ],
    
    includes: [
      "28 hours on-demand video",
      "15 articles and resources",
      "10 downloadable assets",
      "Full lifetime access",
      "Certificate of completion",
      "Access on mobile and TV"
    ],
    
    instructorInfo: {
      name: "Alex Motion",
      bio: "Senior Animation Designer with 10+ years experience working with Fortune 500 companies. Specializes in creating performant, accessible animations for web and mobile applications.",
      courses: 8,
      students: 45000,
      rating: 4.95
    },
  
    reviews: [
      {
        author: "Sarah Johnson",
        rating: 5,
        date: "2 weeks ago",
        comment: "This course transformed how I approach animations. The real-world projects were incredibly valuable for my portfolio.",
        avatar: "/avatar1.jpg"
      },
      {
        author: "Michael Chen",
        rating: 4,
        date: "1 month ago",
        comment: "Great content, though some advanced sections could use more examples. Instructor's knowledge is top-notch.",
        avatar: "/avatar2.jpg"
      }
    ],
    
    relatedCourses: [
      {
        title: "React Masterclass",
        instructor: "Alex Motion",
        rating: 4.8,
        students: 12000,
        price: 99.99,
        thumbnail: "/course-react.jpg"
      },
      {
        title: "UI/UX Design Principles",
        instructor: "Alex Motion",
        rating: 4.7,
        students: 8500,
        price: 79.99,
        thumbnail: "/course-design.jpg"
      }
    ]
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // State for expanded sections
  const [expandedSections, setExpandedSections] = useState(
    course.sections.map((_, index) => index === 0) // First section expanded by default
  );

  const toggleSection = (index) => {
    setExpandedSections(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-primary-600 to-primary-800 py-16 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex-1">
                <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                  {course.category}
                </span>
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {course.title}
                </motion.h1>
                <p className="text-xl mb-6 max-w-3xl">{course.description}</p>
                
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-white/30'}`}
                        />
                      ))}
                    </div>
                    <span>{course.rating} ({course.CountReviews.toLocaleString()} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    <span>{course.level}</span>
                  </div>
                </div>
              </div>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full md:w-96"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-white/20">
                  <div className="h-48 bg-dark-800 flex items-center justify-center">
                    <button className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center hover:bg-primary-400 transition-all">
                      <Play className="w-6 h-6 fill-white" />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-end mb-4">
                      <span className="text-3xl font-bold">${course.discountPrice}</span>
                      {course.discountPrice < course.price && (
                        <span className="ml-2 text-white/70 line-through">${course.price}</span>
                      )}
                    </div>
                    <button className="w-full bg-white text-primary-700 hover:bg-neutral-100 font-bold py-3 px-4 rounded-lg mb-4 transition-colors">
                      Enroll Now
                    </button>
                    <p className="text-center text-sm text-white/80 mb-4">30-Day Money-Back Guarantee</p>
                    <h3 className="font-bold mb-3">This course includes:</h3>
                    <ul className="space-y-2 text-white/90">
                      {course.includes.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Description */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-sm p-8 border border-neutral-200"
              >
                <h2 className="text-2xl font-bold text-dark-800 mb-6">Description</h2>
                <div className="prose max-w-none text-neutral-700">
                  <p>{course.longDescription}</p>
                </div>
              </motion.div>

              {/* What You'll Learn */}
              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="bg-white rounded-xl shadow-sm p-8 border border-neutral-200"
              >
                <h2 className="text-2xl font-bold text-dark-800 mb-6">What you'll learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <motion.div 
                      key={index} 
                      variants={item}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span>{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Course Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-neutral-200"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-dark-800">Course content</h2>
                  <span className="text-neutral-600">
                    {course.sections.length} sections • {course.sections.reduce((acc, section) => acc + section.lectures.length, 0)} lectures • {course.duration}
                  </span>
                </div>

                <div className="space-y-2">
                  {course.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="border border-neutral-200 rounded-lg overflow-hidden">
                      <button 
                        onClick={() => toggleSection(sectionIndex)}
                        className="w-full flex justify-between items-center p-4 bg-neutral-50 hover:bg-neutral-100 transition-colors"
                      >
                        <div className="flex items-center">
                          <BookOpen className="w-5 h-5 text-primary-500 mr-3" />
                          <div>
                            <h3 className="font-medium text-left">{section.title}</h3>
                            <p className="text-sm text-neutral-500 text-left">
                              {section.lectures.length} lectures • {section.lectures.reduce((acc, lecture) => {
                                const [min, sec] = lecture.duration.split(':').map(Number);
                                return acc + min + sec/60;
                              }, 0).toFixed(1)} min
                            </p>
                          </div>
                        </div>
                        {expandedSections[sectionIndex] ? (
                          <ChevronUp className="w-5 h-5 text-neutral-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-neutral-500" />
                        )}
                      </button>
                      
                      {expandedSections[sectionIndex] && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="divide-y divide-neutral-200"
                        >
                          {section.lectures.map((lecture, lectureIndex) => (
                            <div key={lectureIndex} className="p-4 flex justify-between items-center hover:bg-neutral-50 transition-colors">
                              <div className="flex items-center">
                                <Play className="w-4 h-4 text-neutral-500 mr-3" />
                                <span>{lecture.title}</span>
                                {lecture.preview && (
                                  <span className="ml-2 px-2 py-0.5 bg-primary-100 text-primary-700 text-xs rounded">
                                    Preview
                                  </span>
                                )}
                              </div>
                              <span className="text-neutral-500 text-sm">{lecture.duration}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Requirements */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm p-8 border border-neutral-200"
              >
                <h2 className="text-2xl font-bold text-dark-800 mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {course.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-3"></span>
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Instructor */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl shadow-sm p-8 border border-neutral-200"
              >
                <h2 className="text-2xl font-bold text-dark-800 mb-6">Instructor</h2>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center">
                    <Briefcase className="w-10 h-10 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-800 mb-2">{course.instructorInfo.name}</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{course.instructorInfo.rating} Instructor Rating</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 text-primary-500 mr-1" />
                        <span>{course.instructorInfo.courses} Courses</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-primary-500 mr-1" />
                        <span>{course.instructorInfo.students.toLocaleString()} Students</span>
                      </div>
                    </div>
                    <p className="text-neutral-700 mb-4">{course.instructorInfo.bio}</p>
                    <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                      View all courses by this instructor
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Reviews */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-xl shadow-sm p-8 border border-neutral-200"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-dark-800">Student reviews</h2>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-2" />
                    <span className="font-bold">{course.rating}</span>
                    <span className="text-neutral-500 ml-1">({course.CountReviews.toLocaleString()} reviews)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {course.reviews.map((review, index) => (
                    <div key={index} className="border-b border-neutral-200 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-neutral-200 mr-3"></div>
                        <div>
                          <h4 className="font-medium">{review.author}</h4>
                          <div className="flex items-center">
                            <div className="flex mr-2">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-neutral-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-neutral-700">{review.comment}</p>
                    </div>
                  ))}

                  <button className="w-full py-3 border border-neutral-300 rounded-lg font-medium hover:bg-neutral-50 transition-colors">
                    See all reviews
                  </button>
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white rounded-xl shadow-sm p-8 border border-neutral-200"
              >
                <h2 className="text-2xl font-bold text-dark-800 mb-6">Frequently asked questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      question: "How long do I have access to the course?",
                      answer: "After enrolling, you have unlimited access to this course for as long as you like - across any and all devices you own."
                    },
                    {
                      question: "Will I receive a certificate?",
                      answer: "Yes, upon completing the course you'll receive a certificate of completion that you can share with your professional network."
                    },
                    {
                      question: "What if I'm unhappy with the course?",
                      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact us in the first 30 days for a full refund."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-neutral-200 pb-4 last:border-0">
                      <h3 className="font-medium text-dark-800 mb-2">{faq.question}</h3>
                      <p className="text-neutral-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-6"
              >
                <div className="bg-white rounded-xl shadow-md border border-neutral-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-end mb-4">
                      <span className="text-3xl font-bold text-dark-800">${course.discountPrice}</span>
                      {course.discountPrice < course.price && (
                        <span className="ml-2 text-neutral-500 line-through">${course.price}</span>
                      )}
                    </div>

                    <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg mb-4 transition-colors">
                      Enroll Now
                    </button>

                    <div className="text-center mb-4">
                      <p className="text-sm text-neutral-600">30-Day Money-Back Guarantee</p>
                    </div>

                    <h3 className="font-bold text-dark-800 mb-3">This course includes:</h3>
                    <ul className="space-y-3 text-neutral-700 mb-6">
                      {course.includes.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-primary-500 mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full py-2.5 border border-neutral-300 rounded-lg font-medium hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2">
                      <Bookmark className="w-4 h-4" />
                      <span>Save for later</span>
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Related Courses */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-neutral-200"
              >
                <h3 className="font-bold text-dark-800 mb-4">More from {course.instructor}</h3>
                <div className="space-y-4">
                  {course.relatedCourses.map((relatedCourse, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-16 h-16 bg-neutral-200 rounded-lg"></div>
                      <div>
                        <h4 className="font-medium text-dark-800 line-clamp-2">{relatedCourse.title}</h4>
                        <div className="flex items-center mt-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-xs">{relatedCourse.rating}</span>
                          <span className="text-xs text-neutral-500 ml-1">({relatedCourse.students.toLocaleString()})</span>
                        </div>
                        <div className="text-sm font-bold mt-1">${relatedCourse.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Support */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-neutral-200"
              >
                <h3 className="font-bold text-dark-800 mb-4">Need help?</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
                    <div className="flex items-center">
                      <MessageSquare className="w-5 h-5 text-primary-500 mr-3" />
                      <span>Ask a question</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-neutral-500" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
                    <div className="flex items-center">
                      <HelpCircle className="w-5 h-5 text-primary-500 mr-3" />
                      <span>FAQ</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-neutral-500" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-primary-500 mr-3" />
                      <span>Guarantee</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-neutral-500" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailsPage;