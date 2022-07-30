import { Genres } from "components/Genres/Genres";

export const MovieCard = ({ movie }) => {
  return (
    <>
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width="300px"
      />
    </div>
    <div>
        <h2>{movie.title}</h2>
        <span>{movie.release_date}</span>
    </div>
    <div>
        <p>User Score: {movie.vote_average}</p>
    </div>
    <div>
        <p>Overview: {movie.overview}</p>
    </div>
    <div>
        <Genres genres={movie.genres} />
    </div>
    </>
    
  );
};
