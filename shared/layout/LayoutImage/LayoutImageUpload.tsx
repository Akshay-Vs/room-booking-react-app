'use client';
import React, { useState } from 'react';
import './LayoutImage.scss';
import { ImageUploaderFull } from '@/shared/components';
import { IChildren } from '@/shared/interfaces';
import Image from '@/assets/images/upload-image.png';

const LayoutImageUpload = ({ children }: IChildren) => {
  const [image, setImage] = useState(Image);
  return (
    <div className="layout-image--v3  h-full w-full mt-5">
      <ImageUploaderFull
        image={image}
        setImage={setImage}
        className="layout-image--v3__image-v3"
      />
      <div className="h-full flex flex-col w-full ">
        <div className="flex flex-col justify-start items-start w-full pb-14 pl-5 overflow-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutImageUpload;
