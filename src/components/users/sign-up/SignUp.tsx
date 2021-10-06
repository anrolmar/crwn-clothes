import { Button, FormInput } from '../../../shared/components/forms';
import React, { ChangeEvent, FormEvent } from 'react';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

import { Dispatch } from 'redux';
import { IUserCredentials } from '../../../shared/models/AuthUser';
import { UserAction } from '../../../redux/users/user.actions';
import { connect } from 'react-redux';
import { signUpStart } from '../../../redux/users/user.action-creators';

interface SignUpProps {
  signUpStart: (userCredentials: IUserCredentials) => void;
}
interface SignUpState {
  confirmPassword: string;
  displayName: string;
  email: string;
  password: string;
}

const INITIALIZE_STATE: SignUpState = {
  confirmPassword: '',
  displayName: '',
  email: '',
  password: '',
};

class SignUp extends React.Component<SignUpProps, SignUpState> {
  state = INITIALIZE_STATE;

  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { confirmPassword, displayName, email, password } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }
    signUpStart({ displayName, email, password });
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<SignUpState, keyof SignUpState>);
  };

  render() {
    const { confirmPassword, displayName, email, password } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign Up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput type="email" name="email" value={email} handleChange={this.handleChange} label="Email" required />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => ({
  signUpStart: (userCredentials: IUserCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
