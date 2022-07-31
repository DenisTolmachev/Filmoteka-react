import { Outlet } from 'react-router-dom';
import { Header } from './common/Header/Header';
import { Container } from 'components/common/Container.style';
import { Footer } from './common/Footer/Footer';
import { AppContainer } from './SharedLayout.style';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  return (
    <AppContainer>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
      <ToastContainer />
    </AppContainer>
    

  );
};
