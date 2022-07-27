import styled from 'styled-components';

export const Container = styled.div`
background-color: ${({theme}) => theme.colors.background};
max-width: 1200px;
margin: 0 auto;
padding: 0 0 20px;
box-shadow: 0px 5px 10px -4px #050505;
`;
