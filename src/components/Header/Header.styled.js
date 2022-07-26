import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
`;

export const NavStyle = styled.nav`
    display: flex;
    gap: 10px;
`;

export const LinkStyle = styled(NavLink)`
display: flex;
    color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.ml};
  padding: 5px;
  border-radius: 5px;

  &.active {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${({ theme }) => theme.colors.white};
  }
`;
