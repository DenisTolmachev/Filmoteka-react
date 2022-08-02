import { SharedLayout } from 'layout/SharedLayout';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoaderSpinner } from 'components/common/Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));
const FilmCasts = lazy(() => import('pages/MovieDetails/FilmCasts/FilmCasts'));
const FilmReviews = lazy(() => import('pages/MovieDetails/FilmReviews/FilmReviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<LoaderSpinner />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:moviesId" element={<MovieDetails />}>
              <Route path="cast" element={<FilmCasts />} />
              <Route path="reviews" element={<FilmReviews />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
