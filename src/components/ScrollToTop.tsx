// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollContext } from './ScrollContext';
import { useContext } from 'react';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const scrollInstance = useContext(ScrollContext);

  useEffect(() => {
    if (scrollInstance.current) {
      scrollInstance.current.scrollTo(0, { duration: 0 });
    }
  }, [pathname]);

  return null;
};