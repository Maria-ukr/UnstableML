import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

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
    <div className='container gallery relative'>
      <p className='gallery__caption'>Generation</p>
      <div className='gallery-wrap relative'>
        {widthScreen > 768 ? WithGrids : WithSlider}
      </div>
    </div>
  );
}

const WithGrids = (
  <>
    <div className='flex flex-wrap items-start justify-center gap-2 gallery__grid'>
      <div className='flex justify-center gap-2'>
        <div className='w-[30%] ml-10'>
          <video autoPlay muted loop playsInline className='h-full w-auto'>
            <source src={FirstVideo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='w-[30%]'>
          <video autoPlay muted loop playsInline className='h-full w-auto'>
            <source src={SecondVideo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='flex gap-2'>
        <div className='w-[50%] h-auto'>
          <video autoPlay muted loop playsInline className='h-full w-auto'>
            <source src={ThirdVideo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='w-[50%] h-auto'>
          <video autoPlay muted loop playsInline className='h-full w-auto'>
            <source src={ForthVideo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className='flex items-center justify-center gap-2'>
        <div className='grid__content w-[50%] h-full px-10'>
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
        <div className='w-[37%] h-auto'>
          <video autoPlay muted loop playsInline className='h-full w-auto'>
            <source src={SixVideo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
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
          <div className='relative flex items-center justify-center'>
            <video autoPlay muted loop playsInline className='h-full w-auto'>
              <source src={videoSrc} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);
