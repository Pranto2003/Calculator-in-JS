document.addEventListener("DOMContentLoaded", function () {
    let screen = document.getElementById("calculator-screen");
    let currentInput = "";
    let operator = null;
    let firstOperand = null;

    const buttons = document.querySelectorAll(".button");

    buttons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        const value = e.target.innerText;

        if (!isNaN(value)) {
          // If it's a number
          currentInput += value;
          screen.innerText = currentInput;
        } else if (value === "AC") {
          // Clear everything
          currentInput = "";
          firstOperand = null;
          operator = null;
          screen.innerText = "0"; // Reset to 0
        } else if (value === "=") {
          // Perform the calculation
          if (operator && firstOperand !== null && currentInput) {
            const result = evaluate(firstOperand, operator, currentInput);
            screen.innerText = result;
            currentInput = result;
            firstOperand = null;
            operator = null;
          }
        } else {
          // It's an operator
          if (currentInput) {
            firstOperand = currentInput;
            currentInput = "";
            operator = value;
          }
        }
      });
    });

    function evaluate(operand1, operator, operand2) {
      operand1 = parseFloat(operand1);
      operand2 = parseFloat(operand2);
      switch (operator) {
        case "+":
          return operand1 + operand2;
        case "-":
          return operand1 - operand2;
        case "*":
          return operand1 * operand2;
        case "/":
          return operand1 / operand2;
        default:
          return 0;
      }
    }
  });