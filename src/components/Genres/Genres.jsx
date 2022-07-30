export const Genres = ({ genres }) => {
    return (
        <div>
            <ul>
            {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
            ))}
            </ul>
        </div>
    )
}