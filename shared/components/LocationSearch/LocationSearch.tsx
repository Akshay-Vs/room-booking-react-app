'use client';
import React, { useEffect, useState } from 'react';
import { useGeoLocation } from '@/shared/hooks/useGeoLocation';
import Typography from '../Typography/Typography';
import { getDealByCity } from '@/shared/services';
import { IProduct } from '@/shared/interfaces/IProduct';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faDollarSign,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const LocationSearch = () => {
  const { currentCity, isGeolocationEnabled } = useGeoLocation();
  const [data, setData] = useState<IProduct>();

  useEffect(() => {
    const getData = async () => {
      const data = await getDealByCity(currentCity);
      setData(data);
    };
    getData();
  }, []);

  return (
    <div className="w-full sm:w-[90%] h-full sm:mt-10 mt-2">
      {isGeolocationEnabled ? (
        <>
          <Typography>
            <Typography.Heading
              variant="h7"
              className="font-[500] opacity-80 mx-3"
            >
              Best Deal Near You, {currentCity}{' '}
              <FontAwesomeIcon
                icon={faChevronRight}
                size="sm"
                className="scale-90"
              />
            </Typography.Heading>
          </Typography>

          <Link
            href={`reserve/${data?.id}`}
            className="bg-slate-200 p-3 rounded-3xl mt-3 flex justify-start items-center"
          >
            <Image
              height={120}
              width={120}
              src={data?.image || ''}
              alt="image"
              className="rounded-3xl"
            />

            <Typography className="mx-3">
              <Typography.Heading variant="h7" className="scale-110 mx-3">
                {data?.name}, <span>{data?.city}</span>
              </Typography.Heading>

              <Typography.Heading variant="h7" className="mt-3">
                <span className="text-[#ff397e] font-bold text-xl">
                  <FontAwesomeIcon icon={faDollarSign} className="mx-1 " />
                  {data?.price}{' '}
                </span>
                / day
              </Typography.Heading>
            </Typography>
          </Link>
        </>
      ) : (
        <Typography className="bg-slate-200 p-3 rounded-3xl mt-3 flex justify-center items-center h-32">
          <Typography.Heading variant="h7">
            Location Service is not available
          </Typography.Heading>
        </Typography>
      )}
    </div>
  );
};

export default LocationSearch;
