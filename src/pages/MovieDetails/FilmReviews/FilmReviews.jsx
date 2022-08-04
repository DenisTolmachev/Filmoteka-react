import { FilmReviewsList } from 'components/FilmReviewsList/FilmReviewsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'services/getFilmReviews';

const FilmReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    getFilmReviews(moviesId).then(result => {
      setReviews(result.results);
    });
  }, [moviesId]);

  return (
    <>
      {reviews && (
        <>
          <FilmReviewsList reviews={reviews} />
        </>
      )}
    </>
  );
};

export default FilmReviews;
