import { Navbar, RentRoom } from '@/widgets';
import React from 'react';

type Params = {
  params: {
    id: string;
  };
};

const page = ({ params: { id } }: Params) => {
  return (
    <main>
      <Navbar />
      <RentRoom id={id} />
    </main>
  );
};

export default page;
