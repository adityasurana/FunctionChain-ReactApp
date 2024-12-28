import React, { useState, useEffect } from "react";
import FunctionCard from "./components/FunctionCard";
import InputField from "./components/InputField";
import { parseEquation } from "./utils/equationParser";
import ChainConnector from "./components/ChainConnector";
import './styles/index.css'

interface Connection {
  from: number;
  to: number;
}

const App: React.FC = () => {
  const [initialValue, setInitialValue] = useState<number>(2);
  const [equations, setEquations] = useState<string[]>([
    "x^2",
    "2*x+4",
    "x^2+20",
    "x-2",
    "x/2",
  ]);
  const [outputs, setOutputs] = useState<number[]>([0, 0, 0, 0, 0]);

  const connections: Connection[] = [
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 4, to: 5 },
    { from: 5, to: 3 },
  ];

  const calculateOutputs = () => {
    const newOutputs: number[] = Array(equations.length).fill(NaN);
    const processed: Set<number> = new Set();
  
    const processFunction = (id: number) => {
      if (processed.has(id)) return;
  
      const connection = connections.find((conn) => conn.to === id);
      const connectedInput =
        connection && !isNaN(newOutputs[connection.from - 1])
          ? newOutputs[connection.from - 1]
          : id === 1
          ? initialValue
          : NaN;
  
  
      if (!isNaN(connectedInput)) {
        const value = parseEquation(equations[id - 1], connectedInput);
        newOutputs[id - 1] = value;
        processed.add(id);
      } else {
        console.warn(`Skipping function ${id} due to missing input`);
      }
    };
  
    for (const conn of connections) {
      processFunction(conn.from);
      processFunction(conn.to);
    }
  
    setOutputs(newOutputs);
  };
  

  const handleEquationChange = (id: number, equation: string) => {
    const newEquations = [...equations];
    newEquations[id - 1] = equation;
    setEquations(newEquations);
  };

  useEffect(() => {
    calculateOutputs();
  }, [initialValue, equations]);

  return (
    <div className="relative h-screen flex flex-col items-center">
      <div className="flex items-start mt-20 space-x-8">
        <div className="relative mr-12">
          <div className="input-label">
            Initial value of x
          </div>
          <InputField value={initialValue} onChange={setInitialValue} />
        </div>

        {/* Cards arranged in rows */}
        <div
          className="grid grid-cols-3 gap-x-20 gap-y-6 mt-2 relative"
          style={{ marginLeft: "-20px" }}
        >
          {outputs.slice(0, 3).map((output, index) => (
            <FunctionCard
              key={index}
              id={index + 1}
              equation={equations[index]}
              input={index === 0 ? initialValue : outputs[index - 1]}
              output={output}
              onEquationChange={handleEquationChange}
            />
          ))}

          <div className="absolute top-48 right-[-200px] mt-2 w-[200px] pl-5">
            <div className="output-label">
              Final Output y
            </div>
            <input
              type="text"
              value={outputs[2] ?? ""}
              readOnly
              className="border border-[#4CAF79] rounded-md w-20 text-right pr-2 pl-2"
            />
          </div>

          <div className="col-span-3 flex justify-center space-x-16 mt-12">
            {outputs.slice(3).map((output, index) => (
              <FunctionCard
                key={index + 3}
                id={index + 4}
                equation={equations[index + 3]}
                input={outputs[index + 2]}
                output={output}
                onEquationChange={handleEquationChange}
              />
            ))}
          </div>
        </div>
      </div>
      <ChainConnector />
    </div>
  );
};

export default App;
