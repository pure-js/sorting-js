function bubble(arr) {

  let length = arr.length,
    innerLength = arr.length;

  for(let i = 0; i < length; i++) {
    for(let j = 0; j < innerLength; j++) {

      let current = arr[j],
        next = arr[j + 1];

      if(current > next) {
        arr[j] = next;
        arr[j+1] = current;
      }
    }
    innerLength--;
  }
  return arr;
}