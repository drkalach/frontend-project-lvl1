export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const description = (text) => {
  console.log(text);
};
