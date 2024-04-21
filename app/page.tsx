import { Navbar, ServiceCards } from '@/widgets';
import BestDeals from '@/widgets/BestDeals';
import Footer from '@/widgets/Footer/Footer';
import LocationCard from '@/widgets/LocationCard/LocationCard';
import React from 'react';

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Navbar />
      <LocationCard />
      <ServiceCards />
      <BestDeals />
      <Footer />
    </main>
  );
}
