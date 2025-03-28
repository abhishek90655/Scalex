
import { useEffect, useState } from 'react';

// Define the mobile breakpoint
const MOBILE_BREAKPOINT = 768;

// Function to check if the screen is mobile-sized
const checkIfMobile = () => window.innerWidth < MOBILE_BREAKPOINT;

// Original useTheme implementation (for backward compatibility)
interface ThemeContextValue {
  isMobile: boolean;
}

export const useTheme = (): ThemeContextValue => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobileSize = () => {
      setIsMobile(checkIfMobile());
    };
    
    // Initial check
    checkMobileSize();
    
    // Add event listener
    window.addEventListener('resize', checkMobileSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobileSize);
  }, []);
  
  return { isMobile };
};

// New useIsMobile hook with the same functionality but simpler return type
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(checkIfMobile());
    };
    
    // Modern event listener
    mql.addEventListener("change", onChange);
    
    // Initial check
    setIsMobile(checkIfMobile());
    
    // Cleanup
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}