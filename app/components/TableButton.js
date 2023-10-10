import React from "react";

const TableButton = ({text, onClick}) => {
  return (
    <button
      className="rounded-md py-1 px-2 mx-2 text-sm font-medium focus-visible:outline 
    focus-visible:outline-2 focus-visible:outline-offset-2 text-gray-900 bg-slate-200"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TableButton;
