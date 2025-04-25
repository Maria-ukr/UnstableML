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
    
    if (slider) {
      const videos = gsap.utils.toArray('.slide');
      const pinWrapHeight = slider.offsetHeight;
      const verticalScrollLength = pinWrapHeight - window.innerHeight;

      // Create the vertical scroll animation
      gsap.to(slider, {
        y: -verticalScrollLength,
        // ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${pinWrapHeight}`,
          pin: true,
          scrub: 1,
          // markers: true,
          invalidateOnRefresh: true,
        }
      });

      // Add individual video animations
      videos.forEach((video) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: video,
            start: "top center",
            end: "bottom 30%",
            scrub: 1,
            // markers: true
          }
        });

        tl.fromTo(video,
          {
            scale: 0.7,
          },
          {
            scale: 1.7,
            opacity: 1,
            duration: 1
          }
        ).to(video,
          {
            scale: 0.7,
            duration: 1
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className='third pt-12 pb-20 h-screen'>
      <div className='container overflow-hidden'>
        <div ref={sliderRef} className='third-col w-full'>
          <VideoWrap
            video={`${baseUrl}videos/enhance/enhance1.mov`}
            classes='slide w-[447px] h-[257px]'
          />
          <VideoWrap
            video={`${baseUrl}videos/enhance/enhance2.mov`}
            classes='slide w-[447px] h-[257px]'
          />
          <VideoWrap
            video={`${baseUrl}videos/enhance/enhance3.mov`}
            classes='slide w-[447px] h-[257px]'
          />
          <VideoWrap
            video={`${baseUrl}videos/enhance/enhance4.mov`}
            classes='slide w-[447px] h-[257px]'
          />
        </div>
      </div>
    </section>
  );
}
