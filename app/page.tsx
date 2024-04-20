import { Navbar, ServiceCards } from '@/widgets';
import BestDeals from '@/widgets/BestDeals';
import LocationCard from '@/widgets/LocationCard/LocationCard';
import React from 'react';

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Navbar />
      <LocationCard />
      <ServiceCards />
      <BestDeals />
    </main>
  );
}
