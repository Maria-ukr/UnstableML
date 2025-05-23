import './HoldUp.sass';
import BgImage from './../../assets/images/hold-up.jpg';
import ButtonRect from '../ButtonRect/ButtonRect';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HoldUp() {
  const headingFirstRef = useRef(null);
  const headingSecondRef = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.hold-up',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
        },
        ease: 'power2.inOut',
      })
      .fromTo(
        headingFirstRef.current,
        { opacity: 0, x: -700 },
        {
          opacity: 1,
          x: 0,
          duration: 0.2,
        },
        '+=0.2'
      )
      .fromTo(
        headingSecondRef.current,
        { opacity: 0, x: 700 },
        {
          opacity: 1,
          x: 0,
          duration: 0.2,
        },
        '<'
      );
  });

  return (
    <>
      <section className='container pt-16 pb-24 relative z-40'>
        <div
          style={{ backgroundImage: `url(${BgImage})` }}
          className='hold-up rounded-2xl overflow-hidden h-[80vh] max-md:mx-7 z-40'
        >
          <div className='flex flex-col justify-center items-center h-full w-max mx-auto px-6'>
            <h2
              ref={headingFirstRef}
              className='font-sans flex items-center font-medium'
            >
              What’s the <span className='line ml-20 mt-7'></span>
            </h2>
            <h2
              ref={headingSecondRef}
              className='font-serif md:self-end mb-20 font-semibold'
            >
              Hold-up?
            </h2>
            <ButtonRect text='Try Dream' />
          </div>
        </div>
      </section>
    </>
  );
}
