function findLowest(arr, start) {
  let lowest = start;
  const { length } = arr;
  for (let i = start + 1; i < length; i++) {
    const current = arr[i];
    if (current < lowest) {
      lowest = current;
    }
  }
  return lowest;
}

// function swap(a, b) {
//   let first = a;
//   let second = b;
//
// }

function selection(arr) {
  arr[0] = findLowest(arr, 0);
  let length = arr.length;
  for(let i = 1; i < length; i++) {

  }
}
