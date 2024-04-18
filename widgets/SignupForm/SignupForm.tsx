import { Typography } from '@/shared/components';
import { LayoutImageV1 } from '@/shared/layout';
import Link from 'next/link';
import React from 'react';
import Image from '@/assets/images/bed-room-1.png';

const SignupForm = () => {
  return (
    <LayoutImageV1 image={Image}>
      <div className="mt-10 flex justify-center items-center flex-col h-full">
        <Typography className="m-3 mb-7 flex w-full">
          <Typography.Heading
            variant="h5"
            className="opacity-85 w-full text-start"
          >
            Login
          </Typography.Heading>
        </Typography>

        {}
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

export default SignupForm;