
import React from 'react';
import VideoWrap from '../VideoWrap/VideoWrap';
import './Portal.sass';
import { Swiper, SwiperSlide } from 'swiper/react';

import FirstVideo from './../../assets/videos/enhance/enhance1.mov';
import SecondVideo from './../../assets/videos/enhance/enhance2.mov';
import ThirdVideo from './../../assets/videos/enhance/enhance3.mov';
import { Autoplay, FreeMode, Scrollbar } from 'swiper/modules';
import ForthVideo from './../../assets/videos/enhance/enhance4.mov';
// import FifthVideo from './../../assets/videos/enhance/enhance5.mov';
// const videos = [FirstVideo, SecondVideo]
export default function Portal() {
  return (
    <section className='portal w-full'>
      <div className='portal-wrap'>
        <div className='portal-side portal-side__left '>
          <Swiper
            className=''
            slidesPerView={2}
            speed={10000}
            loop={true}
            spaceBetween={10}
            scrollbar={{
              draggable: true,
              hide: true,
            }}
            delay='0'
            autoplay={{
              delay: 0,
              freeMode: true,
            }}
            modules={[Autoplay, FreeMode, Scrollbar]}
          >
            <SwiperSlide>
              <VideoWrap video={FirstVideo} classes='w-[500px] h-[350px]' />
            </SwiperSlide>
            <SwiperSlide>
              <VideoWrap video={SecondVideo} classes='w-[500px] h-[350px]' />
            </SwiperSlide>
            <SwiperSlide>
              <VideoWrap
                video={ThirdVideo}
                classes='w-[500px] h-[350px]'
              />
            </SwiperSlide>
            <SwiperSlide>
              <VideoWrap
                video={ForthVideo}
                classes='w-[500px] h-[350px]'
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='portal-side portal-side__right'>
          <Swiper
            className=''
            slidesPerView={2}
            speed={10000}
            loop={true}
            spaceBetween={10}
            scrollbar={{
              draggable: true,
              hide: true,
            }}
            autoplay={{
              delay: '0',
              freeMode: true,
              reverseDirection: true,
            }}
            modules={[Autoplay, FreeMode, Scrollbar]}
          >
            <SwiperSlide>
              <VideoWrap
                video={FirstVideo}
                classes='w-[500px] h-[350px] slide'
              />
            </SwiperSlide>
            <SwiperSlide>
              <VideoWrap
                video={SecondVideo}
                classes='w-[500px] h-[350px] slide'
              />
            </SwiperSlide>
            <SwiperSlide>
              <VideoWrap
                video={ThirdVideo}
                classes='w-[500px] h-[350px] slide'
              />
            </SwiperSlide>
            <SwiperSlide>
              <VideoWrap
                video={ForthVideo}
                classes='w-[500px] h-[350px]'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
