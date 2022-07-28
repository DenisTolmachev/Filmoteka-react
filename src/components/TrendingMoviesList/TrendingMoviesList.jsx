import { Link } from 'react-router-dom';
import {
  MovieCardList,
  MovieCardItem,
  MovieCardItemTitle,
  MovieCardImage,
} from './TrendingMoviesList.style';

export const TrendingMoviesList = ({ movies }) => {
  return (
    <MovieCardList>
      {movies.map(movie => (
        <MovieCardItem key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <div className="trending-movies-list__item">
              <MovieCardImage
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          </Link>
          <MovieCardItemTitle>{movie.title}</MovieCardItemTitle>
        </MovieCardItem>
      ))}
    </MovieCardList>
  );
};
