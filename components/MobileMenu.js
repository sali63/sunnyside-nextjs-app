import React from 'react';

export default function MobileMenu() {
  return (
    <div className='bg-primary-white absolute w-calc-3rem min-h-1/2  left-6 mt-10 p-8'>
      <div className='absolute menu-pointer-styles'></div>
      <ul className='capitalize text-dark-grayish-blue font-para  list-none pb-2 text-center text-sm'>
        <li className='max-w-1/2 mx-auto'>
          <a className='block' href='#'>
            about
          </a>
        </li>
        <li className='max-w-1/2 mx-auto pt-6'>
          <a className='block' href='#'>
            services
          </a>
        </li>
        <li className='max-w-1/2 mx-auto pt-6 pb-6'>
          <a className='block' href='#'>
            projects
          </a>
        </li>
        <li className='max-w-1/2 mx-auto font-heading pt-3 pb-3 text-black bg-primary-yellow rounded-full uppercase '>
          <a className='block' href='#'>
            contact
          </a>
        </li>
      </ul>
    </div>
  );
}
