export const FilmCreditsList = ({ credits }) => {
  return (
    <ul>
      {credits.map(credit => (
        <li key={credit.credit_id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
            alt=""
            width="100"
          />
          <p>{credit.name}</p>
          <p>Character: {credit.character}</p>
        </li>
      ))}
    </ul>
  );
};
