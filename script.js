// Electricity bill calculation
//up to 100 4.2 per unit  101-200 6 per unit 201-400 8 per unit and above 13 per unit

let unit = prompt("Enter the unit");
let bill = 0;
if (unit <= 100) {
    bill = unit * 4.2;
}
else if (unit <= 200) {
    bill = (100 * 4.2) + ((unit - 100) * 6);
}
else if (unit <= 400) {
    bill = (100 * 4.2) + (100 * 6) + ((unit - 200) * 8);
}
else {
    bill = (100 * 4.2) + (100 * 6) + (200 * 8) + ((unit - 400) * 13);
}
alert("Your bill is " + bill);

