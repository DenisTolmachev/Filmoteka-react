import { FilmCastsList } from 'components/FilmCastsList/FilmCastsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCasts } from 'services/getFilmCasts';

const FilmCasts = () => {
  const [Casts, setCasts] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    getFilmCasts(moviesId).then(result => {
      setCasts(result.cast);
    });
  }, [moviesId]);

  return (
    <>
      {Casts && (
        <>
          <FilmCastsList Casts={Casts} />
        </>
      )}
    </>
  );
};

export default FilmCasts;
