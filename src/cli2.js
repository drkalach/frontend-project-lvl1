import readlineSync from 'readline-sync';

export default (play) => {
  const welcomeString = 'Welcome to the Brain Games!';
  console.log(welcomeString);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(description);

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const isEven = (number) => (number % 2 === 0 ? 'Even' : 'Odd');

  const game = () => {
    for (let i = 0; i < 3; i++) {
      const randomNumber = getRandomInRange(1, 100);

      const game123 = (playerAnswer) => {
        if (playerAnswer === 'yes' && isEven(randomNumber) === 'Even') {
          return console.log('Correct!');
        }

        if (playerAnswer === 'no' && isEven(randomNumber) === 'Odd') {
          return console.log('Correct!');
        }
        if (playerAnswer === 'yes' && isEven(randomNumber) === 'Odd') {
          return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
        }
        if (playerAnswer === 'no' && isEven(randomNumber) === 'Even') {
          return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
        }

        return console.log(`It's wrong answer ;(. Correct answer was 'yes' or 'no'.\nLet's try again, ${userName}!`);
      };

      const thePlayerChoice = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);
      game123(thePlayerChoice);

      if (
        (thePlayerChoice === 'no' && isEven(randomNumber) === 'Even')
                || (thePlayerChoice === 'yes' && isEven(randomNumber) === 'Odd')
                || thePlayerChoice === ''
                || (thePlayerChoice !== 'yes' && thePlayerChoice !== 'no')
      ) break;

      const test = () => {
        if (i === 2) {
          return console.log(`Congratulations, ${userName}!`);
        }
      };

      test();
    }
  };

  game();
};
