import {
  SearchbarContainer,
  SearchForm,
  SearchInput,
  SearchButton,
} from './SearchBar.style';
import { Formik } from 'formik';
import { RiSearchLine } from 'react-icons/ri';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarContainer>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          onSubmit(values.query);
          actions.resetForm();
        }}
      >
        {props => (
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
              value={props.values.query}
              onChange={props.handleChange}
            />
          </SearchForm>
        )}
      </Formik>
    </SearchbarContainer>
  );
};
