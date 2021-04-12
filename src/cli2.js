export default (play) => {
  const description =
    'Answer "yes" if the number is even, otherwise answer "no".';

  console.log(description);

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomNumerIs = getRandomInRange(-100000, 100000);

  console.log(`Question: ${randomNumerIs}`);

  function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }

  console.log(evenOrOdd(randomNumerIs));
};
