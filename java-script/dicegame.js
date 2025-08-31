const rollDice = () => {
  let dice = Math.floor(Math.random() * 6) + 1;
  document.querySelector('#diceNumber').innerText = 'you rolled:' + dice;
  console.log(dice);
  if (dice === 6) {
    document.querySelector('#result').innerText = 'You Win!';
    document.querySelector('#result').style.color = 'green';
  } else {
    document.querySelector('#result').innerText = 'Try Again!';
    document.querySelector('#result').style.color = 'red';
  }
};
const restartGame = () => {
  document.querySelector('#diceNumber').innerText = '';
  document.querySelector('#result').innerText = ' ';
};
