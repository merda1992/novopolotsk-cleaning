import { useState, useLayoutEffect } from 'react';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useLayoutEffect(() => {
    function updateWindowWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWindowWidth);
    updateWindowWidth();
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return windowWidth;
};
