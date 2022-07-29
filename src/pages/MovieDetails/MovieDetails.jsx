import { Outlet } from 'react-router-dom';
import { DetailsLinks, LinkStyle } from './MovieDetails.style';
//import { useEffect, useState } from 'react';
//import { getDataFilms } from 'services/getDataFilms';

const MovieDetails = () => {
  //const [MovieId, setMovieId] = useState([]);

  return (
    <>
      <div>
        <h2>Movies ID</h2>
      </div>

      <DetailsLinks>
        <LinkStyle to={'cast'}>Cast</LinkStyle>
        <LinkStyle to={'reviews'}>Reviews</LinkStyle>
      </DetailsLinks>

      <Outlet />
    </>
  );
};

export default MovieDetails;
