/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Image, { StaticImageData } from 'next/image';

interface IImageUploaderProps {
  setImage: any;
  image: string | StaticImageData;
}

const ImageUploader = ({ setImage, image }: IImageUploaderProps) => {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        setImage(imageDataUrl);
        localStorage.setItem('image', imageDataUrl);
      };
      reader.readAsDataURL(file);
    },
    [setImage]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.png', 'webp'],
    },
  });

  return (
    <div className="relative">
      <Image
        src={image}
        width={160}
        height={160}
        alt="profile image"
        className="mx-8 w-[160px] h-[160px] object-cover object-center rounded-full"
      />
      <div {...getRootProps()} className="absolute bottom-0 right-10">
        <input {...getInputProps()} />
        <FontAwesomeIcon
          icon={faCamera}
          size="8x"
          className="text-sm cursor-pointer bg-[#ff397e] text-white p-3 rounded-full"
        />
      </div>
    </div>
  );
};

export default ImageUploader;
