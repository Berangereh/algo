const isPrime = (value) => {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

const findSupPrime = (n) => {
  
        while(!isPrime(++n)){};
        return n;

};

console.log(findSupPrime(7))


