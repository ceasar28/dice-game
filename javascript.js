
var player1Name;
var player1Score=0;
var player2Score=0;
var roundtoPlay=16;
var playername=false;
var startNewgame=false;



// document.querySelector(".reload").addEventListener("click",function(){
//   window.parent.location = window.parent.location.href;

  
// });

 // function Refresh(){
 // player1Name = prompt("enter your name:","Player 1");
 // document.querySelector(".player1").innerHTML=player1Name;  


 // }

 document.querySelector(".reload").addEventListener("click",function(){
  startNewgame=true;
  if (playername===false){
  player1Name = prompt("enter your name:","Player 1");
  document.querySelector(".player1").innerHTML=player1Name;
  }
  else{
   window.parent.location = window.parent.location.href;
   player1Name = prompt("enter your name:","Player 1");
  document.querySelector(".player1").innerHTML=player1Name;
  }

 });



function play(){
 if (startNewgame===true){
playername= true;

var randomNum1 = Math.floor(Math.random()*6)+1; /// gives a random number btw 1-6

var randomDiceImage="dice" + randomNum1 + ".png"; // to select the images of different variables (dice6.png)

var randomImageSource = "images/" + randomDiceImage; // images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNum2 =Math.floor(Math.random()*6)+1;

var randomDiceImage2 ="dice" + randomNum2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

if (roundtoPlay !=0){
 roundtoPlay-=1;
  if (randomNum1 > randomNum2){
   document.querySelector("h1").innerHTML="round : " +(16-roundtoPlay);
   player1Score +=1;
    player2Score+=0;
   document.querySelector(".p1Score").innerHTML= "Score:" + player1Score;
    // document.getElementsByClassName("btn")[0].innerHTML="play";
  }
  else if ( randomNum2 > randomNum1 ){
   document.querySelector("h1").innerHTML = "round : " +(16-roundtoPlay);
    // document.getElementsByClassName("btn")[0].innerHTML="play";
     player1Score+=0;
    player2Score+=1;
    document.querySelector(".p2Score").innerHTML="score:" + player2Score;
  }
   else {
    document.querySelector("h1").innerHTML ="round : " +(16-roundtoPlay);
    // document.getElementsByClassName("btn")[0].innerHTML="draw";  
   }

}

else{
 playername= true;
 if(player1Score >player2Score ){
 document.querySelector("h1").innerHTML= player1Name + " wins 🚩🚩💥";
}
else{
 document.querySelector("h1").innerHTML="Computer wins 🚩🚩💥";
}
// document.querySelector("h1").innerHTML= "End"
// alert("refresh page to start a new game");
document.querySelector(".roll").addEventListener("click",function(){alert("Reload to Play again")});
}




}
else{alert ("Please start a new game");}
}
 

