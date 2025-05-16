// hooks/useMotion.js
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { useIsMobile } from './useIsMobile';

const useMotion = () => {
    const isMobile = useIsMobile();
    const motionComponents = useMemo(() => ({
        div: isMobile ? "div" : motion.div,
        section: isMobile ? "section" : motion.section,
        button: isMobile ? "button" : motion.button,
        img: isMobile ? "img" : motion.img,
        h1: isMobile ? "h1" : motion.h1,
        h2: isMobile ? "h2" : motion.h2,
        h3: isMobile ? "h3" : motion.h3,
        p: isMobile ? "p" : motion.p,
        span: isMobile ? "span" : motion.span,
        ul: isMobile ? "ul" : motion.ul,
        li: isMobile ? "li" : motion.li,
        hr: isMobile ? "hr" : motion.hr
    }), [isMobile]); 

    return motionComponents;
};

export default useMotion;