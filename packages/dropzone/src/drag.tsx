import React from "react";

type ButtonProps = React.HTMLAttributes<ButtonProps> & {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
};

export default function ButtonD(props: ButtonProps) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${props.className}`}
    >
      {props.children}
    </button>
  );
}
