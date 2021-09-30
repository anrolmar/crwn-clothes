import { SignIn, SignUp } from '../../components/users';

import './login-page.scss';

const LoginPage: React.FC = () => {
  return (
    <div className="login">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default LoginPage;
