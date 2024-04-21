import React from 'react';
import Image from 'next/image';
import Typography from '@/shared/components/Typography/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faHeart,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface IProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  city: string;
  country: string;
  isLiked: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  city,
  country,
  isLiked,
}: IProductCardProps) => {
  return (
    <Link
      href={`/reserve/${id}`}
      className="bg-gray-200 p-2 rounded-3xl w-full sm:w-[300px] flex flex-col items-center justify-center z-10 hover:shadow-md transition-all duration-300"
    >
      <div className="w-full h-full flex justify-center items-center relative">
        <Image
          src={image}
          alt="Image"
          height={200}
          width={280}
          className="rounded-3xl object-cover object-center h-[200px] w-full sm:w-[280px]"
        />

        {isLiked ? (
          <div className="absolute bg-[#00000088] h-8 w-8 rounded-full flex items-center justify-center top-3 right-3 z-20">
            <FontAwesomeIcon icon={faHeart} className="text-red-400 " />
          </div>
        ) : null}
      </div>
      <Typography className="px-3 flex flex-col justify-start w-full">
        <Typography.Heading
          variant="h6"
          className="mt-3 text-ellipsis overflow-hidden whitespace-nowrap"
        >
          {name}
        </Typography.Heading>

        <Typography.Heading variant="h7" className="mt-3 opacity-70">
          <FontAwesomeIcon icon={faLocationDot} className="mx-1 " /> {city},{' '}
          {country}
        </Typography.Heading>

        <Typography.Heading variant="h7" className="mt-3">
          <span className="text-[#ff397e] font-bold text-2xl">
            <FontAwesomeIcon icon={faDollarSign} className="mx-1 " />
            {price}{' '}
          </span>
          / day
        </Typography.Heading>
      </Typography>
    </Link>
  );
};

export default ProductCard;
