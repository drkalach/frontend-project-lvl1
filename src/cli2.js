import readlineSync from 'readline-sync';

export default (play) => {
    const welcomeString = 'Welcome to the Brain Games!';
    console.log(welcomeString);

    const userName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${userName}!`);

    const description = 'Answer "yes" if the number is even, otherwise answer "no".';
    console.log(description);

    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const firstRandomNumberIs = getRandomInRange(-1000, 1000);

    const game1 = (playerAnswer) => {
        if ((playerAnswer === 'yes' && firstRandomNumberIs % 2 === 0) || (playerAnswer === 'no' && firstRandomNumberIs % 2 !== 0)) {
            return console.log('Correct!');
        }
        if (playerAnswer === 'yes' && firstRandomNumberIs % 2 !== 0) {
            return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
        }
        if (playerAnswer === 'no' && firstRandomNumberIs % 2 === 0) {
            return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
        }

        return console.log(`It's wrong answer ;(. Correct answer was 'yes' or 'no'.\nLet's try again, ${userName}!`);
    };

    const firstNumber = readlineSync.question(`Question: ${firstRandomNumberIs} \nYour answer: `);
    game1(firstNumber);
  };