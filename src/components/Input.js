import React from "react";

const Input = React.forwardRef(
  (
    { className, name, label, type, icon, placeholder, size = 20, error },
    ref
  ) => {
    return (
      <div className={`${className} mb-5`}>
        <label className="font-semibold text-sm text-gray2" htmlFor={name}>
          {label}
        </label>
        <div className="flex items-center rounded-12 border p-3 border-gray3 w-full">
          <i className="material-icons text-gray3 mr-3">{icon}</i>
          <input
            className="focus:outline-none w-full"
            type={type}
            name={name}
            placeholder={placeholder}
            size={size}
            ref={ref}
          />
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}
      </div>
    );
  }
);

export default Input;
