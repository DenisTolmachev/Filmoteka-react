import { Searchbar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmsByKey } from 'services/getFilmsByKey';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { toast } from 'react-toastify';

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
      toast.warn('Enter a movie title!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      const nextParams = value.query !== '' ? { name: value.query } : {};
      setSearchParams(nextParams);
    }
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} value={searchParams.get('name')} />
      <MoviesList movies={searchValue} />
      
    </div>
  );
};

export default Movies;
