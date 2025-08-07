// let mehakHeight =5 ;
// let  mehakWeight =55;
// let tanzeelaHeight =6;
// let tanzeelaWeight=53;



// let bmi =mehakWeight/2*mehakHeight*0.3;
// let  tbmi =tanzeelaWeight/2*tanzeelaHeight*0.3
// console.log(bmi);
// console.log(tbmi);


// if(tbmi>30){
//     console.log("noraml");
// }else if(tbmi>=40){
//     console.log("you need to improve");
// }else{
//     console.log("you need to more improve");
// }


// let inputNum1=prompt("enter the name");
//  console.log(Number(inputNum1))
// if (inputNum1 %2==0)
// {
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

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
// let age=21;
// let isStudent=true;
// let isWeekend=false;
// let ticketPrice;
//  if (age<5){
//     ticketPrice=0;
    
//  }