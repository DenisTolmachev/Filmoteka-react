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
      <PageNotFoundText>Кіна не буде!</PageNotFoundText>
    </PageNotFoundContainer>
  );
};

export default PageNotFound;
