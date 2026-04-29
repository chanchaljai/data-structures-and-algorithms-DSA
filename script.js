// reverse of number.
let n = +prompt("Enter a number");
let rev = 0;
while (n > 0) {
  let rem = n % 10;
  rev = rev * 10 + rem;
  n = parseInt(n / 10);
}
console.log(rev);