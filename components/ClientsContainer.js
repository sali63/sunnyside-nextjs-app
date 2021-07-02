import React from 'react';
import ClientCard from './ClientCard';
import clientData from '../data.json';

export default function ClientsContainer() {
  return (
    <section className='px-8 py-12'>
      <h4 className='text-1xl font-heading text-center uppercase text-grayish-blue tracking-widest'>
        client testimonials
      </h4>
      <div className='lg:flex lg:flex-row lg:justify-between'>
        {clientData.map((client, index) => {
          return <ClientCard key={client.name + index} {...client} />;
        })}
      </div>
    </section>
  );
}
