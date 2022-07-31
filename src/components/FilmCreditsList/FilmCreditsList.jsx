import {
  CreditsList,
  CreditsItem,
  CreditsImage,
  ActorName,
  ActorCharacter,
} from './FilmCreditsList.style';

export const FilmCreditsList = ({ credits }) => {
  return (
    <CreditsList>
      {credits.map(credit => (
        <CreditsItem key={credit.credit_id}>
          <CreditsImage
            src={
              credit.profile_path
                ? `https://image.tmdb.org/t/p/w500` + credit.profile_path
                : 'https://dummyimage.com/150x225/fff/000000.png&text=%D0%9A%D1%96%D0%BD%D0%B0+%D0%BD%D0%B5+%D0%B1%D1%83%D0%B4%D0%B5!'
            }
            alt=""
            width="150"
          />
          <ActorName>{credit.name}</ActorName>
          <ActorCharacter><span>Character: </span>{credit.character}</ActorCharacter>
        </CreditsItem>
      ))}
    </CreditsList>
  );
};
