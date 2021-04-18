function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isEven = (number) => (number % 2 === 0 ? 'Even' : 'Odd');

console.log(isEven(27));
