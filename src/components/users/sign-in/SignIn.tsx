import React, { ChangeEvent, FormEvent } from 'react';
import { auth, signInWithGoogle } from '../../../firebase/firebase';
import { FormInput, Button } from '../../forms';
import './sign-in.scss';

interface SignInState {
  email: string;
  password: string;
}

const INITIALIZE_STATE: SignInState = {
  email: '',
  password: '',
};

class SignIn extends React.Component<{}, SignInState> {
  state = INITIALIZE_STATE;

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<SignInState, keyof SignInState>);
  };

  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }

    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
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
          <div className="buttons">
            <Button type="submit">Sign in</Button>
            <Button type="button" isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
