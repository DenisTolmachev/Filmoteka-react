import styled from 'styled-components';
import { FaRegTired } from 'react-icons/fa';

export const PageNotFoundContainer = styled.div`
  //height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

export const PageNotFoundTitle = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xl};;
 
`;

export const NotFoundIcon = styled(FaRegTired)`
  height: 300px;
  width: 300px;
  color: ${({ theme }) => theme.colors.secondary};
   margin: 50px;
`;

export const PageNotFoundText = styled.p`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.l};;
 
`;
