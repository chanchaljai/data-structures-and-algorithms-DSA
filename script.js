// area of triangle of heron's formula

let a = 3;
let b = 4;
let c = 5;
let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(area);  // 6