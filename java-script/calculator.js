let currentOperation = null;
const setOperation = (op) => {
  currentOperation = op;
};
const calculate = () => {
  const firstNum = Number(document.querySelector('#num1').value);
  const secondNum = Number(document.querySelector('#num2').value);
  let result;

  if (!currentOperation) {
    result = 'Please select an operation';
  } else {
    switch (currentOperation) {
      case '+':
        result = firstNum + secondNum;
        document.querySelector('#para').innerText = 'Addition';
        break;
      case '-':
        result = firstNum - secondNum;
        document.querySelector('#para').innerText = 'Subtraction';
        break;
      case '*':
        result = firstNum * secondNum;
        document.querySelector('#para').innerText = 'Multiplication';
        break;
      case '/':
        result =
          secondNum !== 0 ? firstNum / secondNum : 'Cannot divide by zero';
        document.querySelector('#para').innerText = 'division';
        break;
      default:
        result = 'Invalid operation';
    }

    document.getElementById('result').textContent = result;
  }
};
