           // switch case
  let marks= Number(prompt("Enter the number"));
  console.log (marks)
switch (true){
    case  (marks >=90 && marks <=100):
          console.log("grade A");
          console.log("Excellent!")
        break;
     case  (marks >=80 && marks <90):
          console.log("grade B");
           console.log("Very Good!")
        break;   
    case  (marks >=70  && marks <80):
          console.log("grade C");
          console.log("Good!")
           break;   
     case  (marks >=60 && marks < 70):
          console.log("grade D");
          console.log("passed")
        break; 
   
    default : 
        console.log("fail");
}
      //TASK 
let age=21;
 let isStudent=true;
 let isWeekend=false;
let ticketPrice;
  if (age < 5){
     ticketPrice=0;
    
    }else{
      if (isWeekend){
         ticketPrice = 300;
      } else{
          ticketPrice =200;
  }
  //apply discounts
    if (age >60 ){
    ticketPrice = ticketPrice*0.7;  //senior discount =30% off
    } else if (isStudent && !isWeekened){
       ticketPrice =ticketPrice*0.5;   //student discount only on weekdays =50% off
    }

    
 }
 console.log ("final ticket price :" ,ticketPrice)