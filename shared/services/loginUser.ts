import axios, { AxiosResponse, AxiosError } from 'axios';

type user = {
  name: string;
  email: string;
  password: string;
};

const ENDPOINT = 'http://localhost:8080/api/users/auth';

export const loginUser = async (user: user) => {
  try {
    const res: AxiosResponse = await axios.post(ENDPOINT, user);
    if (res.status >= 200 || res.status <= 300) {
      return res.data;
    } else {
      throw new Error(`Request failed with status code ${res.status}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (
        axiosError.response &&
        axiosError.response.status >= 400 &&
        axiosError.response.status < 500
      ) {
        return axiosError.response.data;
      } else {
        console.log('Network error', axiosError.message);
        throw axiosError;
      }
    } else {
      console.log('Non-Axios error', error);
      throw error;
    }
  }
};
