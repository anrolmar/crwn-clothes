import React, { ChangeEvent, FormEvent } from 'react';
import { auth, createUserProfileDocument } from '../../../firebase/firebase';
import { Button, FormInput } from '../../../shared/components/forms';
import './sign-up.scss';

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

class SignUp extends React.Component<{}, SignUpState> {
  state = INITIALIZE_STATE;

  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { confirmPassword, displayName, email, password } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      if (user) await createUserProfileDocument(user, { displayName });
      else console.error('There was a problem creating the user');

      this.setState(INITIALIZE_STATE);
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<SignUpState, keyof SignUpState>);
  };

  render() {
    const { confirmPassword, displayName, email, password } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign Up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
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
      </div>
    );
  }
}

export default SignUp;
