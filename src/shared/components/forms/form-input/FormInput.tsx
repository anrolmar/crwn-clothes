import './form-input.scss';
import { ChangeEvent, InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? <label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
    </div>
  );
};

export default FormInput;
