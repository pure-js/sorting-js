function insertion(arr) {
  // let counter = 1;
  const length = arr.length;
  for(let i = 1; i < length; i++) {
    for(let j = i; j > 0; j--) {
      // console.log('iteration', counter++);
      let current = arr[j];
      let prev = arr[j-1];
      if(current < prev) {
        arr[j-1] = current;
        arr[j] = prev;
      }
    }
  }
  return arr;
}

for (let i = 0; i < 10; i++) {
  insertion(generateArray());
}
