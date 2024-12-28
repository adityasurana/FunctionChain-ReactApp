import React from "react";

export interface FunctionCardProps {
  id: number;
  equation: string;
  input: number;
  output: number;
  onEquationChange: (id: number, equation: string) => void;
}

const FunctionCard: React.FC<FunctionCardProps> = ({
  id,
  equation,
  onEquationChange,
}) => {
  const handleEquationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onEquationChange(id, e.target.value);
  };

  const getNextFunctionOptions = () => {
    switch (id) {
      case 1:
        return ["Function 2"];
      case 2:
        return ["Function 4"];
      case 3:
        return [""];
      case 4:
        return ["Function 5"];
      case 5:
        return ["Function 3"];
      default:
        return [];
    }
  };

  return (
    <div className="bg-white shadow-md border rounded-lg p-4 px-6 w-60">
      <h3
        className="font-semibold text-[14px] leading-[16.94px] text-[#A5A5A5] font-[Inter]"
      >
        Function {id}
      </h3>
      <label className="block text-sm font-medium mb-1 mt-5">Equation</label>
      <input
        type="text"
        value={equation}
        onChange={handleEquationChange}
        className="border border-gray-300 rounded-md w-full px-2 py-1"
      />

      {/* Next Function dropdown */}
      <label className="block text-sm font-medium mt-4 mb-1">Next Function</label>
      <select
        value={getNextFunctionOptions()[0]}
        disabled
        className="border border-gray-300 rounded-md w-full px-2 py-1 bg-gray-200"
      >
        {getNextFunctionOptions().map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div className="flex justify-between items-center mt-6">
        <p className="text-sm">Input</p>
        <p className="text-sm">Output</p>
      </div>
    </div>
  );
};

export default FunctionCard;
