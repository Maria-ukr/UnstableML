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
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${verticalScrollLength}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          pinReparent: true,
          anticipatePin: 1,
          markers: true,
        }
      });

      // Add individual video animations
      videos.forEach((video) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: video,
            start: "top center",
            end: () => `+=200`,
            scrub: 1,
            markers: true
          }
        });

        tl.fromTo(video,
          {
            scale: 1,
          },
          {
            scale: 1.78,
            zIndex: 99999,
          }
        )
        .to(video,
          {
            scale: 1,
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className='third pt-12 pb-20 h-screen'>
      <div className='container overflow-hidden'>
        <div ref={sliderRef} className='third-col w-full'>
          {Array(4).fill(null).map((_, index) => (
            <VideoWrap key={index}
              video={`${baseUrl}videos/categories/${index+1}.mp4`}
              classes='slide w-[447px] h-[257px]'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
