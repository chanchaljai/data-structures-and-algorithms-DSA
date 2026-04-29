// sum of all digits in any number
let n = +prompt("Enter any number");
let sum = 0;
while (n>0) {
  let rem = n%10;
  sum = sum + rem;
  n = n/10;
  n = Math.floor(n);
}
console.log(sum);