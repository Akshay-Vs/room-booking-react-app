import React from 'react';
import './LayoutImage.scss';
import Image, { StaticImageData } from 'next/image';
import { IChildren } from '@/shared/interfaces';

interface ILayoutImageProps extends IChildren {
  image: string | StaticImageData;
}

const LayoutImageV2 = ({ children, image }: ILayoutImageProps) => {
  return (
    <div className="layout-image--v2">
      <div className="min-h-full w-full flex flex-col justify-center items-center sm:items-start">
        {children}
      </div>
      <Image src={image} alt="Login Image" className="layout-image__image-v2" />
    </div>
  );
};

export default LayoutImageV2;
