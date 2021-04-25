function NOD(x, y) {
  if (y) {
    return NOD(y, x % y);
  }
  return Math.abs(x);
}

console.log(NOD(-4, 8));
