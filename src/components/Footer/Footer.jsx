import React from 'react';
import Logo from '../Logo/Logo';
import './Footer.sass';

export default function Footer() {
  return (
    <footer className='container footer w-full font-medium'>
      <div className='flex justify-center md:justify-between py-10 flex-wrap md:flex-nowrap max-md:items-center max-md:gap-y-12'>
        <Logo classes='w-[3.8rem] max-md:mr-auto md:max-w-28 self-start' />
        <div className='footer__menu flex gap-44 max-md:mr-auto'>
          <ul className='footer__menu-list'>
            <li>
              <a href='#'>Pricing</a>
            </li>
            <li>
              <a href='#'>Caeers</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
          </ul>
          <ul className='footer__menu-list ml-auto'>
            <li>
              <a href='#'>Genie</a>
            </li>
            <li>
              <a href='#'>Capture</a>
            </li>
          </ul>
        </div>
        <div className='footer__socials grid grid-cols-1 md:grid-cols-2 max-md:w-full max-md:place-items-center'>
          <div className='footer__socials-line relative'></div>
          <ul className='footer__socials-list'>
            <li className='footer__socials-item'>
              <a href='#' className='flex'>
                <p className='mr-4 size-6 shrink-0 twitter'></p>
                .Twitter
              </a>
            </li>
            <li className='footer__socials-item'>
              <a href='#' className='flex'>
                <p className='mr-4 size-6 shrink-0 discord'></p>
                .Discord
              </a>
            </li>
            <li className='footer__socials-item'>
              <a href='#' className='flex'>
                <p className='mr-4 size-6 shrink-0 instagram'></p>
                .Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__rights max-md:w-full max-md:items-center'>
          <ul>
            <li>
              <a href='#'>Term of service</a>
            </li>
            <li>
              <a href='#'>Privacy policy</a>
            </li>
          </ul>
          <div>
            <p>© 2024 UnstableML.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
