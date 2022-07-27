import { Link } from "react-router-dom";
import { MovieCardList, MovieCardItem, MovieCardImage } from "./TrendingMoviesList.style";


export const TrendingMoviesList = ({ movies }) => {
    return (
        <MovieCardList>
        {movies.map(movie => (
            <MovieCardItem>
            <Link key={movie.id} to={`/movies/${movie.id}`}>
            <div className="trending-movies-list__item">
                <MovieCardImage
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                />
                <div className="trending-movies-list__item-title">{movie.title}</div>
            </div>
            </Link>
            </MovieCardItem>
            
        ))}
        </MovieCardList>
    );
}