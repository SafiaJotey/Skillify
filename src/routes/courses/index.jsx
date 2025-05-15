import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { courseService } from './courses.api';

export default function CoursesPage() {
  const [loading, setLoading] = useState(false);
  const [courseList, setCourseList] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const courseDetails = (course) => {
  
    navigate(`/courseDetails/${course?.id}`,{  state: { course }});
  };



  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const data = await courseService.getAllCourses();
        setCourseList(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch courses');
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

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
          {/* ... existing search and filter code ... */}
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courseList?.map((course, index) => (
           <motion.div
           key={course.id || index}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 * index }}
           whileHover={{ y: -5 }}
           className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-dark-700 flex flex-col h-full" // Added flex and h-full here
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
           <div className="p-5 flex flex-col flex-grow"> {/* Added flex classes here */}
             <div className="flex-grow"> {/* This wrapper will push the button down */}
               <div className="flex justify-between items-start">
                 <div>
                   <span className="inline-block px-2 py-1 text-xs font-medium bg-neutral-100 dark:bg-dark-700 text-neutral-600 dark:text-neutral-300 rounded-full mb-2">
                     {course.category}
                   </span>
                   <h3 className="text-lg font-bold text-neutral-800 dark:text-white mb-1">{course.title}</h3>
                   <p className="text-sm text-neutral-500 dark:text-neutral-400">
                     By {course.instructor?.name || 'Unknown Instructor'}
                   </p>
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
                   {course.students?.toLocaleString() || '0'}
                 </div>
               </div>
             </div>
             <motion.button
               onClick={()=>courseDetails(course)}
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
            <a aria-label="Previous" 
              href="#"
              className="px-3 py-2 rounded-l-md border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-dark-600"
            >
              Previous
            </a>
            <a  aria-label="1" 
              href="#"
              className="px-3 py-2 border-t border-b border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-primary-600 dark:text-primary-400 hover:bg-neutral-50 dark:hover:bg-dark-600"
            >
              1
            </a>
            <a aria-label="2" 
              href="#"
              className="px-3 py-2 border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-dark-600"
            >
              2
            </a>
            <a aria-label="3" 
              href="#"
              className="px-3 py-2 border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-dark-600"
            >
              3
            </a>
            <a aria-label="Next" 
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