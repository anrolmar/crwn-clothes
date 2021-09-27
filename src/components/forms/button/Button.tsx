import './button.scss';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} button`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
