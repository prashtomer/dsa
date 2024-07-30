// You are given an array of Integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

function sortedSquarredArray(array){
  const newArray = new Array(array.length).fill(0);
  let pointerLeft =0;
  let pointerRight = array.length-1;
  for(let i=array.length-1;i>=0;i--){
    const leftSquared = Math.pow(array[pointerLeft],2);
    const rightSquared = Math.pow(array[pointerRight],2);
    if(leftSquared>rightSquared){
      newArray[i]=leftSquared;
      pointerLeft++;
    } else{
      newArray[i]=rightSquared;
      pointerRight--;
    }
  }
  return newArray;
}

sortedSquarredArray(1, 3, 5, 7);

sortedSquarredArray(-7, -3, 5, 2);