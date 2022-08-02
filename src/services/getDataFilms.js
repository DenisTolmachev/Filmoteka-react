import { api } from './api';
import { toastError } from 'utils/toastState';

export const getDataFilms = async id => {
  try {
    const { data } = await api.get(`/movie/${id}`);

    return data;
  } catch (error) {
    toastError();
  }
};
