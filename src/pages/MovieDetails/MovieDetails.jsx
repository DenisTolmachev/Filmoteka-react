import { useLocation, Outlet, useParams } from 'react-router-dom';
import { DetailsLinks, LinkStyle } from './MovieDetails.style';
import { BackLink } from 'components/common/BackLink';
import { Suspense, useEffect, useState } from 'react';
import { getDataFilms } from 'services/getDataFilms';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { LoaderSpinner } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [MovieId, setMovieId] = useState(null);
  const { moviesId } = useParams();
  const location = useLocation().state?.from ?? '/';

  useEffect(() => {
    getDataFilms(moviesId).then(result => {
      setMovieId(result);
    });
  }, [moviesId]);

  return (
    <>
      <BackLink to={location}>&#8678; Back to movies</BackLink>
      {MovieId && (
        <>
          <MovieCard movie={MovieId} />
          <DetailsLinks>
            <LinkStyle to={'cast'} state={{ from: location }}>
              Cast
            </LinkStyle>
            <LinkStyle to={'reviews'} state={{ from: location }}>
              Reviews
            </LinkStyle>
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
