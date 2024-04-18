import { LayoutImageV1 } from '@/shared/layout';
import React from 'react';
import FormData from './FormData';
import Image from '@/assets/images/bed-room-1.png';
import { Typography } from '@/shared/components';
import Link from 'next/link';

const LoginForm = () => {
  return (
    <LayoutImageV1 image={Image}>
      <div className="mt-10 flex justify-center items-start flex-col h-full w-full md:w-[70%]">
        <Typography className="m-3 mb-7 flex w-full">
          <Typography.Heading
            variant="h5"
            className="opacity-85 w-full text-start"
          >
            Login
          </Typography.Heading>
        </Typography>

        <FormData />

        <Typography className="mt-14">
          <Typography.Heading
            variant="h7"
            className="flex flex-col justify-center w-full px-5 sm:flex-row sm:items-center sm:justify-start"
          >
            Don&apos;t have an account?{' '}
            <Link
              href="signup"
              className="mx-1 underline-offset-2 underline text-start sm:text-center"
            >
              Sign up now
            </Link>
          </Typography.Heading>
        </Typography>
      </div>
    </LayoutImageV1>
  );
};

export default LoginForm;
