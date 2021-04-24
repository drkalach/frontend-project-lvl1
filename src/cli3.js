import readlineSync from 'readline-sync';

const play2 = () => {
  const welcomeString = 'Welcome to the Brain Games!';
  console.log(welcomeString);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const description = 'What is the result of the expression?';
  console.log(description);

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const game = () => {
    for (let i = 1; i < 4; i += 1) {
      const randomNumber1 = getRandomInRange(10, 20);
      const randomNumber2 = getRandomInRange(1, 10);

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
          return console.log(`It's wrong answer ;(. Correct answer was ${calc}.\nLet's try again, ${userName}!`);
        }

        if (playerAnswer - calc > 0) {
          return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${calc}'.\nLet's try again, ${userName}!`);
        }
        return console.log(`It's wrong answer ;(. Correct answer was ${calc}.\nLet's try again, ${userName}!`);
      };

      const thePlayerChoice = readlineSync.question(`Question: ${randomNumber1} ${operator} ${randomNumber2} \nYour answer: `);
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

export default play2;
