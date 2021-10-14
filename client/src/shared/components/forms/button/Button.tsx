import { ButtonContainer } from './button.styles';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inverted?: boolean;
  isGoogleSignIn?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, ...otherProps }) => {
  return <ButtonContainer {...otherProps}>{children}</ButtonContainer>;
};

export default Button;
