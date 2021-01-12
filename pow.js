const computePowerIt = (n, p) => {
    result = Math.pow(n, p)
    return result
};

console.log(computePowerIt(2, 2));



//récursif

const exponent = (a, n) => {
   if (n === 0) return 1;
    
    else return a * exponent(a, n-1);
  
};

console.log(exponent(2, 2));
