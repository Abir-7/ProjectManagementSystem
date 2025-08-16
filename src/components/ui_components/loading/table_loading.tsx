import React from "react";

const TableLoading = () => {
  return (
    <div className="flex items-center justify-center  pt-56 bg-background">
      <div className="flex flex-col items-center gap-2 text-foreground">
        <svg
          className="animate-spin h-6 w-6 text-foreground"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          ></path>
        </svg>
        <span className="text-sm font-medium text-foreground">Loading...</span>
      </div>
    </div>
  );
};

export default TableLoading;
