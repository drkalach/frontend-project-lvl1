import readlineSync from 'readline-sync';

const runGame = () => {
  const welcomeString = 'Welcome to the Brain Games!';
  console.log(welcomeString);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hi ${userName}!`);

  const description = 'What number is missing in the progression?';
  console.log(description);

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const game = () => {
    for (let i = 1; i < 4; i += 1) {
      const a1 = getRandomInRange(1, 150);
      const d = getRandomInRange(1, 13);
      const randomPlacementOfMissingCharacters = getRandomInRange(4, 10);

      const myString = `${a1} ${a1 + d} ${a1 + (2 * d)} ${a1 + (4 - 1) * d} ${a1 + (5 - 1) * d} ${a1 + (6 - 1) * d} ${a1 + (7 - 1) * d} ${a1 + (8 - 1) * d} ${a1 + (9 - 1) * d} ${a1 + (10 - 1) * d}`;
      const myNewString = myString.replace(a1 + (randomPlacementOfMissingCharacters - 1) * d, '..');
      const game123 = (playerAnswer) => {
        if (playerAnswer - (a1 + (randomPlacementOfMissingCharacters - 1) * d) === 0) {
          return console.log('Correct!');
        }

        if (playerAnswer - ((randomPlacementOfMissingCharacters - 1) * d) > 0) {
          return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${a1 + (randomPlacementOfMissingCharacters - 1) * d}'.\nLet's try again, ${userName}!`);
        }
        if (playerAnswer < 0) {
          return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${a1 + (randomPlacementOfMissingCharacters - 1) * d}'.\nLet's try again, ${userName}!`);
        }
        if (playerAnswer === '') {
          return console.log(`It's wrong answer ;(. Correct answer was ${a1 + (randomPlacementOfMissingCharacters - 1) * d}.\nLet's try again, ${userName}!`);
        }

        return console.log(`It's wrong answer ;(. Correct answer was ${a1 + (randomPlacementOfMissingCharacters - 1) * d}.\nLet's try again, ${userName}!`);
      };

      const thePlayerChoice = readlineSync.question(`Question: ${myNewString}\nYour answer: `);
      game123(thePlayerChoice);

      if (thePlayerChoice - (a1 + (randomPlacementOfMissingCharacters - 1) * d) !== 0) break;

      const congratulations = () => {
        let result;
        if (i === 3) {
          console.log(`Congratulations, ${userName}!`);
        }
        return result;
      };

      congratulations();
    }
  };

  game();
};

export default runGame;
