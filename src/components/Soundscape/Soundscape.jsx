import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { matchMediaScreen } from '../../hooks/match-media';
import VideoWrap from '../VideoWrap/VideoWrap';
import SliderWrap from '../SliderWrap/SliderWrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import './Soundscape.sass';

const baseUrl = import.meta.env.BASE_URL;

export default function Soundscape() {
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
            trigger: '.soundscape',
            start: 'top bottom',
            end: 'bottom 90%',
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
            duration: 0.2,
          },
          0
        );
    }
    if (contentSlider) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.soundscape',
            start: 'top bottom',
            end: 'bottom 90%',
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
        className='gallery__caption soundscape w-[100%]'
        style={{
          bottom: `${isMobile ? '0' : '10%'}`
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className='h-auto clipped-video clip'
          style={{ '--clip-path': 'url(#soundscape-overlay)' }}
        >
          <source src={`${baseUrl}videos/water.mp4`} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <svg width='100%'>
          <clipPath id='soundscape-overlay' width='100%' height='100%'>
            <text id='title' x='0' y='0' width='100%' dy='2rem'>
              Soundscape
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
      <div className='gallery__grid-content flex justify-center gap-2'>
        <VideoWrap
          video={`${baseUrl}videos/soundscape/vid1.mp4`}
          classes='w-[383px] h-[240px]'
        />
        <div ref={ref} className='gallery__grid-text h-full px-10'>
          <h4 className='font-sans font-medium text-3xl'>
            Create videos packed
          </h4>
          <h4 className='font-sans font-medium text-3xl'>
            with &nbsp;
            <span className='font-serif font-semibold text-3xl'>
              synchronized audio
            </span>
          </h4>
          <p className='gallery__content-text soundscape-text'>
            Effortlessly create stunning videos with perfectly synchronized
            audio. Our cutting-edge audio diffusion model ensures high quality
            sound with every generation, regardless of the video model you
            choose.
          </p>
        </div>
      </div>
      <div className='flex gap-2'>
        <VideoWrap
          video={`${baseUrl}videos/soundscape/vid2.mp4`}
          classes='w-[50%] h-[280px]'
        />
        <VideoWrap
          video={`${baseUrl}videos/soundscape/vid3.mp4`}
          classes='w-[50%] h-[280px]'
        />
      </div>
      <div className='flex justify-center gap-2'>
        <VideoWrap
          video={`${baseUrl}videos/soundscape/vid4.mp4`}
          classes='w-[421px] h-[211px] ml-4'
        />
        <VideoWrap
          video={`${baseUrl}videos/soundscape/vid5.mp4`}
          classes='w-[382px] h-[252px]'
        />
      </div>
    </div>
  </>
));

const WithSlider = React.forwardRef((props, ref) => (
  <SliderWrap
    slides={[
      `${baseUrl}videos/soundscape/vid1.mp4`,
      `${baseUrl}videos/soundscape/vid2.mp4`,
      `${baseUrl}videos/soundscape/vid3.mp4`,
      `${baseUrl}videos/soundscape/vid4.mp4`,
      `${baseUrl}videos/soundscape/vid5.mp4`,
    ]}
  >
    <div ref={ref} className='gallery__content'>
      <h4 className='font-sans font-medium text-5xl'>
        Create videos packed with &nbsp;
        <span className='font-serif font-semibold text-5xl'>
          synchronized audio
        </span>
      </h4>
      <p className='gallery__content-text'>
        Effortlessly create stunning videos with perfectly synchronized audio.
        Our cutting-edge audio diffusion model ensures high quality sound with
        every generation, regardless of the video model you choose.
      </p>
    </div>
  </SliderWrap>
));
