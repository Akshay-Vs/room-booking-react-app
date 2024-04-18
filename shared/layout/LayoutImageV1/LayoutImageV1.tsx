import React, { Children } from 'react';
import './LayoutImageV1.scss';
import CoverImage from '@/assets/images/bed-room-1.png';
import Image, { StaticImageData } from 'next/image';
import { LogoLarge } from '@/shared/components';
import { IChildren } from '@/shared/interfaces';

interface ILayoutImageProps extends IChildren {
  image: string | StaticImageData;
}

const LayoutImageV1 = ({ children, image }: ILayoutImageProps) => {
  return (
    <div className="layout-image-v1 h-full w-full">
      <div className="h-full flex flex-col">
        <LogoLarge />
        <div className="flex flex-col justify-center items-center h-full pb-14 pt-0">
          {children}
        </div>
      </div>
      <Image src={image} alt="Login Image" className="layout-image-v1__image" />
    </div>
  );
};

export default LayoutImageV1;
