import React from "react";

const FormInput = ({ handleChange, label, autoComplete, type, value }) => {
  return (
    <div className="flex-column w-100">
      <label className="mb-2">{label}</label>
      <input name={label} type={type} autoComplete={autoComplete} onChange={handleChange} />
    </div>
  )
};

export default FormInput;