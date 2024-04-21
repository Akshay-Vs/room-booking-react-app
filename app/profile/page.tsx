import { Navbar } from '@/widgets';
import CurrentUser from '@/widgets/CurrentUser/Currentuser';
import React from 'react';

const page = () => {
  return (
    <main>
      <Navbar />
      <CurrentUser />
    </main>
  );
};

export default page;
