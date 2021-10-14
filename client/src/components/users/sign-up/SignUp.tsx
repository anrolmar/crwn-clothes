import { Button, FormInput } from '../../../shared/components/forms';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

import { Dispatch } from 'redux';
import { UserAction } from '../../../redux/users/user.actions';
import { signUpStart } from '../../../redux/users/user.action-creators';
import { useDispatch } from 'react-redux';

const SignUp: React.FC = () => {
  const [signUpDetails, setSignUpDetails] = useState({ confirmPassword: '', displayName: '', email: '', password: '' });
  const dispatch = useDispatch<Dispatch<UserAction>>();

  const { confirmPassword, displayName, email, password } = signUpDetails;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }
    dispatch(signUpStart({ displayName, email, password }));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput type="email" name="email" value={email} handleChange={handleChange} label="Email" required />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
