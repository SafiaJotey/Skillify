import logo from "../assets/fullLogo.png"
import { 
  Github, Twitter, Linkedin, Mail, 
  Zap, Code, ShieldCheck, Rocket, 
  ChevronRight, Home, BookOpen, User, 
  HelpCircle, Rss
} from "lucide-react";
import { motion} from 'framer-motion';
const Footer = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative bg-dark-800 text-white overflow-hidden pt-20 pb-12">
      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary-500/10 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary-500/10 blur-[100px]"></div>
      
      {/* Floating particles */}
      {[...Array(100)].map((_, i) => {
        const colors = [
          "from-secondary-400 to-primary-500",
          "from-secondary-500 to-secondary-600",
          "from-primary-400 to-secondary-500"
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [0, -100],
              x: [0, (Math.random() - 0.5) * 50],
              transition: {
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }
            }}
            className={`absolute rounded-full bg-gradient-to-r ${randomColor}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
            }}
          />
        );
      })}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Logo and description */}
          <motion.div variants={item} className="space-y-6">
            <div className="flex items-center">
               <a href="/" className="flex items-center">
                            <div className='w-[150px]'>
                              <img src={logo} alt="" />
                            </div>
                         
                          </a>
            </div>
            <p className="text-neutral-400">
              Master skills like a pro developer with our interactive, project-based courses taught by industry experts.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Github className="w-5 h-5" />, label: "GitHub" },
                { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                { icon: <Mail className="w-5 h-5" />, label: "Email" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { icon: <Home className="w-4 h-4 mr-2" />, text: "Home" },
                { icon: <BookOpen className="w-4 h-4 mr-2" />, text: "Courses" },
                { icon: <User className="w-4 h-4 mr-2" />, text: "About Us" },
                { icon: <HelpCircle className="w-4 h-4 mr-2" />, text: "FAQ" },
                { icon: <Rss className="w-4 h-4 mr-2" />, text: "Blog" }
              ].map((link, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="flex items-center text-neutral-400 hover:text-primary-400 transition-colors">
                    {link.icon}
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Popular Courses</h3>
            <ul className="space-y-3">
              {[
                { icon: <Code className="w-4 h-4 mr-2" />, text: "React Masterclass" },
                { icon: <ShieldCheck className="w-4 h-4 mr-2" />, text: "Next.js Pro" },
                { icon: <Rocket className="w-4 h-4 mr-2" />, text: "Advanced JavaScript" },
                { icon: <Zap className="w-4 h-4 mr-2" />, text: "TypeScript Fundamentals" },
                { icon: <Code className="w-4 h-4 mr-2" />, text: "Node.js Backend" }
              ].map((course, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="flex items-center text-neutral-400 hover:text-primary-400 transition-colors">
                    {course.icon}
                    {course.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-neutral-400">
              Subscribe to get updates on new courses, tutorials, and special offers.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-lg font-medium text-white transition-all shadow-lg hover:shadow-primary-500/30"
              >
                <span>Subscribe</span>
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Skillify by Safia Ahmed. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-500 hover:text-primary-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-500 hover:text-primary-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-neutral-500 hover:text-primary-400 text-sm transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;