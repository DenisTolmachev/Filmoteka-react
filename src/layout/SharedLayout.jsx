import { Outlet } from 'react-router-dom';
import { Header } from './common/Header/Header';
import { Container } from 'components/common/Container.style';
import { Footer } from './common/Footer/Footer';
import { AppContainer } from './SharedLayout.style';

export const SharedLayout = () => {
  return (
    <AppContainer>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </AppContainer>
  );
};
