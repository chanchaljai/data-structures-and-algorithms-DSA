// 1234 ko 4321 me change karna hai 
// kisi bhi number ko reverse karna ho 

let num = +prompt("Enter the number");

let rev =0;
while (num > 0) {
  let rem = num % 10;
  rev = rev*10 + rem;
  num = Math.floor(num/10)
}
console.log(rev);