import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-dark-900 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative bg-white dark:bg-dark-800 rounded-3xl shadow-xl p-8 w-full max-w-md border border-neutral-200 dark:border-dark-700 overflow-hidden"
      >
        {/* Glowing accent elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-200 dark:bg-primary-900 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-200 dark:bg-primary-900 rounded-full opacity-10 blur-xl"></div>
        
        {/* Header with animated logo */}
        <div className="flex flex-col items-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
            className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold text-primary-600 dark:text-primary-400"
          >
            Welcome Back
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-neutral-500 dark:text-neutral-400 mt-2"
          >
            Sign in to your Skillify account
          </motion.p>
        </div>

        <form className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type="password"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            <div className="flex justify-end mt-2">
              <Link to="/forgot-password" className="text-xs text-primary-500 hover:text-primary-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: '#0891b2' }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="w-full py-3 px-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-md hover:shadow-primary-200/50 dark:hover:shadow-primary-800/30 transition-all duration-300"
          >
            Sign In
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6"
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-300 dark:border-dark-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-dark-800 text-neutral-500 dark:text-neutral-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-neutral-200 dark:border-dark-700 rounded-xl shadow-sm bg-white dark:bg-dark-700 text-sm font-medium text-neutral-500 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-dark-600 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-neutral-200 dark:border-dark-700 rounded-xl shadow-sm bg-white dark:bg-dark-700 text-sm font-medium text-neutral-500 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-dark-600 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-6"
        >
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-primary-500 hover:text-primary-600 hover:underline">
            Sign up
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}