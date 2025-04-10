import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import VideoWrap from '../VideoWrap/VideoWrap';

import './ThirdSection.sass';

const baseUrl = import.meta.env.BASE_URL;
gsap.registerPlugin(ScrollTrigger);

export default function ThirdSection() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  useGSAP(() => {
    const section = sectionRef.current;
    const slider = sliderRef.current;
    let pinWrapHeight = slider.offsetHeight;
    let horizontalScrollLength = pinWrapHeight - window.innerHeight;
    if (slider) {
      const videos = gsap.utils.toArray('.slide');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: pinWrapHeight,
          pin: section,
          scrub: true,
          markers: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
          refreshPriority: -10,
        },
        ease: 'power1',
        y: horizontalScrollLength,
      });

      videos.forEach((v) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: v,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            markers: true,
          },
          ease: 'power1.out',
        });
        tl.to(v, {
          scale: 2,
        });
        tl.to(v, {
          scale: 1,
          yPercent: -100,
        });
      });
    }
  }, []);

  return (
    <>
      <section ref={sectionRef} className='third pt-12 pb-20 h-screen'>
        <div className='container overflow-hidden'>
          <div
            ref={sliderRef}
            className='third-col w-full'>
            <VideoWrap
              video={`${baseUrl}videos/enhance/enhance1.mov`}
              classes='slide w-[447px] [257px]'
            />
            <VideoWrap
              video={`${baseUrl}videos/enhance/enhance2.mov`}
              classes='slide w-[447px] [257px]'
            />
            <VideoWrap
              video={`${baseUrl}videos/enhance/enhance3.mov`}
              classes='slide w-[447px] [257px]'
            />
            <VideoWrap
              video={`${baseUrl}videos/enhance/enhance4.mov`}
              classes='slide w-[447px] [257px]'
            />
          </div>
        </div>
      </section>
    </>
  );
}
