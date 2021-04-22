import readlineSync from 'readline-sync';

const greet = () => {
  const welcomeString = 'Welcome to the Brain Games!';
  console.log(welcomeString);

  const userName = readlineSync.question('May I have your name?');

  console.log(`Hi ${userName}!`);
};

export default greet;

greet();
