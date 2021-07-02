import React from 'react';

export default function Footer() {
  return (
    <section className='bg-primary-cyan pt-12 pb-10 px-6'>
      <h2 className='font-para font-black text-3xl text-center text-primary-dark-desaturated-cyan'>
        sunnyside
      </h2>

      <ul className='list-none max-w-screen-mobile-lg mx-auto pt-10 capitalize flex flex-wrap justify-evenly font-para text-primary-dark-moderate-cyan'>
        <li>
          <a href='#'>about</a>
        </li>
        <li>
          <a href='#'>services</a>
        </li>
        <li>
          <a href='#'>projects</a>
        </li>
      </ul>

      <ul className='flex flex-wrap px-24 max-w-screen-mobile-lg mx-auto mobile-lg:pt-20 pt-6 justify-between'>
        <li>
          <a href='#'>
            <img src='/images/icon-facebook.svg' alt='facebook' />
          </a>
        </li>
        <li>
          <a href='#'>
            <img src='/images/icon-instagram.svg' alt='instagram' />
          </a>
        </li>
        <li>
          <a href='#'>
            <img src='/images/icon-twitter.svg' alt='twitter' />
          </a>
        </li>
        <li>
          <a href='#'>
            <img src='/images/icon-pinterest.svg' alt='pinterest' />
          </a>
        </li>
      </ul>
    </section>
  );
}
