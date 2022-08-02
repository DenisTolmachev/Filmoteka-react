import styled from 'styled-components';

export const GenresContainer = styled.div`
  margin-top: 15px;
`;

export const GenresTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const GenresList = styled.ul`
list-style-type: circle;
margin: 10px 20px;
padding: 0;
`;

export const GenresItem = styled.li`
margin-top: 5px;
`;
