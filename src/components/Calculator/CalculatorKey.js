import React from "react";

class CalculatorKey extends React.Component {
  render() {
    const { onPress, className, ...props } = this.props;

    return (
      <button
        className={`calculator-key ${className}`}
        {...props}
        onClick={onPress}
      />
    );
  }
}

export default CalculatorKey;
