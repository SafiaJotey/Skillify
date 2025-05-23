import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import logo from "../assets/fullLogo.webp"
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigate=useNavigate()
  const getStart = () => {
    navigate("/auth/login")
  };
 const isMobile=useIsMobile()
    const MotionComponent = isMobile ? 'div' :motion.div  ;
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { 
      name: 'Categories', 
    
      subItems: [
        { name: 'Web Design', href: `/category/${"1"}` },
        { name: 'Development', href: '/category/2' },
        { name: 'Marketing', href: '/category/3'  }
      ]
    },
    // { name: 'Pricing', href: '#pricing' },
    // { name: 'Contact', href: '#contact' }
  ];

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 ${scrolled ? 'bg-dark-800/10 backdrop-blur-md shadow-sm' : 'bg-transparent'} transition-all duration-300`}
    >
      <div className="box mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <MotionComponent  
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center"
          >
            <a href="/" className="flex items-center" aria-label="logo" >
              <div className='w-[150px]'>
                <img src={logo} alt="skillify logo" loading="eager" decoding="async" fetchpriority="high"   className="w-full h-full object-cover"/>
              </div>
           
            </a>
          </MotionComponent >

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.subItems ? (
                  <div className="relative">
                    <button 
                    aria-label='toggleDropdown'
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center text-neutral-400 hover:text-primary-600 transition-colors font-medium"
                    >
                      {item.name}
                      {dropdownOpen === index ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>

                    <AnimatePresence>
                      {dropdownOpen === index && (
                        <MotionComponent 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-48 rounded-md bg-dark-800/25 backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50"
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <a aria-label={subItem?.name}
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm  text-neutral-300 hover:text-primary-600 hover:bg-neutral-700 transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </MotionComponent >
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                  aria-label={item.name}
                    href={item.href}
                    className=" text-neutral-400 hover:text-primary-600 transition-colors font-medium relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5text-primary-600 transition-all group-hover:w-full"></span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <motion.button
             onClick={getStart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-900 text-white font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
aria-label='hamburger'
onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <MotionComponent 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-700 shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <div key={index}>
                  <a aria-label=  {item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-neutral-300 hover:text-primary-600 hover:bg-neutral-700"
                  >
                    {item.name}
                  </a>
                  {item.subItems && (
                    <div className="pl-4">
                      {item.subItems.map((subItem, subIndex) => (
                        <a  aria-label=  {subItem.name}
                          key={subIndex}
                          href={subItem.href}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-neutral-400 hover:text-primary-600 hover:bg-neutral-700"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 py-4">
                <motion.button
                 onClick={getStart}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-2 rounded-full bg-gradient-to-r  from-primary-600 to-secondary-900 text-white font-medium shadow-lg"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </MotionComponent >
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;