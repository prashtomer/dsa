// Find the largest and smallest number in an unsorted array of integers
const arr = [1, 2, 3, 4, 100];

const findMaxMin = (arr) => {
  let min = arr[0];
  let max = arr[0];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i]
    } else if(arr[i] < min) {
      min = arr[i]
    }
  }

  return {
    max: max,
    min: min
  }
}

console.log(findMaxMin(arr));