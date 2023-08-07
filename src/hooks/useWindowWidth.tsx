import { useState, useLayoutEffect } from 'react';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  useLayoutEffect(() => {
    function updateWindowWidth() {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener('resize', updateWindowWidth);
    updateWindowWidth();

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return { windowWidth, windowHeight };
};
