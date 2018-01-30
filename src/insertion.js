function insertion(arr) {
  const { length } = arr.length;
  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      const current = arr[j];
      const prev = arr[j-1];
      if (current < prev) {
        arr[j-1] = current;
        arr[j] = prev;
      }
    }
  }
  return arr;
}

export default insertion;
