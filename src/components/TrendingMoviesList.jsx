import { Link } from "react-router-dom";

export const TrendingMoviesList = ({ movies }) => {
    return (
        <div className="trending-movies-list">
        {movies.map(movie => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
            <div className="trending-movies-list__item">
                <img
                className="trending-movies-list__item-image"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                />
                <div className="trending-movies-list__item-title">{movie.title}</div>
            </div>
            </Link>
        ))}
        </div>
    );
}