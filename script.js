// Shopping Discount
let amount = Number(prompt("Enter the amount"));
if (amount > 0 && amount < 5000) {
  // No Discount
  console.log(amount);
} else if (amount > 5000 && amount <= 7000) {
  // 5% Discount
  discount = Number(Math.floor((5 * amount) / 100));
  console.log("Amount: " + amount);
  console.log("Discount: " + discount);

  bill = amount - discount;
  console.log("Final Bill: " + bill);
} else if (amount > 7000 && amount <= 9000) {
  // 10% Discount
  discount = Number(Math.floor((10 * amount) / 100));
  console.log("Amount: " + amount);
  console.log("Discount: " + discount);
  bill = amount - discount;
  console.log("Final Bill: " + bill);
} else {
  // 20% Discount
  discount = Number(Math.floor((20 * amount) / 100));
  console.log("Amount: " + amount);
  console.log("Discount: " + discount);
  bill = amount - discount;
  console.log("Final Bill: " + bill);
}
