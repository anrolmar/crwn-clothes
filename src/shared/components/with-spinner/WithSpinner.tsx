import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

export interface WithSpinnerProps {
  isLoading: boolean;
}

const WithSpinner =
  <P extends object>(Component: React.ComponentType<P>): React.FC<P & WithSpinnerProps> =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <Component {...(otherProps as P)} />
    );
  };

export default WithSpinner;
