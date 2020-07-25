import React from "react";

const InputSelect = React.forwardRef(
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

          <select
            name={name}
            className="focus:outline-none w-full"
            placeholder={placeholder}
            ref={ref}
          >
            <option defaultValue={name}>{placeholder}</option>
            <option value="fr">France</option>
            <option value="uk">United Kingdom</option>
            <option value="es">Spain</option>
          </select>
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}
      </div>
    );
  }
);

export default InputSelect;
