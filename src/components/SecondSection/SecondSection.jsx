import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ButtonRect from '../ButtonRect/ButtonRect';
import './SecondSection.sass';
import Cloud1 from './../../assets/images/сloud_1.png';
import Cloud2 from './../../assets/images/сloud_2.png';

export default function SecondSection() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.dreams',
          start: 'top bottom',
          end: 'bottom 70%',
          scrub: 1,
        },
      })
      .fromTo(
        '.cloud1',
        {
          left: -1000,
          opacity: 0,
        },
        {
          left: -600,
          opacity: 1,
          duration: 0.3,
        },
        '+=0'
      )
      .fromTo(
        '.cloud2',
        {
          right: -1000,
          opacity: 0,
        },
        {
          right: -600,
          opacity: 1,
          duration: 0.3,
        },
        '<'
      )
      .fromTo(
        '.dreams__caption',
        {
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.2,
          scrollTrigger: {
            trigger: '.dreams',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1,
          },
          ease: 'power2.inOut',
        },
        '<'
      )
      .fromTo(
        '.dreams__content',
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.2,
          scrollTrigger: {
            trigger: '.dreams',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1,
          },
          ease: 'power2.inOut',
        },
        '<'
      );
  });

  return (
    <>
      <section className='pt-86 pb-64 md:py-32 overflow-hidden'>
        <div className='dreams container relative'>
          <img
            src={Cloud1}
            alt='cloud1'
            className='cloud1 absolute -left-2/3 -bottom-1/6 -z-1'
          />
          <img
            src={Cloud2}
            alt='cloud2'
            className='cloud2 absolute -right-2/3 -top-1/6 -z-1'
          />
          <div className='dreams__caption flex flex-col justify-start items-start w-max max-sm:mb-8 md:mb-48'>
            <p className='sup-text italic font-sans font-semibold place-self-end text-xl'>
              AI Video Magic
            </p>
            <h3 className='font-sans font-medium'>Turn dreams</h3>
            <h3 className='font-sans font-medium flex items-center justify-between'>
              Into
              <span className='font-serif font-semibold'>&nbsp;reality</span>
              <span className='line ml-4 md:ml-10 mt-7'></span>
            </h3>
          </div>
          <div className='dreams__content flex flex-col justify-start items-start'>
            <h6 className='sup-text font-sans font-bold place-self-end text-xl mb-7 md:mb-10'>
              All your favorite &nbsp;
              <span className='font-serif font-bold italic'>
                AI-powered
              </span>{' '}
              &nbsp;video generation models in one place.
            </h6>
            <p className='font-sans font-bold mb-9 md:mb-12 max-sm:pr-0 md:pr-6 text-xl'>
              Explore our exclusive collection of cutting-edge models, each
              uniquely crafted to bring your vision to life and transform your
              text into breathtaking videos.
            </p>
            <ButtonRect text='Try now for free' classes='text-xl' />
          </div>
        </div>
      </section>
    </>
  );
}
