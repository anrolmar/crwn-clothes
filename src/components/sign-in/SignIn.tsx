import React, { ChangeEvent, FormEvent } from 'react';
import { FormInput, Button } from '../forms';
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

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          <FormInput name="email" label="Email" value={email} handleChange={this.handleChange} required />
          <FormInput name="password" label="Password" value={password} handleChange={this.handleChange} required />
          <Button type="submit"> Sign In </Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
