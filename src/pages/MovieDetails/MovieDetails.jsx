import { Outlet, useParams } from 'react-router-dom';
import { DetailsLinks, LinkStyle } from './MovieDetails.style';
import { Suspense, useEffect, useState } from 'react';
import { getDataFilms } from 'services/getDataFilms';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { LoaderSpinner } from 'components/common/Loader/Loader';

const MovieDetails = () => {
  const [MovieId, setMovieId] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    getDataFilms(moviesId).then(result => {
      setMovieId(result);
    });
  }, [moviesId]);

  return (
    <>
      {MovieId && (
        <>
          <MovieCard movie={MovieId} />
          <DetailsLinks>
            <LinkStyle to={'cast'}>Cast</LinkStyle>
            <LinkStyle to={'reviews'}>Reviews</LinkStyle>
          </DetailsLinks>

          <Suspense fallback={<LoaderSpinner />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
