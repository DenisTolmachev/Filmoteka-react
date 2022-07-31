import {
  ReviewsList,
  ReviewsItem,
  ReviewsAuthor,
  ReviewsText,
} from './FilmReviewsList.styled';

export const FilmReviewsList = ({ reviews }) => {
  return (
    <ReviewsList>
      {reviews.map(review => (
        <ReviewsItem key={review.id}>
          <ReviewsAuthor>
            <span>Author: </span>
            {review.author}
          </ReviewsAuthor>
          <ReviewsText>{review.content}</ReviewsText>
        </ReviewsItem>
      ))}
    </ReviewsList>
  );
};
