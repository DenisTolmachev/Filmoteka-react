import { api } from './api';
import { toastError } from 'utils/toastState';

export const getFilmCasts = async id => {
  try {
    const { data } = await api.get(`/movie/${id}/credits`);

    return data;
  } catch (error) {
    toastError();
  }
};
