import styled from 'styled-components';

export const CreditsList = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const CreditsItem = styled.li`
  margin: 10px;
  margin-bottom: 20px;
  width: 150px;
`;

export const CreditsImage = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ActorName = styled.p`
  margin-top: 5px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ActorCharacter = styled.p`
  margin-top: 5px;
  & span {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;
