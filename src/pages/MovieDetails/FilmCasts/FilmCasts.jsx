import { FilmCastsList } from 'components/FilmCastsList/FilmCastsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCasts } from 'services/getFilmCasts';

const FilmCasts = () => {
  const [casts, setCasts] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    getFilmCasts(moviesId).then(result => {
      setCasts(result.cast);
    });
  }, [moviesId]);

  return (
    <>
      {casts && (
        <>
          <FilmCastsList casts={casts} />
        </>
      )}
    </>
  );
};

export default FilmCasts;
