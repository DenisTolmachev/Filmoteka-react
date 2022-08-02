import { api } from './api';
import { toastError } from 'utils/toastState';

export const getFilmsByKey = async query => {
  try {
    const { data } = await api.get('/search/movie', { params: query });
    return data;
  } catch (error) {
    toastError();
  }
};
