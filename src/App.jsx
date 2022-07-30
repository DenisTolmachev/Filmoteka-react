import { Layout } from 'layout/SharedLayout';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoaderSpinner } from 'components/common/Loader/Loader'


const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));
const FilmCredits = lazy(() => import('pages/FilmCredits/FilmCredits'));
const FilmReviews = lazy(() => import('pages/FilmReviews/FilmReviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<LoaderSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<div>MoviesList</div>} />
            <Route path="movies/:moviesId" element={<MovieDetails />}>
              <Route path="cast" element={<FilmCredits />} />
              <Route path="reviews" element={<FilmReviews />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
