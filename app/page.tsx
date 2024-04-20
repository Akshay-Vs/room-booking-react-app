import { ServiceCard } from '@/shared/components';
import { Navbar } from '@/widgets';
import LocationCard from '@/widgets/LocationCard/LocationCard';
import React from 'react';

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Navbar />
      <LocationCard />

      <div className="flex flex-col md:flex-row mx-5 sm:mx-[7.3%] gap-8">
        <ServiceCard
          title="Share Your Room"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <ServiceCard
          title="Rent a Room"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <ServiceCard
          title="Your Profile"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>
    </main>
  );
}
