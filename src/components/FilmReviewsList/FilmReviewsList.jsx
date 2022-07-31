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
{reviews.lenght !== 0 ? (<ReviewsList>
      {reviews.map(review => (
        <ReviewsItem key={review.id}>
          <ReviewsAuthor>
            <span>Author: </span>
            {review.author}
          </ReviewsAuthor>
          <ReviewsText>{review.content}</ReviewsText>
        </ReviewsItem>
      ))}
    </ReviewsList>) : (<ErrorReviewMessage>We don`t have any reviws for this movie!</ErrorReviewMessage>)}
</>

    
  );
};
