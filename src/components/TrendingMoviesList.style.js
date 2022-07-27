import styled from 'styled-components';

export const MovieCardList = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const MovieCardItem = styled.li`
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

export const MovieCardItemTitle = styled.div`
text-decoration: none;
color: black;
`;

export const MovieCardImage = styled.img`
  width: 309px;
  height: 449px;
  text-decoration: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
