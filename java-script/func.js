//  function info(age, isStudent, isWeekend){
//    if (isStudent== 'yes' || isWeekend== 'yes'){
//      isStudent="i am student"
//       isWeekend="it is a weekend"

     
//    }else{
//      isStudent="i am not student"
//      isWeekend="it is not weekend"
   
//    }
  
     
    

//     return `My age is ${age} and  ${isStudent } and  ${isWeekend}`
// //   return `"My age is " + age + " and i am a " + isStudent + " it is a " + isWeekend`
   
//  }

//  console.log(info( 32,'yes','yes'))
 
//  console.log(info( 49,'no','yes'))
 function getFinalPrice(cartAmount, hasCoupon, isFirstPurchase)
{
  if( cartAmount < 0 || typeof cartAmount !== "number")  {
    return"invalid card amount";
  }
      let finalAmount = cartAmount;
  
  if (cartAmount >=0 && cartAmount <500){
    console.log ("no discount");
  }
  if(cartAmount >=500 && cartAmount < 999){
    finalAmount -= cartAmount * 0.10 //10% off

  }else if (cartAmount >=1000 && cartAmount < 1999){
    finalAmount -= cartAmount * 0.15 //15% off
 
  }else if (cartAmount >=2000){
     finalAmount -= cartAmount * 0.25 //25% off
  }

  //coupon discount
  if (hasCoupon){
    finalAmount -= 100;
  }
  if (isFirstPurchase){
  finalAmount -= finalAmount * 0.05 //bonus
    }  //extra 5%
    finalAmount += finalAmount * 0.18   //tax(18% GST)
    return Number( finalAmount.toFixed(2));   //round to 2 decimal place
  

}
console.log(getFinalPrice(600,false,false));
console.log(getFinalPrice(1100,true,true));
console.log(getFinalPrice(2400,true,false));
console.log(getFinalPrice(300,true,true));
console.log(getFinalPrice(-100 ,false,false));
