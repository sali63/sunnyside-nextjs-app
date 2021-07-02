import React from 'react';

export default function ClientCard({ img, desc, name, jobTitle }) {
  console.log(img);
  return (
    <article className='text-center py-6 first-of-type:pt-12 lg:first-of-type:pt-6'>
      <img className='rounded-full w-10 mx-auto' src={img} alt={name} />

      <p className='font-para text-dark-grayish-blue text-xs pt-6 px-6 mobile-lg:max-w-desktop-1024 mobile-lg:min-w-desktop-1024 mx-auto'>
        {desc}
      </p>

      <h5 className='font-heading  pt-6'>{name}</h5>

      <p className='text-grayish-blue   capitalize text-xs font-para '>
        {jobTitle}
      </p>
    </article>
  );
}
