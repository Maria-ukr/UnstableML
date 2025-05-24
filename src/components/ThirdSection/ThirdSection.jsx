import { useRef } from 'react';
import gsap, { Elastic } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import VideoWrap from '../VideoWrap/VideoWrap';

import './ThirdSection.sass';
import { matchMediaScreen } from '../../hooks/match-media';

const baseUrl = import.meta.env.BASE_URL;
gsap.registerPlugin(ScrollTrigger);

export default function ThirdSection() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const categoriesRef = useRef(null);
  const { isMobile } = matchMediaScreen({ widthScreen: 850 });

  useGSAP(() => {
    const section = sectionRef.current;
    const slider = sliderRef.current;
    const categories = categoriesRef.current;
    if (slider && categories) {
      const videos = gsap.utils.toArray('.slide');
      const pinWrapHeight = slider.offsetHeight;
      const verticalScrollLength = pinWrapHeight - window.innerHeight;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${verticalScrollLength}`,
          scrub: 1,
          pin: true,
          smoothScrub: 0.1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          pinReparent: true,
        },
      });
      tl.fromTo(
        '.categories',
        {
          x: '100%',
        },
        {
          x: -categories.scrollWidth,
        },
        0
      ).to(
        slider,
        {
          y: -verticalScrollLength,
        },
        0
      );

      videos.forEach((video) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: video,
            start: 'top 70%',
            end: `bottom 30%`,
            scrub: 1,
            stagger: 0.5,
          },
        });
        tl.fromTo(
          video,
          {
            scale: 1,
          },
          {
            scale: isMobile ? 1.1 : 1.78,
            zIndex: 99999,
            ease: Elastic.inOut,
          }
        ).to(video, {
          scale: 1,
        });
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className='third pt-10 pb-6 max-md:py-4 h-screen'
    >
      <div className='container overflow-hidden relative'>
        <div ref={sliderRef} className='third-col w-full'>
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <VideoWrap
                key={index}
                video={`${baseUrl}videos/categories/${index + 1}.mp4`}
                classes='slide w-[447px] h-[257px]'
              />
            ))}
        </div>
      </div>
      <div ref={categoriesRef} className='categories h-full w-full m-auto '>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <p key={index} className='category font-medium'>{`Category ${
              index + 1
            }`}</p>
          ))}
      </div>
    </section>
  );
}
