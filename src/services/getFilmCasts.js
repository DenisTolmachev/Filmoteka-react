import { api } from './api';

export const getFilmCasts = async id => {
  try {
    const { data } = await api.get(`/movie/${id}/credits`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
