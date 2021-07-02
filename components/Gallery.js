import React from 'react';

export default function Gallery() {
  return (
    <section className='flex flex-wrap lg:flex-nowrap'>
      <img
        className='max-w-1/2 flex-grow lg:max-w-1/4'
        src='/images/mobile/image-gallery-milkbottles.jpg'
        alt='milk bottles'
      />
      <img
        className='max-w-1/2 flex-grow lg:max-w-1/4'
        src='/images/mobile/image-gallery-orange.jpg'
        alt='orange'
      />
      <img
        className='max-w-1/2 flex-grow lg:max-w-1/4'
        src='/images/mobile/image-gallery-cone.jpg'
        alt='cone'
      />
      <img
        className='max-w-1/2 flex-grow lg:max-w-1/4'
        src='/images/mobile/image-gallery-sugar-cubes.jpg'
        alt='sugar cubes'
      />
    </section>
  );
}
