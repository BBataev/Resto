import { FC } from "react";
import Search from "../../assets/search.svg?react";

import './Input.css';

interface InputProps {
  placeholder?: string;
  size: number;
  type: "text" | "password" | "email";
  color?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onInput?: () => {};
}

export const Input: FC<InputProps> = ({
  placeholder,
  size = 40,
  color,
  type = "text",
  isDisabled,
  isLoading,
}) => {
  return (
    <div className="input">
        <Search className="input__svg" />
        <input
          className="input__textArea"
          color={color}
          size={size}
          type={type}
          placeholder={placeholder}
          disabled={isDisabled || isLoading}
        />
    </div>
  );
};
