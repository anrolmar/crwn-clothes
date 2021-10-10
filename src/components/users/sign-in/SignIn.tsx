import { Button, FormInput } from '../../../shared/components/forms';
import { ButtonsContainer, SignInContainer } from './sign-in.styles';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { emailSignInStart, googleSignInStart } from '../../../redux/users/user.action-creators';

import { Dispatch } from 'redux';
import { UserAction } from '../../../redux/users/user.actions';
import { useDispatch } from 'react-redux';

const SignIn: React.FC = () => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;

  const dispatch = useDispatch<Dispatch<UserAction>>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(emailSignInStart(email, password));
  };

  const googleSignInHandleClick = () => {
    dispatch(googleSignInStart());
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
          <Button type="button" isGoogleSignIn onClick={googleSignInHandleClick}>
            Sign in with Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
