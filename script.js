// shop pe Shopping below 5000 0 discount 
// 5001 to 7000 5% discount
// 7001 to 9000 10% discount
// mote than 9000 20% discount

let price = Number(prompt("Enter your price"));
// shop pe Shopping below 5000 0 discount 

if(price <= 5000){
    // No discount then 
     TotalBill = price;
     console.log("Your Shopping Amount is",price);
     console.log("Your Discount is",0);
     console.log("Your total bill is",TotalBill);
     }
// 5001 to 7000 5% discount

if(price > 5000 && price <= 7000){
    // 5% discount then 
    discount = (price * 5)/100;
    TotalBill = price - discount;
    console.log("Your Shopping Amount is",price);
    console.log("Your Discount is",discount);
    console.log("Your total bill is",TotalBill);
    }
// 7001 to 9000 10% discount

if(price > 7000 && price <= 9000){
    // 10% discount then 
    discount = (price * 10)/100;
    TotalBill = price - discount;
    console.log("Your Shopping Amount is",price);
    console.log("Your Discount is",discount);
    console.log("Your total bill is",TotalBill);
    }
// mote than 9000 20% discount

if(price > 9000){
    // 20% discount then 
    discount = (price * 20)/100;
    TotalBill = price - discount;
    console.log("Your Shopping Amount is",price);
    console.log("Your Discount is",discount);
    console.log("Your total bill is",TotalBill);
    }