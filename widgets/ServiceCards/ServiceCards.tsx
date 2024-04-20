import { ServiceCard } from '@/shared/components';
import React from 'react';

const ServiceCards = () => {
  return (
    <div className="flex flex-col md:flex-row mx-5 sm:mx-[7%] gap-8">
      <ServiceCard
        title="Share Your Room"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        href="/share"
      />
      <ServiceCard
        title="Rent a Room"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        href="/rent"
      />
      <ServiceCard
        title="Your Profile"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        href="/profile"
      />
    </div>
  );
};

export default ServiceCards;
