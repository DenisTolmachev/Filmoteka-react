//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Circles } from 'react-loader-spinner';
import { Loader } from './Loader.styled';

export const LoaderSpinner = () => {
  return (
    <Loader>
      <Circles color="rgb(63, 81, 181)" height={200} width={200} />
    </Loader>
  );
};
