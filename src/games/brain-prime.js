import readlineSync from 'readline-sync';

// eslint-disable-next-line import/extensions
import { description, getRandomInRange } from '../index.js';
// eslint-disable-next-line import/extensions
import greeting from './brain-games.js';

const runGame = () => {
  description('Answer "yes" if given number is prime. Otherwise answer "no".');

  const game = () => {
    const isPrime = (n) => {
      if (n === 1) {
        return 'notPrime';
      }
      if (n === 2) {
        return 'prime';
      }
      for (let i = 2; i < n; i += 1) {
        if (n % i === 0) {
          return 'notPrime';
        }
      }
      return 'prime';
    };

    for (let i = 1; i < 4; i += 1) {
      const randomNumber = getRandomInRange(1, 100);

      const game123 = (playerAnswer) => {
        if (playerAnswer === 'yes' && isPrime(randomNumber) === 'prime') {
          return console.log('Correct!');
        }

        if (playerAnswer === 'no' && isPrime(randomNumber) === 'notPrime') {
          return console.log('Correct!');
        }
        if (playerAnswer === 'yes' && isPrime(randomNumber) === 'notPrime') {
          return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${greeting}!`);
        }
        if (playerAnswer === 'no' && isPrime(randomNumber) === 'prime') {
          return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${greeting}!`);
        }

        return console.log(`It's wrong answer ;(. Correct answer was 'yes' or 'no'.\nLet's try again, ${greeting}!`);
      };

      const thePlayerChoice = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);
      game123(thePlayerChoice);

      if (
        (thePlayerChoice === 'no' && isPrime(randomNumber) === 'prime')
                || (thePlayerChoice === 'yes' && isPrime(randomNumber) === 'notPrime')
                || thePlayerChoice === ''
                || (thePlayerChoice !== 'yes' && thePlayerChoice !== 'no')
      ) break;

      const congratulations = () => {
        let result;
        if (i === 3) {
          console.log(`Congratulations, ${greeting}!`);
        }
        return result;
      };

      congratulations();
    }
  };

  game();
};

export default runGame;
