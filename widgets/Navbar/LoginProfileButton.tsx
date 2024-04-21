'use client';
import { Button } from '@/shared/components';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const LoginProfileButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged == 'true') setIsLoggedIn(true);
  }, []);
  return (
    <div>
      {isLoggedIn ? (
        <Link href="/profile">
          <div className="w-12 h-12 flex justify-center items-center bg-[#ff397e] rounded-full">
            <FontAwesomeIcon icon={faUser} size="xl" className="text-white" />
          </div>
        </Link>
      ) : (
        <Link href="/login">
          <Button className="scale-[80%]">Login</Button>
        </Link>
      )}
    </div>
  );
};

export default LoginProfileButton;
