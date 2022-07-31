import {
  SearchbarContainer,
  SearchForm,
  SearchInput,
  SearchButton,
} from './SearchBar.style';
import { Formik } from 'formik';
import { RiSearchLine } from 'react-icons/ri';

export const Searchbar = ({ onSubmit, value }) => {
  return (
    <SearchbarContainer>
      <Formik
        initialValues={{ query: value ?? '' }}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
        }}
      >
        <SearchForm>
          <SearchButton type="submit">
            <RiSearchLine />
          </SearchButton>
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            placeholder="Search movies"
          />
        </SearchForm>
      </Formik>
    </SearchbarContainer>
  );
};
