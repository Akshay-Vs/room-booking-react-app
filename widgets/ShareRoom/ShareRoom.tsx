import {
  Button,
  TextAreaInput,
  TextInputPrimary,
  Typography,
} from '@/shared/components';
import LayoutImageUpload from '@/shared/layout/LayoutImage/LayoutImageUpload';
import React from 'react';

const ShareRoom = () => {
  return (
    <div>
      <LayoutImageUpload>
        <div className="flex flex-col gap-5 overflow-auto h-[80vh]">
          <Typography.Heading variant="h4" className="mx-3">
            Fill ther details
          </Typography.Heading>
          <TextInputPrimary placeholder="Enter the name" />
          <TextAreaInput placeholder="Enter description" props={{ rows: 24 }} />
          <TextInputPrimary placeholder="Enter total sqft" type="number" />
          <TextInputPrimary
            placeholder="Enter number of bedrooms"
            type="number"
          />
          <TextInputPrimary
            placeholder="Enter number of vacent rooms"
            type="number"
          />
          <TextInputPrimary placeholder="Enter the address" type="number" />
          <TextInputPrimary placeholder="Enter Price per day" type="number" />
          <TextInputPrimary
            placeholder="Enter number of bathrooms"
            type="number"
          />{' '}
          <Button>Save</Button>
        </div>
      </LayoutImageUpload>
    </div>
  );
};

export default ShareRoom;
