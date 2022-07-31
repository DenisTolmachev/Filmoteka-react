import { useState, useEffect } from 'react';
import { getPopularMovie } from 'services/getPopularMovie';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { HomeContainer, HomeTitle } from './Home.styled';

const Home = () => {
  const [searchValue, setsearchValue] = useState([]);

  useEffect(() => {
    getPopularMovie().then(data => {
      setsearchValue(data.results);
    });
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Trending movies today</HomeTitle>
      <MoviesList movies={searchValue} />
    </HomeContainer>
  );
};

export default Home;
