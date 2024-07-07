import React from "react";
interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}
function Button({ text, className, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md p-2 px-5 text-center ${className} hoverable font-medium bg-blue-500 text-white`}
    >
      {text}
    </button>
  );
}

export default Button;
