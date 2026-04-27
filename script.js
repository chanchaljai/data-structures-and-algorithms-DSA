// factors of a number.

let n = +prompt("Enter a number");
if (n < 0 || isNaN(n)) {
  alert("Enter a valid number");
} else {
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
  console.log(n);
}
