import readlineSync from 'readline-sync';

// eslint-disable-next-line import/extensions
import { description, getRandomInRange } from '../index.js';
// eslint-disable-next-line import/extensions
import greeting from './brain-games.js';

const runGame = () => {
  description('Find the greatest common divisor of given numbers.');

  const game = () => {
    function NOD(x, y) {
      if (y > x) return NOD(Math.abs(y), Math.abs(x));
      if (!y) return Math.abs(x);
      return NOD(Math.abs(y), Math.abs(x) % Math.abs(y));
    }

    for (let i = 1; i < 4; i += 1) {
      const randomNumber1 = getRandomInRange(-10, 100);
      const randomNumber2 = getRandomInRange(-10, 100);

      const calc = NOD(randomNumber1, randomNumber2);

      const game123 = (playerAnswer) => {
        if (playerAnswer - calc === 0) {
          return console.log('Correct!');
        }

        if (playerAnswer - calc > 0) {
          return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${NOD(randomNumber1, randomNumber2)}'.\nLet's try again, ${greeting}!`);
        }
        if (playerAnswer < 0) {
          return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${NOD(randomNumber1, randomNumber2)}'.\nLet's try again, ${greeting}!`);
        }
        if (playerAnswer === '') {
          return console.log(`It's wrong answer ;(. Correct answer was ${NOD(randomNumber1, randomNumber2)}.\nLet's try again, ${greeting}!`);
        }

        return console.log(`It's wrong answer ;(. Correct answer was ${NOD(randomNumber1, randomNumber2)}.\nLet's try again, ${greeting}!`);
      };

      const thePlayerChoice = readlineSync.question(`Question: ${randomNumber1} ${randomNumber2} \nYour answer: `);
      game123(thePlayerChoice);

      if (thePlayerChoice - calc !== 0) break;

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
