import gsap, { Elastic } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Logo from '../Logo/Logo';
import './Header.sass';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  useGSAP(() => {
    const headerHide = gsap
      .from('.header', {
        yPercent: -100,
        duration: 0.4,
      })
      .progress(1);
    ScrollTrigger.create({
      start: 'top top',
      ease: Elastic.inOut,
      onUpdate: (self) => {
        self.direction === -1 ? headerHide.play() : headerHide.reverse();
      },
    });
  });

  return (
    <header className='container inset-0 bottom-auto z-[55] fixed w-full header'>
      <nav className='flex justify-between md:justify-between items-center gap-x-8 md:gap-x-16 py-6'>
        <Logo size='full' />
        <p className='header__version font-bold ml-auto mr-auto'>
          V.4.26
        </p>
        <div className='header__ai relative ml-auto mr-8 md:mr-[4.5rem]'>
          <p className='header__ai-text rounded-full flex justify-center items-center'>AI</p>
        </div>
        <a
          href='#'
          className='header__btn flex justify-center items-center font-sans font-bold px-8 py-3.5 rounded-[62px]'
        >
          Try Now
        </a>
      </nav>
    </header>
  );
}
