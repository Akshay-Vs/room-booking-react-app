import { LayoutImageV2 } from '@/shared/layout';
import React from 'react';
import Image from '@/assets/images/bed-room-2.png';
import {
  TextInputPrimary,
  TextInputWithLogo,
  Typography,
} from '@/shared/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LocationSearch from '@/shared/components/LocationSearch/LocationSearch';
const LocationCard = () => {
  return (
    <div className="mx-5 sm:mx-[7%]">
      <LayoutImageV2 image={Image}>
        <div className="flex flex-col h-full">
          <Typography.Heading variant="h3">
            Explore Fearlessly
          </Typography.Heading>
          <Typography.Heading
            variant="h5"
            className="mt-3 sm:mt-5 cursor-pointer sm:flex sm:flex-col"
          >
            Safe Rentals Tailored for{' '}
            <span>
              <span className="text-[#ff397e]">Women's</span> Comfort{' '}
            </span>
          </Typography.Heading>

          <div className="w-full sm:w-[90%] sm:mt-10 mt-5">
            <TextInputWithLogo placeholder="Search location">
              <FontAwesomeIcon icon={faSearch} className="pr-5" />
            </TextInputWithLogo>
          </div>

          <LocationSearch />
        </div>
      </LayoutImageV2>
    </div>
  );
};

export default LocationCard;
