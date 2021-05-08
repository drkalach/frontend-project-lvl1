import readlineSync from 'readline-sync';

// eslint-disable-next-line import/extensions
import { description, getRandomInRange } from '../index.js';
// eslint-disable-next-line import/extensions
import greeting from './brain-games.js';

const runGame = () => {
  description('What number is missing in the progression?');

  const game = () => {
    for (let i = 1; i < 4; i += 1) {
      const a1 = getRandomInRange(1, 150);
      const d = getRandomInRange(1, 13);
      const symbol = getRandomInRange(0, 12);
      const myString = [
        [a1],
        [a1 + d],
        [a1 + 2 * d],
        [a1 + (4 - 1) * d],
        [a1 + (5 - 1) * d],
        [a1 + (6 - 1) * d],
        [a1 + (7 - 1) * d],
        [a1 + (8 - 1) * d],
        [a1 + (9 - 1) * d],
        [a1 + (10 - 1) * d],
        [a1 + (11 - 1) * d],
        [a1 + (12 - 1) * d],
        [a1 + (13 - 1) * d],
      ];

      const missingNumber = myString[symbol];

      myString[symbol] = '..';

      const myNewString = myString.join(' ');

      const game123 = (playerAnswer) => {
        if (playerAnswer - missingNumber === 0) {
          return console.log('Correct!');
        }

        if (playerAnswer - missingNumber > 0) {
          return console.log(
            `'${playerAnswer}' is wrong answer ;(. Correct answer was '${missingNumber}'.\nLet's try again, ${greeting}!`,
          );
        }
        if (playerAnswer < 0) {
          return console.log(
            `'${playerAnswer}' is wrong answer ;(. Correct answer was '${missingNumber}'.\nLet's try again, ${greeting}!`,
          );
        }
        if (playerAnswer === '') {
          return console.log(
            `It's wrong answer ;(. Correct answer was ${missingNumber}.\nLet's try again, ${greeting}!`,
          );
        }

        return console.log(`It's wrong answer ;(. Correct answer was ${missingNumber}.\nLet's try again, ${greeting}!`);
      };

      const thePlayerChoice = readlineSync.question(`Question: ${myNewString}\nYour answer: `);
      game123(thePlayerChoice);

      if (thePlayerChoice - missingNumber !== 0) break;

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
