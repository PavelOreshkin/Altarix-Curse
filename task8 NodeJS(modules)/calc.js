
const calculator = (operand1, operator, operand2) => {
  if (typeof (operand1) !== "number") throw { operand1: operand1 }
  if (typeof (operand2) !== "number") throw { operand2: operand2 }
  if (typeof (operand1) === "number" && typeof (operand2) === "number") {
    switch (operator) {
      case "+": return operand1 + operand2;
      case "-": return operand1 - operand2;
      case "*": return operand1 * operand2;
      case "/": return operand1 / operand2;
      default: throw { operator: operator }
    }
  }
}

module.exports = calculator;