import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import VideoWrap from '../VideoWrap/VideoWrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import './BoxGallery.sass';

import FirstVideo from './../../assets/videos/generation/hortizontal_1.mp4';
import SecondVideo from './../../assets/videos/generation/horizontal_2.mp4';
import ThirdVideo from './../../assets/videos/generation/horizontal_3.mp4';
import ForthVideo from './../../assets/videos/generation/horizontal_4.mp4';
import FifthVideo from './../../assets/videos/generation/square_5.mp4';
import SixVideo from './../../assets/videos/generation/horizontal_6.mp4';
import videoWater from './../../assets/videos/water.mp4';

export default function BoxGallery() {
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
    <section className='container gallery'>

      <div className='gallery__caption'>
        <video autoPlay muted loop playsInline className='h-auto clipped-video'>
          <source src={videoWater} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <svg
          width='100%'
          // height='100%'
        >
          <clipPath id='text-overlay' width='100%' height='100%'>
            <text
              id="title"
              x='0'
              y='0'
              width='100%'
              // height='100%'
              dy="0rem"
            >
              Generation
            </text>
          </clipPath>
        </svg>
      </div>
      <div className='gallery-wrap relative'>
        {widthScreen > 768 ? WithGrids : WithSlider}
      </div>
    </section>
  );
}

const WithGrids = (
  <>
    <div className='flex flex-wrap items-start justify-center gap-2 gallery__grid'>
      <div className='flex justify-center gap-2'>
        <VideoWrap video={FirstVideo} classes='w-[30%] ml-10' />
        <VideoWrap video={SecondVideo} classes='w-[30%]' />
      </div>
      <div className='flex gap-2'>
        <VideoWrap video={ThirdVideo} classes='w-[50%]' />
        <VideoWrap video={ForthVideo} classes='w-[50%]' />
      </div>

      <div className='gallery__grid-content flex justify-center gap-2'>
        <div className='gallery__grid-text h-full px-10'>
          <h4 className='font-sans font-medium text-3xl'>Transform</h4>
          <h4 className='font-sans font-medium text-3xl'>
            Your
            <span className='font-serif font-semibold text-3xl'>Media</span>
          </h4>
          <p className='gallery__content-text'>
            Turn any media, whether it be text or images, into stunning videos.
            From storytelling to content creation, the possibilities are
            endless.
          </p>
        </div>
        <VideoWrap video={SixVideo} classes='w-[37%] h-auto' />
      </div>
    </div>
  </>
);

const WithSlider = (
  <>
    <div className='gallery__content'>
      <h4 className='font-sans font-medium text-5xl'>Transform</h4>
      <h4 className='font-sans font-medium text-5xl'>
        Your <span className='font-serif font-semibold text-5xl'>Media</span>
      </h4>
      <p className='gallery__content-text'>
        Turn any media, whether it be text or images, into stunning videos. From
        storytelling to content creation, the possibilities are endless.
      </p>
    </div>
    <Swiper
      className='gallery__slider'
      slidesPerView={1.2}
      loop={true}
      spaceBetween={12}
      scrollbar={{
        draggable: true,
        hide: true,
      }}
      modules={[Scrollbar]}
      breakpoints={{
        540: {
          slidesPerView: 1.3,
          spaceBetween: 22,
        },
      }}
    >
      {[
        FirstVideo,
        SecondVideo,
        ThirdVideo,
        ForthVideo,
        FifthVideo,
        SixVideo,
      ].map((videoSrc, index) => (
        <SwiperSlide key={index} className='gallery__slide'>
          <VideoWrap
            video={videoSrc}
            classes='relative flex items-center justify-center'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);
