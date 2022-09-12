'use strict';

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  }
});
