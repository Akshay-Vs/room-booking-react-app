'use client';
import { useEffect, useState } from 'react';
import userImage from '@/assets/images/user-default.png';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

const UserProfile = () => {
  const [avatar, setAvatar] = useState<string | StaticImageData>('');

  useEffect(() => {
    const image = localStorage.getItem('image');
    setAvatar(image || userImage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Link href="/account" className="cursor-pointer">
      <Image
        src={avatar}
        alt="profile image"
        className="mx-8 w-[42px] h-[42px] object-cover object-center rounded-full"
      />
    </Link>
  );
};

export default UserProfile;
