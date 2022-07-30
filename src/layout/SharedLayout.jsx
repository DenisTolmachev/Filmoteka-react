import { Outlet } from 'react-router-dom';
import { Header } from './common/Header/Header';
import { Container } from 'components/common/Container.style';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};