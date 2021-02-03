import React from 'react';
import './Input.styles.scss';

type InputProps = {
  name: string;
  type: 'text' | 'number';
  value: string | number;
  placeholder: string;
  disabled: boolean;
  handleChange: (event: any) => void
}

const defaultProps: Partial<InputProps> = {
  type: 'text',
  placeholder: 'Enter a value...',
}

const Input = (props: Partial<InputProps> = defaultProps) => {
  return (
    <div className="form-group">
      <input
        className="form-input"
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        disabled={props.disabled}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default Input;
