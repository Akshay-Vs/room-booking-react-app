import React from 'react';
import './LayoutImage.scss';
import Image, { StaticImageData } from 'next/image';
import { LogoLarge } from '@/shared/components';
import { IChildren } from '@/shared/interfaces';
import Link from 'next/link';

interface ILayoutImageProps extends IChildren {
  image: string | StaticImageData;
}

const LayoutImageV3 = ({ children, image }: ILayoutImageProps) => {
  return (
    <div className="layout-image--v3 h-full w-full mt-5">
      <Image
        src={image}
        alt="Login Image"
        className="layout-image--v3__image-v3"
        height={1080}
        width={1080}
      />
      <div className="h-full flex flex-col w-full ">
        <div className="flex flex-col justify-start items-start h-full w-full pb-14">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutImageV3;
