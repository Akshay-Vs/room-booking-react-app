'use client';
import { useEffect, useState } from 'react';
import userImage from '@/assets/images/user-default.png';
import {
  Button,
  ImageUploader,
  TextAreaInput,
  TextInputPrimary,
  Typography,
} from '@/shared/components';
import { StaticImageData } from 'next/image';

interface ICurrentUserProps {
  style?: string;
}

const CurrentUser = ({ style }: ICurrentUserProps) => {
  const [user, setUser] = useState<{
    name: string | undefined;
    email: string | undefined;
    image?: string | StaticImageData;
  }>();
  const [bio, setBio] = useState<string>('');
  const [image, setImage] = useState<string | StaticImageData>(userImage);

  useEffect(() => {
    if (localStorage.getItem('isLogged') != 'true') location.href = '/login';
    const name = localStorage.getItem('fullName');
    const email = localStorage.getItem('email');
    const image = localStorage.getItem('image');

    setBio(localStorage.getItem('bio') || '');

    setUser({
      name: name || undefined,
      email: email || undefined,
    });

    setImage(image || userImage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`mx-5 sm:mx-[7%] ${style}`}>
      <div className="flex items-center">
        <ImageUploader image={image} setImage={setImage} />
        <div>
          <Typography>
            <Typography.Heading variant="h6" className="m-0 mt-2 mb-1">
              {user?.name !== undefined ? user.name : 'User Not Logged In'}
            </Typography.Heading>
            <Typography.Heading variant="h8">
              {user?.email !== undefined ? user.email : 'User Not Logged In'}
            </Typography.Heading>
          </Typography>
        </div>
      </div>

      <div className="w-[50%] mx-10 mt-8">
        <Typography.Heading variant="h6" className="m-0 mt-2 mb-3 mx-3">
          Describe Yourself
        </Typography.Heading>
        <TextAreaInput
          placeholder="Tell us about yourself"
          props={{ rows: 4 }}
          value={bio}
          onChange={(e) => {
            setBio(e.target.value);
            localStorage.setItem('bio', e.target.value);
          }}
        />
        <Button
          className="w-full mt-5"
          props={{
            onClick: () => {
              localStorage.clear();
              location.href = '/login';
            },
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default CurrentUser;
