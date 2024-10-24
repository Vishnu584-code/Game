const min=1;
const max=100;
const ans=Math.floor(Math.random()*(max-min+1))+min;
console.log(ans);
let attempt=0;
let guess;
let running=true;
while(running){
   guess=window.prompt(`🎯 Guess a number between ${min}-${max}`);
   guess=Number(guess);
   if(isNaN(guess)){
      window.alert("⚠️ oops! That doesn't seem like a number");
   }
   else if(guess < min || guess > max){
    window.alert(`🚫 please enter a number between ${min} and ${max}.`);
   }
   else{
     attempt++;
     if(guess<ans){
        window.alert("📉 Too low! Try once more!🔁");
     }
     else if(guess>ans){
        window.alert("📈 Too high! Try once more!🔁");
     }
     else{
        window.alert(`🎉congrats! You guessed it! The correct answer is  ${ans}. It took ${attempt} attempts. 🏆`);
        running=false;
     }
   }
}
