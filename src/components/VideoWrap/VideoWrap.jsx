import React, { Suspense, useCallback, useEffect, useRef } from 'react';
import { useIsVisible } from '../../hooks/use-is-visible';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import PosterImage from './../../assets/images/hold-up.jpg';

export default function VideoWrap(props) {
  const { video, classes } = props;
  const videoRef = useRef(null);
  const { isVisible, targetRef } = useIsVisible(
    {
      root: null,
      rootMargin: '200px',
      threshold: 0.1,
    },
    false
  );

  useGSAP(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 0, y: 90 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: videoRef.current,
            start: 'top 85%',
            end: 'bottom 20%',
          },
        }
      );
    }
  });

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
    <div className={classes} ref={targetRef} data-animated-video>
      {/* <Suspense fallback={<p>Loading ...</p>}> */}
        <video
          autoPlay={false}
          muted
          loop
          playsInline
          className='h-full w-full rounded-[8px] object-cover object-center'
          ref={videoRef}
          preload='none'
          poster={PosterImage}
        >
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      {/* </Suspense> */}
    </div>
  );
}
