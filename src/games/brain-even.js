import readlineSync from 'readline-sync';

// eslint-disable-next-line import/extensions
import { description, getRandomInRange } from '../index.js';
// eslint-disable-next-line import/extensions
import greeting from './brain-games.js';

const runGame = () => {
  description('Answer "yes" if the number is even, otherwise answer "no".');

  const game = () => {
    for (let i = 1; i < 4; i += 1) {
      const randomNumber = getRandomInRange(1, 100);

      const isEven = (number) => (number % 2 === 0 ? 'Even' : 'Odd');

      const game123 = (playerAnswer) => {
        if (playerAnswer === 'yes' && isEven(randomNumber) === 'Even') {
          return console.log('Correct!');
        }

        if (playerAnswer === 'no' && isEven(randomNumber) === 'Odd') {
          return console.log('Correct!');
        }
        if (playerAnswer === 'yes' && isEven(randomNumber) === 'Odd') {
          return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${greeting}!`);
        }
        if (playerAnswer === 'no' && isEven(randomNumber) === 'Even') {
          return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${greeting}!`);
        }

        return console.log(`It's wrong answer ;(. Correct answer was 'yes' or 'no'.\nLet's try again, ${greeting}!`);
      };

      const thePlayerChoice = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);
      game123(thePlayerChoice);

      if (
        (thePlayerChoice === 'no' && isEven(randomNumber) === 'Even')
                || (thePlayerChoice === 'yes' && isEven(randomNumber) === 'Odd')
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
