//import { FaRegTired } from "react-icons/fa";
import {
  PageNotFoundContainer,
  PageNotFoundTitle,
  NotFoundIcon,
  PageNotFoundText,
} from './PageNotFound.styling';

const PageNotFound = () => {
  return (
    <PageNotFoundContainer>
      <PageNotFoundTitle>Page not found</PageNotFoundTitle>
      <div>
        <NotFoundIcon />
      </div>
      <PageNotFoundText>Кина не будет!</PageNotFoundText>
    </PageNotFoundContainer>
  );
};

export default PageNotFound;
