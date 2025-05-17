import { ReactLenis } from 'lenis/react'

function SmoothScrolling({ children }) {
  const lenisOptions = {
    lerp: 2,         // Controls how smooth the scrolling is
    duration: 2.5,     // Slows down or speeds up the scrolling
    smoothTouch: true, // Disable smooth scroll on touch devices
    smooth: true,      // Smooth scroll for desktop (obviously)
    easing: (t) => 1 - Math.pow(1 - t, 5),
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;