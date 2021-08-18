import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKey from "./CalculatorKey";
import CalculatorOperations from "./CalculatorOperations";

const Calculator = ({ classname }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [value, setValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const clearAll = () => {
    setDisplayValue(null);
    setValue(null);
    setDisplayValue("0");
    setOperator(null);
    setWaitingForOperand(false);
  };

  const clearDisplay = () => {
    setDisplayValue("0");
  };

  const toggleSign = () => {
    const newValue = parseFloat(displayValue) * -1;
    setDisplayValue(String(newValue));
  };

  const inputPercent = () => {
    const currentValue = parseFloat(displayValue);

    if (currentValue === 0) return;

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, "");
    const newValue = parseFloat(displayValue) / 100;
    setDisplayValue(String(newValue.toFixed(fixedDigits.length + 2)));
  };

  const inputDot = () => {
    if (!/\./.test(displayValue)) {
      setDisplayValue(displayValue + ".");
      setWaitingForOperand(false);
    }
  };

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(
        displayValue === "0" ? String(digit) : displayValue + digit
      );
    }
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (value == null) {
      setValue(inputValue);
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = CalculatorOperations[operator](currentValue, inputValue);
      setValue(newValue);
      setDisplayValue(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  return (
    <div className={`calculator ${classname}`}>
      <CalculatorDisplay value={displayValue} />
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <CalculatorKey
              className="key-clear secondary-btn"
              onPress={() =>
                displayValue !== "0" ? clearDisplay() : clearAll()
              }
            >
              {displayValue === "0" ? "AC" : "C"}
            </CalculatorKey>
            <CalculatorKey
              className="key-sign secondary-btn"
              onPress={() => toggleSign()}
            >
              ±
            </CalculatorKey>
            <CalculatorKey
              className="key-percent secondary-btn"
              onPress={() => inputPercent()}
            >
              %
            </CalculatorKey>
          </div>
          <div className="digit-keys">
            <CalculatorKey
              className="key-0 key-btn"
              onPress={() => inputDigit(0)}
            >
              0
            </CalculatorKey>
            <CalculatorKey
              className="key-dot key-btn"
              onPress={() => inputDot()}
            >
              ●
            </CalculatorKey>
            <CalculatorKey className="key-btn" onPress={() => inputDigit(1)}>
              1
            </CalculatorKey>
            <CalculatorKey className="key-btn" onPress={() => inputDigit(2)}>
              2
            </CalculatorKey>
            <CalculatorKey className="key-btn" onPress={() => inputDigit(3)}>
              3
            </CalculatorKey>
            <CalculatorKey className="key-btn" onPress={() => inputDigit(4)}>
              4
            </CalculatorKey>
            <CalculatorKey className="key-btn" onPress={() => inputDigit(5)}>
              5
            </CalculatorKey>
            <CalculatorKey className="key-btn" onPress={() => inputDigit(6)}>
              6
            </CalculatorKey>
            <CalculatorKey className="key-btn" onPress={() => inputDigit(7)}>
              7
            </CalculatorKey>
            <CalculatorKey className="key-btn" onPress={() => inputDigit(8)}>
              8
            </CalculatorKey>
            <CalculatorKey className="key-btn" onPress={() => inputDigit(9)}>
              9
            </CalculatorKey>
          </div>
        </div>
        <div>
          <CalculatorKey
            className="accent-btn"
            onPress={() => performOperation("/")}
          >
            ÷
          </CalculatorKey>
          <CalculatorKey
            className="accent-btn"
            onPress={() => performOperation("*")}
          >
            ×
          </CalculatorKey>
          <CalculatorKey
            className="accent-btn"
            onPress={() => performOperation("-")}
          >
            −
          </CalculatorKey>
          <CalculatorKey
            className="accent-btn"
            onPress={() => performOperation("+")}
          >
            +
          </CalculatorKey>
          <CalculatorKey
            className="accent-btn"
            onPress={() => performOperation("=")}
          >
            =
          </CalculatorKey>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
