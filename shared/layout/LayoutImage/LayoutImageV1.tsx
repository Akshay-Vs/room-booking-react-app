import React from 'react';
import './LayoutImage.scss';
import Image, { StaticImageData } from 'next/image';
import { LogoLarge } from '@/shared/components';
import { IChildren } from '@/shared/interfaces';
import Link from 'next/link';

interface ILayoutImageProps extends IChildren {
  image: string | StaticImageData;
}

const LayoutImageV1 = ({ children, image }: ILayoutImageProps) => {
  return (
    <div className="layout-image h-full w-full">
      <div className="h-full flex flex-col w-full ">
        <Link href="/">
          <LogoLarge />
        </Link>
        <div className="flex flex-col justify-start items-start h-full w-full pb-14 pt-0">
          {children}
        </div>
      </div>
      <Image src={image} alt="Login Image" className="layout-image__image" />
    </div>
  );
};

export default LayoutImageV1;
