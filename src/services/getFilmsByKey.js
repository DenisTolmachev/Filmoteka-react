import { api } from './api';

export const getFilmsByKey = async query => {
  try {
    const { data } = await api.get('/search/movie', { params: query });
    return data;
  } catch (error) {
    console.log(error);
  }
};
