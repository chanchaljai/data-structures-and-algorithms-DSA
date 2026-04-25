// find note
let amount = 7360;
// No. of 500 note =
if (amount >= 500) {
  console.log("No. of 500 note = " + Math.floor(amount / 500));
  amount = amount % 500;
}
// No. of 200 note =
if (amount >= 200) {
  console.log("No. of 200 note = " + Math.floor(amount / 200));
  amount = amount % 200;
}
// No of 100 note
if (amount >= 100) {
  console.log("No. of 100 note = " + Math.floor(amount / 100));
  amount = amount % 100;
}
// No. of 50 note =
if (amount >= 50) {
  console.log("No. of 50 note = " + Math.floor(amount / 50));
  amount = amount % 50;
}
// No. of 20 note =
if (amount >= 20) {
  console.log("No. of 20 note = " + Math.floor(amount / 20));
  amount = amount % 20;
}
// No. of 10 note =
if (amount >= 10) {
  console.log("No. of 10 note = " + Math.floor(amount / 10));
  amount = amount % 10;
}
// No. of 5 note =
if (amount >= 5) {
  console.log("No. of 5 note = " + Math.floor(amount / 5));
  amount = amount % 5;
}
// No. of 2 note =
if (amount >= 2) {
  console.log("No. of 2 note = " + Math.floor(amount / 2));
  amount = amount % 2;
}
// No. of 1 note =
if (amount >= 1) {
  console.log("No. of 1 note = " + Math.floor(amount / 1));
  amount = amount % 1;
}