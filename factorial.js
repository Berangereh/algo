const computeFactorialIt = (n) => {
    var result = 1;
    for (var i = 1; i <= n; i++)
      result = result * i;
    return result;
};
console.log(computeFactorialIt(5));



//récursif

const factorial = (x) => {
    // This is the base case.
    if (x === 0) return 1;
    // This is the recursive one.
    else return x * factorial(x - 1);
  }
  
  console.log(factorial(5));