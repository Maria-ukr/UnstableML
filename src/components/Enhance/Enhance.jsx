import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { matchMediaScreen } from '../../hooks/match-media';
import VideoWrap from '../VideoWrap/VideoWrap';
import SliderWrap from '../SliderWrap/SliderWrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

const baseUrl = import.meta.env.BASE_URL;

export default function Enhance() {
  const { isMobile } = matchMediaScreen({ widthScreen: 768 });
  const contentRef = useRef(null);
  const contentSliderRef = useRef(null);

  useGSAP(() => {
    const contentContainer = contentRef.current;
    const contentSlider = contentSliderRef.current;
    if (contentContainer) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.enhance',
            start: 'top bottom',
            end: 'bottom 80%',
            scrub: 1,
          },
          ease: 'power2.inOut',
        })
        .fromTo(
          contentContainer,
          { opacity: 0, y: -200 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          '+=0.4'
        );
    }
    if (contentSlider) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.enhance',
            start: 'top bottom',
            end: 'bottom 80%',
            scrub: 1,
          },
        })
        .fromTo(
          contentSlider,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.2,
          },
          0
        );
    }
  });

  return (
    <section className='container gallery'>
      <div
        className='gallery__caption enhance w-[70%]'
        style={{
          bottom: `${isMobile ? '0' : '15%'}`
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className='h-auto clipped-video clip'
          style={{ '--clip-path': 'url(#enhance-overlay)' }}
        >
          <source src={`${baseUrl}videos/water.mp4`} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <svg width='100%'>
          <clipPath id='enhance-overlay' width='100%' height='100%'>
            <text id='title' x='0' y='0' width='100%' dy='2rem'>
              Enhance
            </text>
          </clipPath>
        </svg>
      </div>
      <div className='gallery-wrap relative'>
        {isMobile ? (
          <WithSlider ref={contentSliderRef} />
        ) : (
          <WithGrids ref={contentRef} />
        )}
      </div>
    </section>
  );
}

const WithGrids = React.forwardRef((props, ref) => (
  <>
    <div className='flex flex-wrap items-start justify-center gap-2 gallery__grid'>
      <div className='flex justify-center gap-2'>
        <VideoWrap
          video={`${baseUrl}videos/enhance/enhance1.mov`}
          classes='w-[343px] h-[193px]'
        />
        <VideoWrap
          video={`${baseUrl}videos/enhance/enhance2.mov`}
          classes='w-[226px] h-[194px]'
        />
      </div>
      <div className='flex gap-2'>
        <VideoWrap
          video={`${baseUrl}videos/enhance/enhance3.mov`}
          classes='w-[50%] h-[280px]'
        />
        <VideoWrap
          video={`${baseUrl}videos/enhance/enhance4.mov`}
          classes='w-[50%] h-[280px]'
        />
      </div>

      <div className='gallery__grid-content flex justify-center gap-2'>
        <div ref={ref} className='gallery__grid-text h-full px-10'>
          <h4 className='font-sans font-medium text-3xl'>
            Transform
            <span className='font-serif font-semibold text-3xl'>
              Your Videos
            </span>
          </h4>
          <h4 className='font-sans font-medium text-3xl'>Like Never Before</h4>
          <p className='gallery__content-text'>
            Bring your own videos and completely transform them. Whether it's
            changing a background or replacing objects, our advanced video
            generation model, Dream, lets you create stunning transformations
            with ease.
          </p>
        </div>
        <VideoWrap
          video={`${baseUrl}videos/enhance/enhance5.mov`}
          classes='w-[461px] h-[253px]'
        />
      </div>
    </div>
  </>
));

const WithSlider = React.forwardRef((props, ref) => (
  <SliderWrap
    slides={[
      `${baseUrl}videos/enhance/enhance1.mov`,
      `${baseUrl}videos/enhance/enhance2.mov`,
      `${baseUrl}videos/enhance/enhance3.mov`,
      `${baseUrl}videos/enhance/enhance4.mov`,
      `${baseUrl}videos/enhance/enhance5.mov`,
    ]}
  >
    <div ref={ref} className='gallery__content'>
      <h4 className='font-sans font-medium text-5xl'>
        Transform
        <span className='font-serif font-semibold text-5xl'>Your Videos</span>
      </h4>
      <h4 className='font-sans font-medium text-5xl'>Like Never Before</h4>
      <p className='gallery__content-text'>
        Bring your own videos and completely transform them. Whether it's
        changing a background or replacing objects, our advanced video
        generation model, Dream, lets you create stunning transformations with
        ease.
      </p>
    </div>
  </SliderWrap>
));
