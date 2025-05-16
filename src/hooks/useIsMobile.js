import { useEffect, useState } from "react";

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Initial check
        checkIfMobile();
        
        // Debounce the resize handler
        const debouncedCheck = debounce(checkIfMobile, 250);
        
        window.addEventListener('resize', debouncedCheck);
        
        return () => {
            window.removeEventListener('resize', debouncedCheck);
            debouncedCheck.cancel(); // Cancel any pending debounced calls
        };
    }, []);

    return isMobile;
}

// Simple debounce implementation
function debounce(func, wait) {
    let timeout;
    function debounced(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
    debounced.cancel = () => clearTimeout(timeout);
    return debounced;
}