import readlineSync from 'readline-sync';

// eslint-disable-next-line import/extensions
import { description, getRandomInRange } from '../index.js';
// eslint-disable-next-line import/extensions
import greeting from './brain-games.js';

const runGame = () => {
  description('What is the result of the expression?');

  const game = () => {
    for (let i = 1; i < 4; i += 1) {
      const randomNumber1 = getRandomInRange(-10, 20);
      const randomNumber2 = getRandomInRange(-10, 20);

      const arr = ['+', '-', '*'];

      const rand = Math.floor(Math.random() * arr.length);

      const calculationResult = () => {
        let result;
        if (arr[rand] === '+') {
          result = randomNumber1 + randomNumber2;
        }

        if (arr[rand] === '-') {
          result = randomNumber1 - randomNumber2;
        }

        if (arr[rand] === '*') {
          result = randomNumber1 * randomNumber2;
        }
        return result;
      };

      const calc = calculationResult(randomNumber1, randomNumber2);
      const operator = arr[rand];

      const game123 = (playerAnswer) => {
        if (playerAnswer - calc === 0) {
          return console.log('Correct!');
        }

        if (playerAnswer === '') {
          return console.log(`It's wrong answer ;(. Correct answer was ${calc}.\nLet's try again, ${greeting}!`);
        }
        if (playerAnswer < 0) {
          return console.log(
            `'${playerAnswer}' is wrong answer ;(. Correct answer was '${calc}'.\nLet's try again, ${greeting}!`,
          );
        }

        if (playerAnswer - calc > 0) {
          return console.log(
            `'${playerAnswer}' is wrong answer ;(. Correct answer was '${calc}'.\nLet's try again, ${greeting}!`,
          );
        }
        return console.log(`It's wrong answer ;(. Correct answer was ${calc}.\nLet's try again, ${greeting}!`);
      };

      const thePlayerChoice = readlineSync.question(
        `Question: ${randomNumber1} ${operator} ${randomNumber2} \nYour answer: `,
      );
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
