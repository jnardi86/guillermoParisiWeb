import React from 'react';

const TextInputComponent = ({ id, label, type = "text", value, onChange }) => {
  return (
    <div>
      <label
        className="block font-Poppins text-base text-DarkBlue font-Semibold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required
        className="w-full p-3 bg-LightGray_2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
      />
    </div>
  );
}

export default TextInputComponent;
