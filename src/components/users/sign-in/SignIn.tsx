import { Button, FormInput } from '../../../shared/components/forms';
import { ButtonsContainer, SignInContainer } from './sign-in.styles';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { emailSignInStart, googleSignInStart } from '../../../redux/users/user.action-creators';

import { Dispatch } from 'redux';
import { UserAction } from '../../../redux/users/user.actions';
import { connect } from 'react-redux';

interface SignInOwnProps {
  emailSignInStart: (email: string, password: string) => void;
  googleSignInStart: () => void;
}

const SignIn: React.FC<SignInOwnProps> = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" label="Email" value={email} handleChange={handleChange} required />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button type="button" isGoogleSignIn onClick={googleSignInStart}>
            Sign in with Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => ({
  emailSignInStart: (email: string, password: string) => dispatch(emailSignInStart(email, password)),
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
