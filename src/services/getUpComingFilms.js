import { api } from './api';
import { toastError } from 'utils/toastState';

export const upParams = {
    page: 1,
  };
  
  export const getUpcomingFilms = async () => {
    try {
      const { data } = await api.get(`/movie/upcoming`, { params: upParams });
      return data;
    } catch (error) {
      toastError();
    }
  };
