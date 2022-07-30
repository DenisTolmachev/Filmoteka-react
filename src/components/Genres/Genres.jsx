import { GenresContainer, GenresTitle, GenresList, GenresItem } from "./Genres.style"

export const Genres = ({ genres }) => {
    return (
        <GenresContainer>
            <GenresTitle>Genres:</GenresTitle>
            <GenresList>
            {genres.map(genre => (
                <GenresItem key={genre.id}>{genre.name}</GenresItem>
            ))}
            </GenresList>
        </GenresContainer>
    )
}