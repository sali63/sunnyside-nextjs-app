import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import CopyTemplate from './CopyTemplate';
import ClientsContainer from './ClientsContainer';
import Gallery from './Gallery';
import ImageTransform from './ImageTransform';
import ImageStandout from './ImageStandout';

export default function PageContent() {
  return (
    <>
      <ServiceTemplate
        title='transform your brand'
        text='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
        btnText='learn more'
        highlight='primary-yellow'
        reverse
      >
        <ImageTransform />
      </ServiceTemplate>

      <ServiceTemplate
        title='stand out to the right audience'
        text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. '
        btnText='learn more'
        highlight='primary-soft-red'
      >
        <ImageStandout />
      </ServiceTemplate>
      <div className='lg:flex '>
        <CopyTemplate
          title='graphic design'
          text='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
          img='image-graphic-design'
          colorClass='text-primary-dark-desaturated-cyan'
        />
        <CopyTemplate
          title='photography'
          text='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
          img='image-photography'
          colorClass='text-primary-dark-blue'
        />
      </div>
      <ClientsContainer />
      <Gallery />
    </>
  );
}
