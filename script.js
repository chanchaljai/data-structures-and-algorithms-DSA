// reverse of number.
// 1234 => 4321
// rev = 0;
// n = 1234 > 0 
// 1234 % 10 = 4
// rev = 0 * 10 + 4 = 4 
// n = 1234 / 10 = 123 > 0
// 123%10 = 3
// rev = 4 * 10 + 3 = 43
// n = 123 / 10 = 12 > 0
// 12%10 = 2
// rev = 43 * 10 + 2 = 432
// n = 12 / 10 = 1 > 0
// 1%10 = 1
// rev = 432 * 10 + 1 = 4321  

let n = +prompt("Enter a number");
let rev = 0;
while (n > 0) {
  let rem = n % 10;
  rev = rev * 10 + rem;
  n = parseInt(n / 10);
}
console.log(rev);