import { Button, ProductCard, Typography } from '@/shared/components';
import React from 'react';
import { getDeals } from '@/shared/services/getDeals';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BestDeals = async () => {
  const data = await getDeals();

  return (
    <div>
      <Typography className="mx-5 sm:mx-[7%] mt-10 ">
        <Typography.Heading variant="h3" className="mt-0 cursor-pointer">
          Best Deals
        </Typography.Heading>
      </Typography>

      <div className="flex justify-center items-center gap-8 mt-8 mx-5 flex-wrap">
        {data.map((item) => (
          <ProductCard
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            city={item.city}
            country={item.state}
            isLiked={item.isLiked}
          />
        ))}
      </div>

      <div className="flex justify-center items-center w-full mt-10">
        <Button>
          See All
          <FontAwesomeIcon icon={faArrowRight} className="ml-3" size="sm" />
        </Button>
      </div>
    </div>
  );
};

export default BestDeals;
