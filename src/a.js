const test = () => {
  const result = game();

  for (let i = 1; i < 3; i++) {
    game();
  }

  return result;
};

test();

console.log(`Congratulations, ${userName}!`);
