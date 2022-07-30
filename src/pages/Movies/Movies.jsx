import { Searchbar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { getFilmsByKey } from 'services/getFilmsByKey';

const Movies = () => {
  const [searchValue, setSearchValue] = useState('');

  console.log('searchValue', searchValue);

    useEffect(() => {
        if (searchValue === '') {
            return;
        } else {
            getFilmsByKey({query: searchValue}).then(result => {
                console.log(result);
            });
        }
    }, [searchValue]);


  const handleFormSubmit = searchValue => {
    if (searchValue.trim() === '') {
      console.log('enter a search value');
    } else {
      setSearchValue(searchValue);
    }
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <div>MoviesList</div>
    </div>
  );
};

export default Movies;
