import { Layout } from 'layout/SharedLayout';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<div>MoviesList</div>} />
            <Route path="movies/:moviesId" element={<MovieDetails />}>
              <Route path="cast" element={<div>Cast</div>} />
              <Route path="reviews" element={<div>Reviews</div>} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
