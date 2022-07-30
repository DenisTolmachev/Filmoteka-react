import { useState, useEffect } from 'react';
import { getPopularMovie } from 'services/getPopularMovie';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
import { HomeContainer, HomeTitle } from './Home.styled';

const Home = () => {
  const [PopularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovie().then(data => {
      setPopularMovies(data.results);
    });
  },[]);

  return (
    <HomeContainer>
      <HomeTitle>Trending movies today</HomeTitle>
      <TrendingMoviesList movies={PopularMovies} />
    </HomeContainer>
  );
};

export default Home;
