export default (play) => {
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(getRandomInRange(-100000, 100000));
};
