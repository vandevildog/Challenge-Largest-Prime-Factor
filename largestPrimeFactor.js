exports.largestPrimeFactor = function(n) {
  let primeNumber = 0;
  // do your work here
  let primeFactors = [];
  while (n % 2 === 0){
    primeFactors.push(2);
    n /= 2;
  }

  const sqrtNum = Math.sqrt(n);
  for (let i = 3; i <= sqrtNum; i++) {
      while (n % i === 0) {
          primeFactors.push(i);
          n /= i;
      }
  }

  if (n > 2){
    primeFactors.push(num);
  }

  primeNumber = primeFactors[primeFactors.length - 1];

  return primeNumber;
};


