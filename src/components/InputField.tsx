import React from "react";

interface InputFieldProps {
  value: number;
  onChange: (value: number) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="mt-52">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border border-[#E29A2D] rounded-md w-24"
      />
    </div>
  );
};

export default InputField;
