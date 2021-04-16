let typedname = null
playerScore = 0
computerScore = 0

// for(i in typedname){
//   if(i == 0){
//     firstletter = typedname.charAt(i).toUpperCase();
//     console.log(firstletter)
    
//   }
// }

function start(){
  typedname = document.getElementById("typedname").value;
  let firstletter = typedname.slice(0,1)
  if(typedname.length < 10 && (/[a-zA-Z]/).test(firstletter)){
    
    firstlettUpper = firstletter.toUpperCase();
    typedname = typedname.replace(firstletter,firstlettUpper)
    console.log(typedname)
    document.getElementById("grid--popup").style.top = "10%";
    document.getElementById("grid--popup").style.bottom = "auto";
    document.getElementById("grid--popup").style.height = "40px";
    document.getElementById("startbutton").style.display = "none";
    document.getElementById("playername").innerText = typedname +"'s"
    typedname= typedname + " VS Computer"
    document.getElementById("nametag").innerHTML = typedname;
    document.getElementById("typedname").style.display ="none"
    document.getElementById("startscreen").style.display = "none"

  }else{
    alert("username has to be letters & less then 10")
  }
}




function winnerLooser(picked){
  if(picked == "win"){
    document.getElementById("startscreen").style.display = "flex";
    document.getElementById("startscreen").style.backgroundImage = "url(/images/winner-comic.png)";
    document.getElementById("startbutton").style.display = "block";
    playerScore++
    document.getElementById("playerScore").innerHTML = playerScore
    
  }else if(picked == "lose"){
    document.getElementById("startscreen").style.display = "flex";
    document.getElementById("startscreen").style.backgroundImage = "url(/images/looser.png)";
    document.getElementById("startbutton").style.display = "block";
    computerScore++
    document.getElementById("compScore").innerHTML = computerScore
  }else{
    
  }
};

    // this is a checker to see if the users choice matches the random generater or if its higher or lower. it also assigns a value to the hand images rock,paper or scissors to show on the screen.
function input(chosen){
  let random3numbs = Math.floor(Math.random()*3)+1;
  if(chosen == 1 ){
    document.getElementById("playerscreen").style.backgroundImage = "url(/images/rockhandLS.png)";
  }else if(chosen == 2){
    document.getElementById("playerscreen").style.backgroundImage = "url(/images/paperhandLS.png)";
  }else{
    document.getElementById("playerscreen").style.backgroundImage = "url(/images/scissorshandLS.png)";
  }
  if(random3numbs == 1 ){
    document.getElementById("computerscreen").style.backgroundImage = "url(/images/rockhandRS.png)";
  }else if(random3numbs == 2){
    document.getElementById("computerscreen").style.backgroundImage = "url(/images/paperhandRS.png)";
  }else{
    document.getElementById("computerscreen").style.backgroundImage = "url(/images/scissorshandRS.png)";
  }
  // below is where the VS happens
  if(chosen == random3numbs){
    winnerLooser("draw")
  }else if(chosen ==2 && random3numbs ==3){
    winnerLooser("lose")
  }else if(chosen ==2 && random3numbs == 1){
    winnerLooser("win")
  }else if(chosen ==1 && random3numbs == 2){
    winnerLooser("lose")
  }else if(chosen ==1 && random3numbs == 3){
    winnerLooser("win")
  }else if(chosen ==3 && random3numbs ==1){
    winnerLooser("lose")
  }else if(chosen ==3 && random3numbs ==2){
    winnerLooser("win")
  }
}







