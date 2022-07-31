import { Link, useLocation } from 'react-router-dom';
import {
  MovieListList,
  MovieListItem,
  MovieListItemTitle,
  MovieListImage,
  ErrorFindMessage,
} from './MoviesList.style';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  console.log(movies);

  return (
    <>
      {movies && movies.length > 0 ? (
        <MovieListList>
          {movies.map(movie => (
            <MovieListItem key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <MovieListImage
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500` + movie.poster_path
                      : 'https://dummyimage.com/309x449/fff/000000.png&text=%D0%9A%D1%96%D0%BD%D0%B0+%D0%BD%D0%B5+%D0%B1%D1%83%D0%B4%D0%B5!'
                  }
                  alt={movie.title}
                />
              </Link>
              <MovieListItemTitle>{movie.title}</MovieListItemTitle>
            </MovieListItem>
          ))}
        </MovieListList>
      ) : (
        <ErrorFindMessage>Films not found, enter the correct request!</ErrorFindMessage>
      )}
    </>
  );
};
