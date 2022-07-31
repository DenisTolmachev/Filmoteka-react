import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: flex;
`;

export const MovieCardImage = styled.img`
  width: 250px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const MovieCardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.ml1};
`;

export const MovieCardScore = styled.p`
  padding-top: 30px;
  padding-bottom: 15px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  & span {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const MovieCardOverwiew = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const MovieCardOverwiewTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const MovieCardOverwiewText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin-top: 10px;
`;

export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;
