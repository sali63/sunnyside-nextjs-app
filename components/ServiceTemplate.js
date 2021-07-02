import React from 'react';

export default function ServiceTemplate({
  title,
  text,
  btnText,
  highlight,
  children,
  reverse,
}) {
  const highlightColor = 'after:bg-' + highlight;

  return (
    <section className={`lg:flex ${reverse && 'flex-row-reverse'}`}>
      {children}
      <article className='p-6 text-center lg:text-left lg:w-1/2 lg:m-auto lg:px-10 lg:pt-6 xl:pt-12 xl:px-16'>
        <h2 className='text-3xl  font-heading text-dark-desaturated-blue font-900 pt-6'>
          {`${title.charAt(0).toUpperCase()}${title.slice(1)}`}
        </h2>
        <p className='font-para text-dark-grayish-blue py-6'>{text}</p>
        <div className='relative max-w-max mx-auto lg:mx-0 z-0'>
          <button
            className={`font-heading uppercase text-dark-desaturated-blue text-indigo font-700 pb-6 
          
          after:max-w-full 
          after:min-w-full 
          ${highlightColor} 
          after:h-2 
          after:max-h-2 
          after:block 
          after:absolute 
          after:rounded-full           
          after:-z-1 z-10 after:top-4 after:opacity-25`}
          >
            {btnText}
          </button>
        </div>
      </article>
    </section>
  );
}
