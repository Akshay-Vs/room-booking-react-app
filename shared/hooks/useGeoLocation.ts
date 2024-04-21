import { useState } from 'react';
import { useGeolocated } from 'react-geolocated';
import axios from 'axios';

const endpoint = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

export const useGeoLocation = () => {
  const [currentCity, setCurrentCity] = useState<string>('');

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 10000,
    });

  const getCity = async (lat: number, lon: number) => {
    const res = await axios.get(endpoint, {
      params: {
        latitude: lat,
        longitude: lon,
        localityLanguage: 'en',
      },
    });
    setCurrentCity(res.data.city);
  };

  if (isGeolocationEnabled && isGeolocationAvailable) {
    const lat = coords?.latitude || 0;
    const lon = coords?.longitude || 0;
    getCity(lat, lon);
  }

  return { coords, isGeolocationAvailable, isGeolocationEnabled, currentCity };
};
