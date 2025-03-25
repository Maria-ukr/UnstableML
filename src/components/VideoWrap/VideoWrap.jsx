import React, { useCallback, useEffect, useRef } from 'react';
import { useIsVisible } from '../../hooks/use-is-visible';

export default function VideoWrap(props) {
  const { video, classes } = props;
  const videoRef = useRef(null);
  const { isVisible, targetRef } = useIsVisible({
    root: null,
    rootMargin: '200px',
    threshold: 0.1,
  }, false);

  const startVideoOnMouseMove = useCallback(async () => {
    try {
      videoRef.current.play();
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  const stopVideoOnMove = useCallback(() => {
    try {
      videoRef.current.pause();
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      startVideoOnMouseMove();
    } else {
      stopVideoOnMove();
    }
  }, [isVisible, startVideoOnMouseMove, stopVideoOnMove]);

  return (
    <div className={classes} ref={targetRef}>
      <video
        autoPlay={false}
        muted
        loop
        playsInline
        className='h-full w-full rounded-[8px] object-cover object-center'
        ref={videoRef}
        preload="none"
      >
        <source src={video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
