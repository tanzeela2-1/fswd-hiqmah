let secretNumber = Math.floor(Math.random()* 30) +1;
console.log(secretNumber);
let attempts =0;
const checkGuess=()=>{
    let guess= parseInt(document.querySelector("#guess").value);
     attempts= attempts + 1;
   if (guess === secretNumber){
    document.querySelector('#message').textContent="correct!";
      document.querySelector('#message').style.color="purple";
   
}else if (guess > secretNumber){
       document.querySelector('#message').textContent="too high!";
    document.querySelector('#message').style.color="blue";
}else{
       document.querySelector('#message').textContent="too low!";
        document.querySelector('#message').style.color="green";
}
  document.querySelector('#attempts').textContent="attempts:" +attempts;
};
document.querySelector("#checkBtn").addEventListener("click",checkGuess);
