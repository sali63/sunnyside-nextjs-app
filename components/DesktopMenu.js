import React from 'react';

export default function DesktopMenu() {
  return (
    <ul className='hidden w-1/2 lg:flex justify-between text-primary-white font-para text-sm items-center max-w-screen-mobile-lg'>
      <li>
        <a href='#'>About</a>
      </li>
      <li>
        <a href='#'>Services</a>
      </li>
      <li>
        <a href='#'>Projects</a>
      </li>
      <li className='bg-primary-white text-black font-heading py-2 px-3 rounded-full uppercase line text-xs'>
        <a href='#'>Contact</a>
      </li>
    </ul>
  );
}
