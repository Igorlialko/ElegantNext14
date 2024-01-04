import { useEffect, useState } from 'react';

export const useHeaderShadow = () => {
  const [isShadow, setIsShadow] = useState(false);

  useEffect(() => {
    const scroller = () => {
      if (window.scrollY > 50) {
        setIsShadow(true);
      } else {
        setIsShadow(false);
      }
    };
    scroller();
    document.addEventListener('scroll', scroller);
    return () => {
      document.removeEventListener('scroll', scroller);
    };
  }, []);

  return isShadow;
};
