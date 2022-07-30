import { api } from './api';

export const getFilmReviews = async id => {
  try {
    const { data } = await api.get(`/movie/${id}/reviews`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
