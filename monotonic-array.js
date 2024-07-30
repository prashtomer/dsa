// An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all  its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.


const checkMonotonic = function (array){
  const first = array[0];
  const last = array[array.length-1];
  if(first === last){
    for(let i=0;i<array.length-1;i++){
      if(array[i+1]!==array[i]) return false;
    }
  }
  else if (first<last){
    for(let i=0;i<array.length-1;i++){
      if(array[i+1]<array[i]) return false;
    }
  }
  else{
    for(let i=0;i<array.length-1;i++){
      if(array[i+1]>array[i]) return false;
    }
  }
  return true;
}

checkMonotonic(3, 3, 3, 3) // true
checkMonotonic(1, 3, 5, 9) // true
checkMonotonic(5, 3, 1, 0) // true
