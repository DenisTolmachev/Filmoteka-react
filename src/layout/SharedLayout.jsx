import { Outlet } from 'react-router-dom';
import { Header } from './common/Header/Header';
import { Container } from 'layout/common/Container.style';
import { Footer } from './common/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
