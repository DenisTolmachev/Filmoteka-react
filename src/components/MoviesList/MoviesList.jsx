import { Link, useLocation } from 'react-router-dom';
import {
    MovieListList,
    MovieListItem,
    MovieListItemTitle,
    MovieListImage,
  } from './MoviesList.style';

export const MoviesList = ({ movies }) => {
const location = useLocation();

  return (
    <MovieListList>
      {movies.map(movie => (
        <MovieListItem key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{from: location}}>
            <MovieListImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </Link>
          <MovieListItemTitle>{movie.title}</MovieListItemTitle>
        </MovieListItem>
      ))}
    </MovieListList>
  );
};
