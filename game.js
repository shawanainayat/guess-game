let computerGuess= Math.floor(Math.random( ) * 100);
let userGuess = [];
let userUpdate =document.getElementById("inner-heding")
let userNumberupdate = document.getElementById("innerBox")
const audioPlayer = document.getElementById('audioPlayer');
const guessNumberBox = document.querySelector('.inner-head');

console.log('guess', guessNumberBox)

const load = () => {
    let computerGuess = Math.floor(Math.random() * 100)
    console.log(computerGuess);
   document.getElementById("inner-btn").style.display ="none"
   document.getElementById("inner-sec").style.display ="none"    
audioPlayer.play();   
}
let startGame = () =>{
    document.getElementById("outer-sec").style.display ="none"
    document.getElementById("inner-sec").style.display ="block"
    audioPlayer.play();
}

let StartnewGame=()=>{
   document.getElementById("inner-btn").style.display ="block"
   document.getElementById("innerBox").style.display ="none"
   userNumberupdate.setAttribute("disabeld", true)
   audioPlayer.play();   
}     


const comparedata = () =>{
    let userNumber = Number(document.getElementById("innerBox").value);
    console.log("computer Guess", computerGuess);
    console.log("user number", userNumber);
    
 userGuess =[...userGuess,userNumber]
 document.getElementById("guess").innerHTML = userGuess
 audioPlayer.play();
    
 if (userGuess.length < maxGuess) {
    
 
 if (userNumber >computerGuess) {

userUpdate.innerHTML = "Your num is High😯"
userNumberupdate.value = "";
audioPlayer.play();

} else if(userNumber < computerGuess){
userUpdate.innerHTML = "Your num is low🥺"    
userNumberupdate.value = "";
audioPlayer.play();
    
 }else{
userUpdate.innerHTML = "Hurray You win Buddy🥳"    
userNumberupdate.value = "";
StartnewGame()     
audioPlayer.play();
 }
}else{
    if (userNumber >computerGuess) {

        userUpdate.innerHTML = `You lose!! the correct num is${ computerGuess}`
        userNumberupdate.value = "";
        StartnewGame()     
        audioPlayer.play();
        } else if(userNumber < computerGuess){
        userUpdate.innerHTML = `You lose!! the correct num is${ computerGuess}`    
        userNumberupdate.value = "";
        StartnewGame()     
        audioPlayer.play();
         }else{
        userUpdate.innerHTML = "Hurray You win Buddy🥳"    
        userNumberupdate.value = "";
        StartnewGame()     
        audioPlayer.play();
    }           
 
}
 
 document.getElementById("Attempts").innerHTML = userGuess.length
 audioPlayer.play();

};


let easymode = () =>{
 maxGuess = 10
    guessNumberBox.innerText = 'You have 10 terms Guess your number🤔'
    startGame()
    audioPlayer.play();
}

let hardmode = () =>{
    maxGuess = 5
    guessNumberBox.innerText = 'You have 5 terms Guess your number🤔'
       startGame()
       audioPlayer.play();
   }


document.getElementById("inner-btn").addEventListener("click", ()=>{
    window.location.reload()
    audioPlayer.play();

})


