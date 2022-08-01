import {
  ReviewsList,
  ReviewsItem,
  ReviewsAuthor,
  ReviewsText,
  ErrorReviewMessage,
} from './FilmReviewsList.styled';

export const FilmReviewsList = ({ reviews }) => {
  return (
    <>
      <ReviewsList>
        {reviews.length !== 0 ? (
          reviews.map(review => (
            <ReviewsItem key={review.id}>
              <ReviewsAuthor>
                <span>Author: </span>
                {review.author}
              </ReviewsAuthor>
              <ReviewsText>{review.content}</ReviewsText>
            </ReviewsItem>
          ))
        ) : (
          <ErrorReviewMessage>
            We don`t have any reviws for this movie!
          </ErrorReviewMessage>
        )}
      </ReviewsList>
    </>
  );
};
