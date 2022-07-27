import { Layout } from "layout/Layout";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("pages/Home/Home"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<div>Movies</div>} />
        </Route>
      </Routes>
    </>
  );
};
