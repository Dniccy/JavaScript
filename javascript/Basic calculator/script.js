   function calculate(operation) {
      // Retrieve and Parse Input Values
      const number1 = parseFloat(document.getElementById('number1').value);
      const number2 = parseFloat(document.getElementById('number2').value);
      let result;

      // Check Validity of Input Values
      if (isNaN(number1) || isNaN(number2)) {
        result = 'Please enter valid numbers.';
      } else {
        switch (operation) {
          // Perform Operations
          case 'add':
            result = `${number1} + ${number2} = ${number1 + number2}`;
            break;
          case 'subtract':
            result = `${number1} - ${number2} = ${number1 - number2}`;
            break;
          case 'multiply':
            result = `${number1} × ${number2} = ${number1 * number2}`;
            break;
          case 'divide':
            // Handle Division by Zero
            if (number2 === 0) {
              result = 'Division by zero is not allowed.';
            } else {
              result = `${number1} ÷ ${number2} = ${number1 / number2}`;
            }
            break;
          default:
            result = 'Unknown operation.';
        }
      }

      // Update the Result Display
      document.getElementById('result').innerText = `Result: ${result}`;
    }