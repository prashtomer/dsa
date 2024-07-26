// Find a duplicate number in an array of integers
const arr = [1, 2, 3, 4, 4, 5];

const findDuplicate = (arr) => {
  const observed = {};
  for(let i = 0; i < arr.length; i++) {
    if(observed[arr[i]]) {
      return arr[i]
    } else {
      observed[arr[i]] = arr[i];
    }
  }
  return false
}

console.log(findDuplicate(arr));

