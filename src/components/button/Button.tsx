import React from "react";

interface ButtonProps {
  type: string;
  size: string;
  handleClick?: () => void
  children: React.ReactNode;
}

const Button = ({ type, size, handleClick, children }: ButtonProps) => {
  return (
    <button
      className={`rounded-lg text-white cursor-pointer transition-all duration-300
        ${size === "big" ? "px-8 py-2" : "px-4 py-2"}
        ${type === "primary" ? "bg-primary-500 hover:bg-primary-500/80" : ""}
        ${type === "accent" ? "bg-accent-500 hover:bg-accent-500/80" : ""}
        ${type === "neutral" ? "bg-black hover:bg-black-500/80" : ""}
      `}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
