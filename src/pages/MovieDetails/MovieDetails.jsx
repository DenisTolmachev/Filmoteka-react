import { Link, Outlet } from 'react-router-dom';
//import { useEffect, useState } from 'react';
//import { getDataFilms } from 'services/getDataFilms';

const MovieDetails = () => {
  //const [MovieId, setMovieId] = useState([]);

  return (
    <>
      <div>
        <h2>Movies ID</h2>
      </div>

      <Link to={'cast'}>Cast</Link>
      <Link to={'reviews'}>Reviews</Link>
      <Outlet />
    </>
  );
};

export default MovieDetails;
