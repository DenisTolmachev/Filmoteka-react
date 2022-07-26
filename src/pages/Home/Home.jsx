import { useState, useEffect } from 'react';
import { getPopularMovie } from 'services/getPopularMovie';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { PageTitle } from '../../components/common/PageTitle.styled';

const Home = () => {
  const [searchValue, setsearchValue] = useState([]);

  useEffect(() => {
    getPopularMovie().then(data => {
      setsearchValue(data.results);
    });
  }, []);

  return (
    <>
      <PageTitle>Trending movies today</PageTitle>
      <MoviesList movies={searchValue} />
    </>
  );
};

export default Home;
