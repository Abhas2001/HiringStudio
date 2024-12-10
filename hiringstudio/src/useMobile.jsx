import { useState, useEffect } from "react";

const MOBILE_MAX_SCREEN_SIZE = 500;

export const useMobile = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width =
        window.innerWidth || document.documentElement.clientWidth;

      // Check width and consider mobile user agent
      const isMobileScreen = width < MOBILE_MAX_SCREEN_SIZE;
      const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent
      );

      setMobile(isMobileScreen || isMobileDevice);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
};
