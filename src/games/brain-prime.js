import readlineSync from 'readline-sync';

const play5 = () => {
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
      return false;
    }
    if (n === 2) {
      return true;
    }
    for (let x = 2; x < n; x += 1) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  };

  const game = () => {
    for (let i = 1; i < 4; i += 1) {
      const randomNumber = getRandomInRange(1, 100);

      const game123 = (playerAnswer) => {
        if (playerAnswer === 'yes' && isPrime(randomNumber) === true) {
          return console.log('Correct!');
        }

        if (playerAnswer === 'no' && isPrime(randomNumber) === false) {
          return console.log('Correct!');
        }
        if (playerAnswer === 'yes' && isPrime(randomNumber) === false) {
          return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
        }
        if (playerAnswer === 'no' && isPrime(randomNumber) === true) {
          return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
        }

        return console.log(`It's wrong answer ;(. Correct answer was 'yes' or 'no'.\nLet's try again, ${userName}!`);
      };

      const thePlayerChoice = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);
      game123(thePlayerChoice);

      if (
        (thePlayerChoice === 'no' && isPrime(randomNumber) === true)
                || (thePlayerChoice === 'yes' && isPrime(randomNumber) === false)
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

export default play5;
