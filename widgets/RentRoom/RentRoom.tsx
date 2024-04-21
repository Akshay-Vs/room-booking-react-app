import { Button, TextInputPrimary, Typography } from '@/shared/components';
import { LayoutImageV3 } from '@/shared/layout';
import getRoomByID from '@/shared/services/getRoomByID';
import {
  faBed,
  faDollarSign,
  faLocationDot,
  faRestroom,
  faRuler,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface IRentRoomProps {
  id: string;
}

const RentRoom = ({ id }: IRentRoomProps) => {
  const data = getRoomByID(id);
  return (
    <div>
      <LayoutImageV3 image={data.image}>
        <Typography className="px-10 ">
          <Typography.Heading variant="h2">{data.name}</Typography.Heading>
          <Typography.Heading
            variant="h7"
            className="scale-125 w-[70%] mx-16 mt-4"
          >
            {data.description}
          </Typography.Heading>

          <div className="flex flex-col gap-3 opacity-80 mt-10">
            <div className="flex">
              <Typography.Heading variant="h7" className="mr-16">
                <FontAwesomeIcon icon={faRuler} className="mr-2" /> {data.sqft}{' '}
                sqft
              </Typography.Heading>

              <Typography.Heading variant="h7">
                <FontAwesomeIcon icon={faStar} className="mr-3" /> {data.rating}{' '}
                | {data.reviews} reviews
              </Typography.Heading>
            </div>

            <div className="flex">
              <Typography.Heading variant="h7" className="mr-6">
                <FontAwesomeIcon icon={faRestroom} className="mr-3" />
                Bathrooms: {data.bathrooms}
              </Typography.Heading>

              <Typography.Heading variant="h7">
                <FontAwesomeIcon icon={faBed} className="mr-3" /> Bedrooms:{' '}
                {data.bedrooms}
              </Typography.Heading>
            </div>
          </div>

          <Typography.Heading variant="h6" className="mt-8 opacity-85">
            {data.vacent} Vacent
          </Typography.Heading>

          <Typography.Heading variant="h6" className="mt-5 opacity-85">
            <FontAwesomeIcon icon={faLocationDot} className="mr-3 " size="sm" />
            {data.city}, {data.state}
          </Typography.Heading>

          <Typography.Heading variant="h6" className="flex items-center mt-5">
            <FontAwesomeIcon icon={faDollarSign} className="mr-3 opacity-85" />
            <span className="text-[#ff397e] text-4xl">{data.price}</span>
            /day
          </Typography.Heading>
        </Typography>

        <Button className="mx-10 mt-8 w-[60%]">Book Now</Button>
      </LayoutImageV3>
    </div>
  );
};

export default RentRoom;
