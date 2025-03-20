import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import VideoWrap from '../VideoWrap/VideoWrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import './SliderWrap.sass';

export default function SliderWrap(props) {
  const { slides, children } = props;

  return (
    <>
      {children}
      <Swiper
        className='wrap__slider'
        slidesPerView={1.2}
        loop={true}
        spaceBetween={'12px'}
        scrollbar={{
          draggable: true,
          hide: true,
        }}
        modules={[Scrollbar]}
        breakpoints={{
          540: {
            slidesPerView: 1.3,
          },
        }}
      >
        {slides.map((videoSrc, index) => (
          <SwiperSlide key={index} className='wrap__slide'>
            <VideoWrap
              video={videoSrc}
              classes='relative flex items-center justify-center'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
