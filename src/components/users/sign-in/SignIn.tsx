import { Button, FormInput } from '../../../shared/components/forms';
import { ButtonsContainer, SignInContainer } from './sign-in.styles';
import React, { ChangeEvent, FormEvent } from 'react';
import { emailSignInStart, googleSignInStart } from '../../../redux/users/user.action-creators';

import { Dispatch } from 'redux';
import { UserAction } from '../../../redux/users/user.actions';
import { connect } from 'react-redux';

interface SignInOwnProps {
  emailSignInStart: (email: string, password: string) => void;
  googleSignInStart: () => void;
}
interface SignInState {
  email: string;
  password: string;
}

const INITIALIZE_STATE: SignInState = {
  email: '',
  password: '',
};

class SignIn extends React.Component<SignInOwnProps, SignInState> {
  state = INITIALIZE_STATE;

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<SignInState, keyof SignInState>);
  };

  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;

    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" label="Email" value={email} handleChange={this.handleChange} required />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
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
  }
}

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => ({
  emailSignInStart: (email: string, password: string) => dispatch(emailSignInStart(email, password)),
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
