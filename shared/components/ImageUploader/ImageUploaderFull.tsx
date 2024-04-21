/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image, { StaticImageData } from 'next/image';

interface IImageUploaderProps {
  setImage: any;
  image: string | StaticImageData;
  className?: string;
}

const ImageUploaderFull = ({
  setImage,
  image,
  className,
}: IImageUploaderProps) => {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        setImage(imageDataUrl);
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
    <div {...getRootProps()} className="h-full w-full">
      <input {...getInputProps()} />
      <Image
        src={image}
        width={1080}
        height={1080}
        alt="image"
        className={`h-[80vh] w-full object-cover object-center border-black border rounded-3xl`}
      />
    </div>
  );
};

export default ImageUploaderFull;
