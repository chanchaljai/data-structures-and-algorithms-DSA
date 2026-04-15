// swapping

let a = 10;
let b = 20;
// first method  with help of new variable.

// c = a; // c = 10, a = 10
// a = b; // a = 20, b = 20
// b = c; // b = 10, c = 20

// console.log(a,b);

// second method
// a = a + b; // a = 10 + 20 = 30
// b = a - b; // b = 30 - 20 = 10
// a = a - b; // a = 30 - 10 = 20

// console.log(a,b);

// third method
[a,b] = [b,a];

console.log(a,b);


