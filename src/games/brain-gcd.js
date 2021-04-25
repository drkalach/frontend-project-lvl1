import readlineSync from 'readline-sync';

const play3 = () => {
  const welcomeString = 'Welcome to the Brain Games!';
  console.log(welcomeString);

  const userName = readlineSync.question('May I have your name?');

  console.log(`Hi ${userName}!`);

  const description = 'Find the greatest common divisor of given numbers.';
  console.log(description);

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function NOD(x, y) {
    if (y > x) return NOD(Math.abs(y), Math.abs(x));
    if (!y) return Math.abs(x);
    return NOD(Math.abs(y), Math.abs(x) % Math.abs(y));
  }

  const game = () => {
    for (let i = 1; i < 4; i += 1) {
      const randomNumber1 = getRandomInRange(-10, 100);
      const randomNumber2 = getRandomInRange(-10, 100);

      const calc = NOD(randomNumber1, randomNumber2);

      const game123 = (playerAnswer) => {
        if (playerAnswer - calc === 0) {
          return console.log('Correct!');
        }

        if (playerAnswer - calc > 0) {
          return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${NOD(randomNumber1, randomNumber2)}'.\nLet's try again, ${userName}!`);
        }
        if (playerAnswer < 0) {
          return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${NOD(randomNumber1, randomNumber2)}'.\nLet's try again, ${userName}!`);
        }
        if (playerAnswer === '') {
          return console.log(`It's wrong answer ;(. Correct answer was ${NOD(randomNumber1, randomNumber2)}.\nLet's try again, ${userName}!`);
        }

        return console.log(`It's wrong answer ;(. Correct answer was ${NOD(randomNumber1, randomNumber2)}.\nLet's try again, ${userName}!`);
      };

      const thePlayerChoice = readlineSync.question(`Question: ${randomNumber1} ${randomNumber2} \nYour answer: `);
      game123(thePlayerChoice);

      if (thePlayerChoice - calc !== 0) break;

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

export default play3;
