import React from 'react';
import { matchMediaScreen } from '../../hooks/match-media';
import VideoWrap from '../VideoWrap/VideoWrap';
import SliderWrap from '../SliderWrap/SliderWrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

const baseUrl = import.meta.env.BASE_URL;

export default function Motion() {
  const { isMobile } = matchMediaScreen({ widthScreen: 768 });

  return (
    <section className='container gallery'>
      <div className='gallery__caption motion'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='h-auto clipped-video clip'
          style={{ '--clip-path': 'url(#motion-overlay)' }}
        >
          <source src={`${baseUrl}videos/water.mp4`} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <svg width='100%'>
          <clipPath id='motion-overlay' width='100%' height='100%'>
            <text id='title' x='0' y='0' width='100%' dy='0rem'>
              Motion
            </text>
          </clipPath>
        </svg>
      </div>
      <div className='gallery-wrap relative'>
        {isMobile ? WithSlider : WithGrids}
      </div>
    </section>
  );
}

const WithGrids = (
  <>
    <div className='flex flex-wrap items-start justify-center gap-2 gallery__grid'>
      <div className='flex justify-center gap-2'>
        <VideoWrap
          video={`${baseUrl}videos/generation/horizontal_1.mp4`}
          classes='w-[30%] ml-10'
        />
        <VideoWrap
          video={`${baseUrl}videos/generation/horizontal_2.mp4`}
          classes='w-[30%]'
        />
      </div>
      <div className='flex gap-2'>
        <VideoWrap
          video={`${baseUrl}videos/generation/horizontal_3.mp4`}
          classes='w-[50%]'
        />
        <VideoWrap
          video={`${baseUrl}videos/generation/horizontal_4.mp4`}
          classes='w-[50%]'
        />
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
        <VideoWrap
          video={`${baseUrl}videos/generation/horizontal_6.mp4`}
          classes='w-[37%] h-auto'
        />
      </div>
    </div>
  </>
);

const WithSlider = (
  <SliderWrap
    slides={[
      `${baseUrl}videos/generation/horizontal_1.mp4`,
      `${baseUrl}videos/generation/horizontal_2.mp4`,
      `${baseUrl}videos/generation/horizontal_3.mp4`,
      `${baseUrl}videos/generation/horizontal_4.mp4`,
      `${baseUrl}videos/generation/horizontal_6.mp4`,
    ]}
  >
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
  </SliderWrap>
);
