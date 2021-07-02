import React from 'react';

// bg img
// title
// text
export default function CopyTemplate({
  title,
  text,
  img,

  colorClass,
}) {
  //   color = `text-${color}`;
  return (
    <section className={`${colorClass} text-center relative lg:w-1/2`}>
      <picture>
        <source
          media='(min-width: 1024px)'
          srcset={'/images/desktop/' + img + '.jpg'}
        />
        <img
          className='min-w-full'
          src={'/images/mobile/' + img + '.jpg'}
          alt={img}
        />
      </picture>
      <div className='px-4 absolute bottom-11  xs:bottom-16 sm:bottom-24 md:bottom-32 lg:bottom-11 xs:left-1/2 xs:-translate-x-1/2'>
        <h2
          className={
            ' capitalize font-heading font-black text-xl mobile-md:text-2xl mobile-lg:text-3xl xs:text-4xl  md:text-5xl lg:text-xl pb-4'
          }
        >
          {title}
        </h2>
        <p className='font-para text-base  mobile-md:text-lg  sm:text-xl md:text-2xl  xs:max-w-xs xs:min-w-xs sm:max-w-sm sm:min-w-sm md:max-w-md md:min-w-md lg:text-xs lg:max-w-desktop-1024 lg:min-w-desktop-1024'>
          {text}
        </p>
      </div>
    </section>
  );
}
