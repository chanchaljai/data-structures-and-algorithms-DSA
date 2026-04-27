// use chatgpt to optimize the code
const n = +prompt("Enter a number");

if (!Number.isInteger(n) || n < 0) {
  console.log("Enter a valid non-negative integer");
  return;
}

let fact = 1;
for (let i = 2; i <= n; i++) fact *= i;

console.log(fact);