import { api } from './api';
import { toastError } from 'utils/toastState';

export const getFilmReviews = async id => {
  try {
    const { data } = await api.get(`/movie/${id}/reviews`);

    return data;
  } catch (error) {
    toastError();
  }
};
