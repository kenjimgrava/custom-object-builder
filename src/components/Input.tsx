import React, { ChangeEventHandler } from "react";

interface Props {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}
function Input({ name, placeholder, value, onChange, className }: Props) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded-md px-3 py-2 ${className} `}
    />
  );
}

export default Input;
