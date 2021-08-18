import React from "react";

const CalculatorKey = ({ onPress, className, ...props }) => {
  return (
    <button
      className={`calculator-key ${className}`}
      {...props}
      onClick={onPress}
    />
  );
};

export default CalculatorKey;
