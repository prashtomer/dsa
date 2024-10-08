// Find the missing number in a given integer array of 1 to 100

const findMissingNum = (arr) => {
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }
  return false
}

const missingNum = findMissingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]);

console.log(missingNum);