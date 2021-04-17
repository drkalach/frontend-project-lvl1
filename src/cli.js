import readlineSync from 'readline-sync';

export default (greet) => {
  const welcomeString = 'Welcome to the Brain Games!';
  console.log(welcomeString);

  const userName = readlineSync.question('May I have your name?');

  console.log(`Hi ${userName}!`);
};
