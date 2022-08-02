import { useState, useEffect } from 'react';
import { getTopFilms } from 'services/getTopFilms';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { PageTitle } from '../../components/common/PageTitle.styled';

const Home = () => {
  const [searchValue, setsearchValue] = useState([]);

  useEffect(() => {
    getTopFilms().then(data => {
      setsearchValue(data.results);
    });
  }, []);

  return (
    <>
      <PageTitle>Top Films</PageTitle>
      <MoviesList movies={searchValue} />
    </>
  );
};

export default Home;