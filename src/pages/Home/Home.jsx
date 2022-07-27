import { useState, useEffect } from 'react';
import { getPopularMovie } from 'services/getPopularMovie';
import { TrendingMoviesList } from 'components/TrendingMoviesList';
import { HomeContainer } from './Home.styled';

const Home = () => {
  const [PopularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovie().then(data => {
      setPopularMovies(data.results);
    });
  });

  return (
    <HomeContainer>
      <h1>Trending movies</h1>
      <TrendingMoviesList movies={PopularMovies} />
    </HomeContainer>
  );
};

export default Home;
