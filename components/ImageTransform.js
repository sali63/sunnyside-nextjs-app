import React from 'react';

export default function ImageTransform() {
  return (
    <article className='lg:w-1/2 '>
      <picture>
        <source
          media='(min-width : 1024px)'
          srcSet='/images/desktop/image-transform.jpg'
        />
        <img
          className='min-w-full'
          src='/images/mobile/image-transform.jpg'
          alt='egg'
        />
      </picture>
    </article>
  );
}
