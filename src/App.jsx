import { Layout } from "components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<div>Home</div>} />
          <Route path="movies" element={<div>Movies</div>} />
        </Route>
      </Routes>
    </>
  );
};
