// strong number
// 145  me 1! + 4! + 5! = 145 strong number kisi number ke  sabhi digit ka factorial nikal ke  add krenge number ke equal hoga to strong number hoga.
let n = +prompt("Enter a number");
if (isNaN(n) || n < 0) {
  alert("Enter a valid number");
} else {
  let sum = 0;
  let num = n;
  while (num > 0) {
    let rem = num % 10;
    let fact = 1;
    for (let i = 1; i <= rem; i++) {
      fact = fact * i;
    }
    sum = sum + fact;
    num = Math.floor(num / 10);
  }
  if (sum == n) {
    console.log(`${n} is a strong number`);
  } else {
    console.log(`${n} is not a strong number`);
  }
}
