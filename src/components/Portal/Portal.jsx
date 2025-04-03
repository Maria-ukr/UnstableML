import React from 'react';
import VideoWrap from '../VideoWrap/VideoWrap';
import './Portal.sass';

const baseUrl = import.meta.env.BASE_URL;

export default function Portal() {
  return (
    <section className='portal w-full'>
      <div className='portal-wrap'>
        <div className='portal-side portal-side__left'>
          <div className='portal-slider'>
            <div className='portal-slider__track'>
              {[...Array(2)].map((_, i) => (
                <>
                  <VideoWrap
                    video={`${baseUrl}videos/enhance/enhance1.mov`}
                    classes='w-[500px] h-[350px]'
                    key={`v1-${i}`}
                  />
                  <VideoWrap
                    video={`${baseUrl}videos/enhance/enhance2.mov`}
                    classes='w-[500px] h-[350px]'
                    key={`v2-${i}`}
                  />
                  <VideoWrap
                    video={`${baseUrl}videos/enhance/enhance3.mov`}
                    classes='w-[500px] h-[350px]'
                    key={`v3-${i}`}
                  />
                  <VideoWrap
                    video={`${baseUrl}videos/enhance/enhance4.mov`}
                    classes='w-[500px] h-[350px]'
                    key={`v4-${i}`}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
        <div className='portal-side portal-side__right'>
          <div className='portal-slider'>
            <div className='portal-slider__track right-track'>
              {[...Array(2)].map((_, i) => (
                <>
                  <VideoWrap
                    video={`${baseUrl}videos/enhance/enhance1.mov`}
                    classes='w-[500px] h-[350px]'
                    key={`v1-${i}`}
                  />
                  <VideoWrap
                    video={`${baseUrl}videos/enhance/enhance2.mov`}
                    classes='w-[500px] h-[350px]'
                    key={`v2-${i}`}
                  />
                  <VideoWrap
                    video={`${baseUrl}videos/enhance/enhance3.mov`}
                    classes='w-[500px] h-[350px]'
                    key={`v3-${i}`}
                  />
                  <VideoWrap
                    video={`${baseUrl}videos/enhance/enhance4.mov`}
                    classes='w-[500px] h-[350px]'
                    key={`v4-${i}`}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
