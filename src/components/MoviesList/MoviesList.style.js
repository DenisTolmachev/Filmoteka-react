import styled from 'styled-components';

export const MovieListList = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const MovieListItem = styled.li`
  cursor: pointer;
  margin: 10px;
  margin-bottom: 20px;
  //flex-basis: calc((100% - 10px) / 5);
  transform: translateY(0);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-3%);
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const MovieListItemTitle = styled.p`
width: 309px;
text-decoration: none;
color: black;
font-weight: ${({ theme }) => theme.fontWeights.bold};
font-size: ${({ theme }) => theme.fontSizes.m};
`;

export const MovieListImage = styled.img`
  width: 309px;
  height: 449px;
  text-decoration: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;