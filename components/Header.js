import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

export default function Header() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <section className='text-primary-white relative bg-mobile-hero xs:bg-desktop-hero bg-cover pb-28 xs:pb-36 bg-no-repeat bg-center-bottom-75 '>
      <div className='relative px-6 pt-5 lg:flex lg:justify-between'>
        <h3 className='font-para lowercase text-xl font-900'>sunnyside</h3>

        <DesktopMenu />
        <button
          className='absolute right-6 top-7 lg:hidden'
          onClick={() => setIsMenu(!isMenu)}
        >
          <img src='/images/icon-hamburger.svg' alt='menu' />
        </button>
      </div>

      {isMenu && <MobileMenu />}

      <div className='pt-20'>
        <h1 className='font-heading font-900 uppercase text-4xl text-center tracking-wide'>
          we are creatives
        </h1>
        <img
          src='/images/icon-arrow-down.svg'
          alt='arrow down'
          className='my-0 mx-auto pt-14'
        />
      </div>
    </section>
  );
}
