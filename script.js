//123 - 321

a = 123;
rev = 0;
while(a>0){
  rem = a%10;
  rev = rev * 10 + rem;
  a = Math.floor(a/10);
}

console.log(rev);
