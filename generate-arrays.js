function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateArray(min = 12, max = 20) {
  let arr = [];
  let length = getRandom(min, max);
  for (let i = 0; i < length; i++) {
    arr.push(getRandom(0, 1000));
  }
  return arr;
}
