// sum of n natural numbers
let ans = Number(prompt("Enter a number")); // jaha tk add karana hai

if (isNaN(ans)) {
  console.log("Enter a valid number");
} else {
  let sum = 0;
  for (let i = 1; i <= ans; i++) {
    sum += i;
  }
  console.log(sum);
}
