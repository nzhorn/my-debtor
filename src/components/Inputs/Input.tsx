import React, { FC } from 'react';
import './Input.styles.scss';

type InputProps = {
  name: string;
  type: 'text' | 'number';
  value: string | number;
  placeholder: string;
  disabled: boolean;
  handleChange: (event: any) => void;
};

const defaultProps: Partial<InputProps> = {
  type: 'text',
  placeholder: 'Enter a value...',
};

const Input: FC<Partial<InputProps>> = ({ name, type, value, placeholder, disabled, handleChange } = defaultProps) => {
  return (
    <div className="form-group">
      <input
        className="form-input"
        id={name}
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
