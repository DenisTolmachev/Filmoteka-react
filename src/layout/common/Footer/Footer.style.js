import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const FooterText = styled.p`
text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
