import readlineSync from 'readline-sync';

const greeting = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
console.log(`Hi ${greeting}!`);

export default greeting;
