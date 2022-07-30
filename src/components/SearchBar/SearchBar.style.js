import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SearchbarContainer = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
`;

export const SearchForm = styled(Form)`
  position: relative;
`;

export const SearchInput = styled(Field)`
  outline: none;
  height: 30px;
  width: 300px;
  border: 0;
  border-radius: 6px;
  padding-left: 10px;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  display: block;
  position: absolute;
  right: 0;
  width: 30px;
  height: 32px;
  border: 0;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;
