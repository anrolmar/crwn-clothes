import './button.scss';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inverted?: boolean;
  isGoogleSignIn?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
