function bubble(arr) {
  const { length } = arr;
  let innerLength = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < innerLength; j++) {
      const current = arr[j];
      const next = arr[j + 1];

      if (current > next) {
        arr[j] = next;
        arr[j+1] = current;
      }
    }
    innerLength--;
  }
  return arr;
}

export default bubble;
