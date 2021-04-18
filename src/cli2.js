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

    const RandomNumberIs = getRandomInRange(1, 100);

    const game = () => {
        const game1 = (playerAnswer) => {
            if ((playerAnswer === 'yes' && RandomNumberIs % 2 === 0) || (playerAnswer === 'no' && RandomNumberIs % 2 !== 0)) {
                return console.log('Correct!');
            }
            if (playerAnswer === 'yes' && RandomNumberIs % 2 !== 0) {
                return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
            }
            if (playerAnswer === 'no' && RandomNumberIs % 2 === 0) {
                return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
            }

            return console.log(`It's wrong answer ;(. Correct answer was 'yes' or 'no'.\nLet's try again, ${userName}!`);
        };

        const Number = readlineSync.question(`Question: ${RandomNumberIs} \nYour answer: `);
        game1(Number);
    };

    const test = () => {
        let result = game();

        for (let i = 1; i < 3; i++) {
            game();
        }
        return result;
    };

    test();
};
