import { Link, useLocation } from 'react-router-dom';
import {
  MovieCardList,
  MovieCardItem,
  MovieCardItemTitle,
  MovieCardImage,
} from './TrendingMoviesList.style';

export const TrendingMoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieCardList>
      {movies.map(movie => (
        <MovieCardItem key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{from: location}}>
            <MovieCardImage
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
          <MovieCardItemTitle>{movie.title}</MovieCardItemTitle>
        </MovieCardItem>
      ))}
    </MovieCardList>
  );
};
