import React, { useEffect, useState } from 'react';
import VideoWrap from '../VideoWrap/VideoWrap';
import SliderWrap from '../SliderWrap/SliderWrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import './Soundscape.sass';

import FirstVideo from './../../assets/videos/soundscape/vid1.mp4';
import SecondVideo from './../../assets/videos/soundscape/vid2.mp4';
import ThirdVideo from './../../assets/videos/soundscape/vid3.mp4';
import ForthVideo from './../../assets/videos/soundscape/vid4.mp4';
import FifthVideo from './../../assets/videos/soundscape/vid5.mp4';
import videoWater from './../../assets/videos/water.mp4';

export default function Soundscape() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  useEffect(() => {
    const handleWidth = () => {
      setWidthScreen(window.innerWidth);
    };
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);

  return (
    <section className='container soundscape'>
      <div className='soundscape__caption'>
        <video autoPlay muted loop playsInline className='h-auto clipped-video'>
          <source src={videoWater} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <svg width='100%'>
          <clipPath id='soundscape-overlay' width='100%' height='100%'>
            <text id='title' x='0' y='0' width='100%' dy='0rem'>
              Soundscape
            </text>
          </clipPath>
        </svg>
      </div>
      <div className='soundscape-wrap relative'>
        {widthScreen > 768 ? WithGrids : WithSlider}
      </div>
    </section>
  );
}

const WithGrids = (
  <>
    <div className='flex flex-wrap items-start justify-center gap-2 soundscape__grid'>
      <div className='soundscape__grid-content flex justify-center gap-2'>
        <VideoWrap video={FirstVideo} classes='w-[383px] h-[240px]' />
        <div className='soundscape__grid-text h-full px-10'>
          <h4 className='font-sans font-medium text-3xl'>
            Create videos packed
          </h4>
          <h4 className='font-sans font-medium text-3xl'>
            with &nbsp;
            <span className='font-serif font-semibold text-3xl'>
              synchronized audio
            </span>
          </h4>
          <p className='soundscape__content-text'>
            Effortlessly create stunning videos with perfectly synchronized
            audio. Our cutting-edge audio diffusion model ensures high quality
            sound with every generation, regardless of the video model you
            choose.
          </p>
        </div>
      </div>
      <div className='flex gap-2'>
        <VideoWrap video={SecondVideo} classes='w-[50%] h-[280px]' />
        <VideoWrap video={ThirdVideo} classes='w-[50%] h-[280px]' />
      </div>
      <div className='flex justify-center gap-2'>
        <VideoWrap video={ForthVideo} classes='w-[421px] h-[211px] ml-4' />
        <VideoWrap video={FifthVideo} classes='w-[382px] h-[252px]' />
      </div>
    </div>
  </>
);

const WithSlider = (
  <SliderWrap
    slides={[FirstVideo, SecondVideo, ThirdVideo, ForthVideo, FifthVideo]}
  >
    <div className='soundscape__content'>
      <h4 className='font-sans font-medium text-5xl'>
        Create videos packed with &nbsp;
        <span className='font-serif font-semibold text-5xl'>
          synchronized audio
        </span>
      </h4>
      <p className='soundscape__content-text'>
        Effortlessly create stunning videos with perfectly synchronized audio.
        Our cutting-edge audio diffusion model ensures high quality sound with
        every generation, regardless of the video model you choose.
      </p>
    </div>
  </SliderWrap>
);
