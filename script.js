// check prime number

let n = +prompt("Enter a number: ");
let prime = true;
console.log(isPrime(n));

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 2) return true;
  if (n % 2 == 0) return false;
  // koi bhi number 2 se apne sqrt tk divide nhi hoga to aage bhi devide nhi hoga
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}
