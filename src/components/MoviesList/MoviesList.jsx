export const MoviesList = ({ movies }) => {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>Some</li>
            ))}
        </ul>
    )
}