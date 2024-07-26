function greatestCommonDivisor(a, b) {
  const divisors = [];
  for(let i = 0; i <= Math.floor(a / 2); i++) {
    if((a % i === 0) && (b % i === 0)) {
      divisors.push(i);
    }
  }
  return Math.max(...divisors);
}

console.log(greatestCommonDivisor(64, 80));