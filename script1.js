const min=1;
const max=100;
const ans=Math.floor(Math.random()*(max-min+1))+min;
console.log(ans);
let attempt=0;
let guess;
let running=true;
while(running){
   guess=window.prompt(`Enter a number ${min}-${max}`);
   guess=Number(guess);
   if(isNaN(guess)){
      window.alert("Please enter a valid number");
   }
   else if(guess < min || guess > max){
    window.alert(`Enter a number between 1-100`);
   }
   else{
     attempt++;
     if(guess<ans){
        window.alert("TOO LOW TRY AGAIN");
     }
     else if(guess>ans){
        window.alert("TOO HIGH TRY AGAIN");
     }
     else{
        window.alert(`The correct answer is ${ans} \n It took ${attempt} attempts`);
        running=false;
     }
   }
}
