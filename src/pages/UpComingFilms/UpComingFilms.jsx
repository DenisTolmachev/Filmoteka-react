import { useState, useEffect } from 'react';
import { getUpcomingFilms } from 'services/getUpComingFilms';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { PageTitle } from '../../components/common/PageTitle.styled';

const UpComingFilms = () => {
  const [searchValue, setsearchValue] = useState([]);

  useEffect(() => {
    getUpcomingFilms().then(data => {
      setsearchValue(data.results);
    });
  }, []);

  return (
    <>
      <PageTitle>Upcoming</PageTitle>
      <MoviesList movies={searchValue} />
    </>
  );
};

export default UpComingFilms;