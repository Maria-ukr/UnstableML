import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import BgImage from './../../assets/images/background.png';
import LogoImg from '../../assets/images/mob-logo.svg';

import './Preloader.sass';

export default function Preloader() {
  const [filled, setFilled] = useState(0);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    if (filled < 100 && isLoading) {
      gsap.set('.root', {overflow: 'hidden'})
      setTimeout(() => {
        setFilled((prev) => (prev += 1));
      }, 8);
    }
  }, [filled, loading]);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      gsap.set('.hero', {yPercent: 100})
      if (filled === 100) {
        tl.to('.preloader', {
          yPercent: -100,
          duration: 0.8,
          ease: 'power3.inOut',
        });
        tl.to(
          '.hero',
          {
            yPercent: 0,
            duration: 0.8,
            ease: 'power3.inOut',
          },
          '-=0.8'
        );
      }
    },
    { dependencies: [filled] }
  );

  return (
    <section
      style={{ backgroundImage: `url(${BgImage})` }}
      className='preloader fixed inset-0 z-[99999] flex flex-col justify-center p-24 h-screen'
    >
      <img src={LogoImg} className='h-fit preloader__logo' alt='logo' />
      <div className='preloader__bottom w-full flex mt-auto justify-between'>
        <p className='relative creation font-sans font-semibold self-end'>
          Creation of the Luniverse...
        </p>
        <div>
          <p className='font-sans text-9xl italic text-end mb-14'>{filled}</p>
          <p className='progress-bar'>
            <span style={{ width: `${filled}%` }}></span>
          </p>
        </div>
      </div>
    </section>
  );
}
