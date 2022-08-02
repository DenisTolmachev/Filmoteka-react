import { api } from './api';
import { toastError } from 'utils/toastState';

export const popularParams = {
  page: 1,
};

export const getPopularMovie = async () => {
  try {
    const { data } = await api.get('/trending/movie/day', {
      params: popularParams,
    });
    return data;
  } catch (error) {
    toastError();
  }
};
