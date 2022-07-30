import { FilmReviewsList } from 'components/FilmReviewsList/FilmReviewsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'services/getFilmReviews';

const FilmReviews = () => {
  const [Reviews, setReviews] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    getFilmReviews(moviesId).then(result => {
      setReviews(result.results);
    });
  }, [moviesId]);

  console.log(Reviews);

  return (
    <>
      {Reviews && (
        <>
          <FilmReviewsList reviews={Reviews} />
        </>
      )}
    </>
  );
};

export default FilmReviews;
