import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style-type: none;
`;

export const ReviewsItem = styled.li`
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  :last-child {
    border-bottom: none;
  }
`;

export const ReviewsAuthor = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  & span {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const ReviewsText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin-top: 10px;
`;
