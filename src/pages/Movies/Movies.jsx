import { Searchbar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmsByKey } from 'services/getFilmsByKey';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { toastWarning } from 'utils/toastState';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    let movieName = searchParams.get('name') ?? '';
    if (movieName === '') {
      return;
    } else {
      getFilmsByKey({ query: movieName, page: 1 }).then(result => {
        setSearchValue(result.results);
      });
    }
  }, [searchParams]);

  const handleFormSubmit = value => {
    if (value.query.trim() === '') {
      toastWarning()
    } else {
      const nextParams = value.query !== '' ? { name: value.query } : {};
      setSearchParams(nextParams);
    }
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} value={searchParams.get('name')} />
      <MoviesList movies={searchValue} />
    </>
  );
};

export default Movies;
