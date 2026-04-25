// find note
// 4823  rupya me kitne ka kitna note milega
let amount = prompt("Enter the amount");
// No. of 500 note = 

console.log("No. of 500 note = "+Math.floor(amount/500));    // no. of 500 note
let RestAmount = (amount%500); 

// No. of 200 note =

console.log("No. of 200 note = "+Math.floor(RestAmount/200));    // no. of 200 note
let RestAmount1 = (RestAmount%200);

// No. of 100 note =
console.log("No. of 100 note = "+Math.floor(RestAmount1/100));    // no. of 100 note
let RestAmount2 = (RestAmount1%100);

// No. of 50 note =
console.log("No. of 50 note = "+Math.floor(RestAmount2/50));    // no. of 50 note
let RestAmount3 = (RestAmount2%50);

// No. of 20 note =
console.log("No. of 20 note = "+Math.floor(RestAmount3/20));    // no. of 20 note
let RestAmount4 = (RestAmount3%20);

// No. of 10 note =
console.log("No. of 10 note = "+Math.floor(RestAmount4/10));    // no. of 10 note
let RestAmount5 = (RestAmount4%10);

// No. of 5 note =
console.log("No. of 5 note = "+Math.floor(RestAmount5/5));    // no. of 5 note
let RestAmount6 = (RestAmount5%5);

// No. of 1 note =
console.log("No. of 1 note = "+Math.floor(RestAmount6/1));    // no. of 1 note
