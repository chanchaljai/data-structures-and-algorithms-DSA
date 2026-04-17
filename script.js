let a = 4567;
// find add of all digita. 4+5+6+7 = 20

let sum = 0;
while(a>0){
    let rem = a%10;
    sum = sum + rem;
    a = Math.floor(a/10);
}
console.log(sum);