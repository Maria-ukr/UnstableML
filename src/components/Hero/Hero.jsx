// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
import HeroVideo from './../../assets/videos/hero.mp4';
import HeroTabletVideo from './../../assets/videos/hero_cycle_tablet.mp4';
import HeroMobileVideo from './../../assets/videos/hero_cycle_mob.mp4';

import './Hero.sass';
import Portal from '../Portal/Portal';

export default function Hero() {
  return (
    <>
      <section className='hero overflow-x-hidden h-screen w-full relative'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='w-full absolute inset-0 z-0 h-screen object-cover'
        >
          <source src={HeroMobileVideo} type='video/mp4' media="(max-width:400px)" />
          <source src={HeroTabletVideo} type='video/mp4' media="(max-width:769px)" />
          <source src={HeroVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='container relative pt-24'>
          <div className='hero__caption flex flex-col justify-start items-start w-max'>
            <p className='sup-text italic font-sans font-semibold place-self-center text-xl'>
              2025
            </p>
            <h1 className='font-sans font-medium flex items-center justify-between'>
              Home of <span className='line ml-8 md:ml-16 mt-7'></span>
            </h1>
            <h1 className='font-serif font-semibold place-self-end'>
              Dreamers
            </h1>
          </div>
        </div>
        <Portal />
        <div className='hero__circle absolute'></div>
      </section>
    </>
  );
}
