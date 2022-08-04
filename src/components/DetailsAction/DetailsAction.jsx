import { DetailsActionStyle, LinkStyle } from './DetailsAction.style';
import { useLocation } from 'react-router-dom';

export const DetailsAction = () => {
  const location = useLocation().state?.from;

  return (
    <DetailsActionStyle>
      <LinkStyle to={'cast'} state={{ from: location }}>
        Cast
      </LinkStyle>
      <LinkStyle to={'reviews'} state={{ from: location }}>
        Reviews
      </LinkStyle>
    </DetailsActionStyle>
  );
};
