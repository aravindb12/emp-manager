import React from "react";

const Button = ({ text, onClick}) => {
  return (
    <button
      className="rounded-md my-6 px-3 py-2 text-sm font-semibold focus-visible:outline 
    focus-visible:outline-2 focus-visible:outline-offset-2 text-gray-900 bg-slate-20"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
