
    console.log("Get Final Price task");
 function getFinalPrice(cartAmount, hasCoupon, isFirstPurchase)
{
  if( cartAmount < 0 || typeof cartAmount !== "number")  {
    return"invalid card amount";
  }
      let finalAmount = cartAmount;
    // Base discount
   if (cartAmount >=0 && cartAmount <500){
     console.log ("no discount");
   }
  if(cartAmount >=500 && cartAmount <= 999){
    finalAmount -= finalAmount  * 0.10;//10% off   
    console.log("you got 10% off",cartAmount);

  }else if (cartAmount >=1000 && cartAmount <=1999){
    finalAmount -= finalAmount  * 0.15; //15% off
     console.log("you got 15% off",cartAmount);
 
  }else if (cartAmount >=2000){
     finalAmount -= finalAmount  * 0.25; //25% off
       console.log("you got 25% off",cartAmount);
  }

         //coupon discount
  if (hasCoupon){
    finalAmount -= 100;
  }
  if (isFirstPurchase){
  finalAmount -= finalAmount * 0.05; //bonus
    }  //extra 5%
     finalAmount += finalAmount * 0.18 ;  //tax(18% GST)
    return Number( finalAmount.toFixed(2));   //round to 2 decimal place
  

}
console.log(getFinalPrice(600,false,false));
console.log(getFinalPrice(1100,true,true));
console.log(getFinalPrice(2400,true,false));
console.log(getFinalPrice(300,true,true));
console.log(getFinalPrice(-100 ,false,false));



//ATM TASK
let balance =5000;           //balance
const correctPin =1234;     //Pin
    //validationPin
const validatePin = inputPin => inputPin === correctPin;  //arrow function: compare pin is validate or not
      //check balance 
const checkBalance = balance => alert(`Your current balance is ₹${balance}`);
     // deposit
const deposit = (balance , amount )=>{
   if(amount <= 0 || isNaN(amount)){
        alert("Invalid deposit amount .");
        return balance;
   }
   balance += amount;
   alert(`deposit successfull! your new balance is  ₹ ${balance}`);
   return balance; 
   
  };
  const withDraw = (balance , amount )=>{
   if(amount <= 0 || isNaN(amount)){
    alert("Invalid withdrawal amount .");
    return balance;
   } else
    if (amount > balance){
      alert('Infufficient funds');
      return balance;
         }
           balance -= amount;
             alert (`withdraw successful! your new balance is ${balance}`)
              return balance;
               
  };
  const atmInterface = ()  =>{
    let pin = Number(prompt("Enter PIN:")); 
      if(!validatePin(pin)){
       alert("Incorrect PIN. Access denied.");
      return ;
     } 
      alert ("Welcome to the ATM!");
    console.log ("press 1 CheckBalance");
   console.log ("press 2 Deposit Money");
   console.log ("press 3 Withdraw");
   console.log ("press 4 Exit");
  


   let option =Number(prompt("Enter the option:"));
  //  console.log(option);
   if(option===1){
    checkBalance(balance);
   }else if (option===2){
       let amount =Number(prompt("Enter the amount deposit"))
       deposit(amount,balance);
   }else if (option ===3){
      let amount =Number(prompt("Enter the amount withdraw"))
    withDraw(balance, amount);

   }else if (option ===4){
      console.log ("Thankyou for using the ATM");
  
   }
   else{
    alert("Invalid option selected.");
   }
  };
   
    atmInterface();
    
 
 

  

  

 
 



  