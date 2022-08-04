import { useLocation, Outlet, useParams } from 'react-router-dom';

import { BackLink } from 'components/common/BackLink';
import { Suspense, useEffect, useState } from 'react';
import { getDataFilms } from 'services/getDataFilms';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { LoaderSpinner } from 'components/common/Loader/Loader';
import { DetailsAction } from 'components/DetailsAction/DetailsAction';

const MovieDetails = () => {
  const [movieId, setMovieId] = useState(null);
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
      {movieId && (
        <>
          <MovieCard movie={movieId} />
          <DetailsAction />
          <Suspense fallback={<LoaderSpinner />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
