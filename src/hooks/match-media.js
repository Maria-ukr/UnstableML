import { useEffect, useState } from 'react';

export const matchMediaScreen = (props) => {
  const { widthScreen } = props;
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(`(max-width: ${widthScreen}px)`).matches
  );
  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${widthScreen}px)`);
    const handleWidth = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener('change', handleWidth);
    return () => {
      mediaQuery.removeEventListener('change', handleWidth);
    };
  }, [widthScreen]);
  return { isMobile };
};
