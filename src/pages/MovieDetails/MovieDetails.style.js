import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DetailsLinks = styled.div`
  display: flex;
  justify-content: start;
  padding: 20px 0;
  gap: 5px;
`;

export const LinkStyle = styled(NavLink)`
  display: flex;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.m};
  padding: 5px;
  border-radius: 5px;
  text-transform: uppercase;

  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
  }
`;