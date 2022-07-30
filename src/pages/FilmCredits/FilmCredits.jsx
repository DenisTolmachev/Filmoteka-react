import { FilmCreditsList } from 'components/FilmCreditsList/FilmCreditsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCredits } from 'services/getFilmCredits';

const FilmCredits = () => {
  const [Credits, setCredits] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    getFilmCredits(moviesId).then(result => {
      setCredits(result.cast);
    });
  }, [moviesId]);

  return (
    <>
      {Credits && (
        <>
          <FilmCreditsList credits={Credits} />
        </>
      )}
    </>
  );
};

export default FilmCredits;
