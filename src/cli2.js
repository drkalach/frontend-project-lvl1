import readlineSync from 'readline-sync'

export default (play) => {
    const welcomeString = 'Welcome to the Brain Games!'
    console.log(welcomeString)

    const userName = readlineSync.question('May I have your name?')
    console.log(`Hello, ${userName}!`)

    const description =
        'Answer "yes" if the number is even, otherwise answer "no".'
    console.log(description)

    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const randomNumberIs = getRandomInRange(-100, 100)

    const game = (playerAnswer) => {
        if (playerAnswer === 'yes' && randomNumberIs % 2 === 0 || playerAnswer === 'no' && randomNumberIs % 2 !== 0) {
            return console.log('Correct!');
             }

        if (playerAnswer === 'yes' && randomNumberIs % 2 !== 0 || playerAnswer === 'no' && randomNumberIs % 2 === 0) {
            return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
        }
    }
    
    const firstNumber = readlineSync.question(`Question: ${randomNumberIs} \nYour answer: `)
    console.log(game(firstNumber));
};
