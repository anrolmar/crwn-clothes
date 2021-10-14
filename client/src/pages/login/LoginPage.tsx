import { SignIn, SignUp } from '../../components/users';

import { LoginContainer } from './login-page.styles';

const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <SignIn />
      <SignUp />
    </LoginContainer>
  );
};

export default LoginPage;
