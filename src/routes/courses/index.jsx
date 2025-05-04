import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Sarah Johnson",
      category: "Web Development",
      level: "Advanced",
      duration: "12 hours",
      students: 1245,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Modern UI Design with Figma",
      instructor: "Michael Chen",
      category: "Design",
      level: "Intermediate",
      duration: "8 hours",
      students: 876,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Node.js Backend Mastery",
      instructor: "David Wilson",
      category: "Web Development",
      level: "Advanced",
      duration: "15 hours",
      students: 1532,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Mobile App Development with Flutter",
      instructor: "Emma Rodriguez",
      category: "Mobile",
      level: "Beginner",
      duration: "10 hours",
      students: 2103,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Data Science Fundamentals",
      instructor: "James Peterson",
      category: "Data Science",
      level: "Intermediate",
      duration: "20 hours",
      students: 2987,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "DevOps & CI/CD Pipelines",
      instructor: "Lisa Wong",
      category: "DevOps",
      level: "Advanced",
      duration: "14 hours",
      students: 987,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    "All Categories",
    "Web Development",
    "Mobile",
    "Design",
    "Data Science",
    "DevOps"
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-dark-900">
   

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all"
                placeholder="Search courses..."
              />
            </div>
            <div className="w-full md:w-64">
              <select className="w-full px-4 py-2 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-48">
              <select className="w-full px-4 py-2 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-dark-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {course.level}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-neutral-100 dark:bg-dark-700 text-neutral-600 dark:text-neutral-300 rounded-full mb-2">
                      {course.category}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-800 dark:text-white mb-1">{course.title}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">By {course.instructor}</p>
                  </div>
                  <div className="flex items-center bg-neutral-100 dark:bg-dark-700 px-2 py-1 rounded-full">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {course.rating}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {course.students.toLocaleString()}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full mt-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium shadow-md transition-all"
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <nav className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="px-3 py-2 rounded-l-md border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-dark-600"
            >
              Previous
            </a>
            <a
              href="#"
              className="px-3 py-2 border-t border-b border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-primary-600 dark:text-primary-400 hover:bg-neutral-50 dark:hover:bg-dark-600"
            >
              1
            </a>
            <a
              href="#"
              className="px-3 py-2 border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-dark-600"
            >
              2
            </a>
            <a
              href="#"
              className="px-3 py-2 border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-dark-600"
            >
              3
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-r-md border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-dark-600"
            >
              Next
            </a>
          </nav>
        </motion.div>
      </main>
    </div>
  );
}