import { setupInterceptors } from './requestConfigs';
import axios from 'axios';

export const globalApi = setupInterceptors(
  axios.create({
    baseURL: process.env.REACT_APP_URL ?? 'http://127.0.0.1:3000',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }),
);
