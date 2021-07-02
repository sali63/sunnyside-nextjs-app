import React from 'react';

export default function ImageStandout() {
  return (
    <article className='lg:w-1/2 '>
      <picture>
        <source
          media='(min-width : 1024px)'
          srcSet='/images/desktop/image-stand-out.jpg'
        />
        <img
          className='min-w-full'
          src='/images/mobile/image-stand-out.jpg'
          alt='standout'
        />
      </picture>
    </article>
  );
}
