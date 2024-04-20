import { Button, LogoIcon, Typography } from '@/shared/components';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-24 px-[64px]">
      <LogoIcon />
      <Typography className="hidden sm:flex justify-center items-center gap-10 w-[50%]">
        <Typography.Heading variant="h7" className="mt-0 cursor-pointer">
          Welcome
        </Typography.Heading>

        <Typography.Heading variant="h7" className="mt-0 cursor-pointer">
          Safety
        </Typography.Heading>

        <Typography.Heading variant="h7" className="mt-0 cursor-pointer">
          Adventure
        </Typography.Heading>

        <Typography.Heading variant="h7" className="mt-0 cursor-pointer">
          Community
        </Typography.Heading>
      </Typography>

      <Link href="/login">
        <Button className="scale-[80%]">Login</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
