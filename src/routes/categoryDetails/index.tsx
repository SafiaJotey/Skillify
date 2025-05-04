import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, Star, Clock, Users } from 'lucide-react';
import React from 'react';
import Reviews from "../../components/Reviews"
import Courses from '../../components/Courses';
import Categories from '../../components/Categories';
const Category = () => {
  const categoryName = "Web Development";
  const courseCount = 127;
  const enrolledStudents = "45K+";
  const averageRating = 4.7;

  return (
    <div className="bg-dark-900">
      {/* Category Banner Section */}
      <section className="relative bg-dark-800 overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-primary-500 blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-primary-700 blur-3xl"
        />

        <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb navigation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center items-center text-sm sm:text-base mb-6 text-neutral-400"
            >
              <a href="/" className="hover:text-primary-400 transition-colors">Home</a>
              <ChevronRight className="w-4 h-4 mx-2" />
              <a href="/categories" className="hover:text-primary-400 transition-colors">Categories</a>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-primary-400">{categoryName}</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {categoryName} Courses
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto"
            >
              Master {categoryName} with our curated collection of {courseCount}+ professional courses
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <div className="flex items-center bg-dark-700 px-4 py-2 rounded-lg ">
                <BookOpen className="w-5 h-5 text-primary-400 mr-2" />
                <span className="text-neutral-200">
                  <span className="text-primary-400 font-medium">{courseCount}+</span> Courses
                </span>
              </div>
              <div className="flex items-center bg-dark-700 px-4 py-2 rounded-lg ">
                <Users className="w-5 h-5 text-primary-400 mr-2" />
                <span className="text-neutral-200">
                  <span className="text-primary-400 font-medium">{enrolledStudents}</span> Students
                </span>
              </div>
              <div className="flex items-center bg-dark-700 px-4 py-2 rounded-lg ">
                <Star className="w-5 h-5 text-primary-400 mr-2" />
                <span className="text-neutral-200">
                  <span className="text-primary-400 font-medium">{averageRating}</span> Avg Rating
                </span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg shadow-lg transition-all"
            >
              Start Learning Now
            </motion.button>
          </div>
        </div>

        {/* Animated gradient border bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent w-full"
        />
      </section>

      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Category content would go here */}
          <div className="">
            <h2 className="text-2xl font-bold text-white mb-6">About {categoryName}</h2>
            <p className="text-neutral-300 mb-6">
              Our {categoryName.toLowerCase()} courses cover everything from fundamentals to advanced topics, 
              taught by industry experts. Whether you're just starting out or looking to 
              specialize, we have the perfect learning path for you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dark-700 p-6 rounded-lg ">
                <Clock className="w-8 h-8 text-primary-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Flexible Learning</h3>
                <p className="text-neutral-400">Learn at your own pace with lifetime access</p>
              </div>
              <div className="bg-dark-700 p-6 rounded-lg ">
                <Star className="w-8 h-8 text-primary-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Hands-on Projects</h3>
                <p className="text-neutral-400">Build real-world applications</p>
              </div>
              <div className="bg-dark-700 p-6 rounded-lg ">
                <Users className="w-8 h-8 text-primary-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Community Support</h3>
                <p className="text-neutral-400">Join our active learner community</p>
              </div>
            </div>
          </div>
        </div>
      </section>


<Courses/>
      <Reviews/>
      <Categories/>
    </div>
  );
};

export default Category;