import readlineSync from 'readline-sync';

const runGame = () => {
  const welcomeString = 'Welcome to the Brain Games!';
  console.log(welcomeString);

  const userName = readlineSync.question('May I have your name?');

  console.log(`Hi ${userName}!`);

  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log(description);

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

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

  const game = () => {
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
          return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
        }
        if (playerAnswer === 'no' && isPrime(randomNumber) === 'prime') {
          return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
        }

        return console.log(`It's wrong answer ;(. Correct answer was 'yes' or 'no'.\nLet's try again, ${userName}!`);
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
