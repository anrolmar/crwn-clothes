import { ChangeEvent, InputHTMLAttributes } from 'react';
import { FormInputContainer, FormInputLabel, GroupContainer } from './form-input.styles';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? <FormInputLabel className={`${otherProps.value ? 'shrink' : ''}`}>{label}</FormInputLabel> : null}
    </GroupContainer>
  );
};

export default FormInput;
