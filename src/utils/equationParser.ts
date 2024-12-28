export const parseEquation = (equation: string, input: number): number => {
    try {
      let sanitizedEquation = equation.replace(/x/g, `(${input})`);
      sanitizedEquation = sanitizedEquation.replace(/\^/g, "**");
  
      // Validating the equation to allow only valid characters.
      if (!/^[0-9+\-*/()^.]+$/.test(sanitizedEquation)) {
        throw new Error("Invalid characters in equation");
      }
      const result = Function(`'use strict'; return (${sanitizedEquation});`)();
  
      if (typeof result !== "number" || isNaN(result)) {
        throw new Error("Invalid equation result");
      }
  
      return result;
    } catch (error) {
      console.error("Equation parsing error:", error);
      return NaN; // Return NaN for invalid equations
    }
  };
  