// Weight for weight

function orderWeight(strng) {
  let arr = strng.split(' ');
  let length = arr.length;
  let newArr = [];
  for(let i = 0; i < length; i++) {
    let strLength = arr[i].length;
    let result = 0;
    for(let j = 0; j < strLength; j++) {
      result += Number(arr[i].charAt(j));
    }
    newArr.push(result);
  }
  return bubbleSort(newArr, arr).join(' ');
}

function bubbleSort(arr, oldArr) {
  let length = arr.length;
  let innerLength = length;
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length; j++) {
      let current = arr[j];
      let next = arr[j+1];
      if (current === next){
        let currentOld = oldArr[j];
        let nextOld = oldArr[j+1];
        if (currentOld > nextOld) {
          oldArr[j] = nextOld;
          oldArr[j+1] = currentOld;
        }
      } else if (current > next){
        arr[j] = next;
        arr[j+1] = current;
        let temp = oldArr[j];
        oldArr[j] = oldArr[j+1];
        oldArr[j + 1] = temp;
      }
      innerLength--;
    }
  }
  return oldArr;
}

console.log('2000 10003 1234000 44444444 9999 11 11 22 123');
console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'));
console.log('11 11 2000 10003 22 123 1234000 44444444 9999');
