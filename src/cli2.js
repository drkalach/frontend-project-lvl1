import readlineSync from 'readline-sync';

export default (play) => {
  const welcomeString = 'Welcome to the Brain Games!';
  console.log(welcomeString);

  const userName = readlineSync.question('May I have your name?');
  console.log(`Hi ${userName}!`);

  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(description);

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomNumerIs = getRandomInRange(-100000, 100000);
  console.log(`Question: ${randomNumerIs}`);

  function evenOrOdd() {
    return randomNumerIs % 2 === 0 ? 'Even' : 'Odd';
  }
  console.log(evenOrOdd());




  
};
