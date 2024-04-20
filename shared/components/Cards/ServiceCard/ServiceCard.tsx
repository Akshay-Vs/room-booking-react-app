import React from 'react';
import Typography from '../../Typography/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface IServiceCardProps {
  title: string;
  desc: string;
}
const ServiceCard = ({ title, desc }: IServiceCardProps) => {
  return (
    <div className="bg-gray-300 w-full p-5 px-8 rounded-3xl cursor-pointer transition-all duration-300">
      <Typography>
        <Typography.Heading variant="h5">{title}</Typography.Heading>
        <Typography.Paragraph className="mt-4 w-[80%]">
          {desc}
        </Typography.Paragraph>

        <Typography.Heading
          className="w-[80%] mt-5 flex justify-start items-center"
          variant="h7"
        >
          See More
          <FontAwesomeIcon className="mx-3" icon={faChevronRight} size="sm" />
        </Typography.Heading>
      </Typography>
    </div>
  );
};

export default ServiceCard;
