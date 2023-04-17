 const computerChoicedisplay =document.getElementById('computer-choice')
 const yourChoicedisplay =document.getElementById('your-choice')
 const resultdisplay = document.getElementById('result')
 const possibleChoises =document.querySelectorAll('button')
 const scoredisplay = document.getElementById('Score')
 let computerChoice
 let userChoice
 let result
 let score = 0
 
 possibleChoises.forEach(possibleChoice =>possibleChoice.addEventListener('click',(e)=>
 {
   userChoice = e.target.id
   yourChoicedisplay.innerHTML = userChoice
   computer()
   winnning()
   gamescore()
   
 }) )
 function computer() {
    let randomnumber = Math.floor(Math.random()*3)+1
    console.log(randomnumber )
    if(randomnumber==1)
    {
        computerChoice ='✊'
    }
    if(randomnumber==2)
    {
        computerChoice ='🤚'
    }
    if(randomnumber==3)
    {
        computerChoice ='✌'
    }
    computerChoicedisplay.innerHTML =computerChoice
 }
 function winnning() {
    if(userChoice == computerChoice)
    {
        result = 'Game Draw'
    }
    else if (userChoice=='✊' && computerChoice=='✌')
    {
        result = 'you win the game 🥳'
    }
    else if (userChoice=='🤚' && computerChoice=='✊')
    {
        result = 'you win the game 🥳'
    }
    else if (userChoice=='✌'&& computerChoice=='🤚')
    {
        result = 'you win the game 🥳'
    }
    else{
        result = 'you loss the game 😔'
    }
   
   resultdisplay.innerHTML = result
 }
function gamescore(){
 if(result=='you win the game 🥳'){
    score = score + 1
    }
   else{ score = score}
   scoredisplay.innerHTML=score
}
document.getElementById("reset").onclick = function() {
    document.getElementById("your-choice").innerHTML = "";
    document.getElementById("computer-choice").innerHTML = "";
    document.getElementById("Score").innerHTML = 0;
    document.getElementById("result").innerHTML = "";
    };
