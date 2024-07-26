function isPrime(number) {
  let result = true;
  for(let i = 2; i <= Math.floor(number/2); i++) {
    if(number % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}

console.log(isPrime(7));