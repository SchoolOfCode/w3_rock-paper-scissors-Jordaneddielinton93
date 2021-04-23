let typedname = null
playerScore = 0
computerScore = 0

function start(){
  // starts game asigns a name
  document.getElementById("nametag").style.display = "block"
  let typedname = document.getElementById("typedname").value;
  let firstletter = typedname.slice(0,1)
  if(typedname.length < 10 && (/[a-zA-Z]/).test(firstletter)){
    firstlettUpper = firstletter.toUpperCase();
    typedname = typedname.replace(firstletter,firstlettUpper)
    // ------------------------
    // gridpop is the popupbox
    let popupbox = document.getElementById("grid--popup").style
    popupbox.top = "10%";
    popupbox.bottom = "auto";
    popupbox.height = "40px";
    // ------------------------
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

    // this is a checker to see if the users choice matches the random generater or if its higher or lower. it also assigns a value to the playerhand images e:g rock,paper,scissors to show on the screen.
function input(chosen){
  let computer = Math.floor(Math.random()*3)+1;
  let playerhand = document.getElementById("playerscreen").style
  let computerhand = document.getElementById("computerscreen").style
  if(chosen == 1 ){
    playerhand.backgroundImage = "url(/images/rockhandLS.png)";
  }else if(chosen == 2){
    playerhand.backgroundImage = "url(/images/paperhandLS.png)";
  }else{
    playerhand.backgroundImage = "url(/images/scissorshandLS.png)";
  }
  if(computer == 1 ){
    computerhand.backgroundImage = "url(/images/rockhandRS.png)";
  }else if(computer == 2){
    computerhand.backgroundImage = "url(/images/paperhandRS.png)";
  }else{
    computerhand.backgroundImage = "url(/images/scissorshandRS.png)";
  }

  // below is where the VS happens
  if(chosen == computer){
    winnerLooser("draw")
  }else if(computer == 1 && chosen == 2 || computer == 2 && chosen == 3 || computer == 3 && chosen == 1 ){
    winnerLooser("win")
  }else{
    winnerLooser("lose")
  }
}
function winnerLooser(picked){
  document.getElementById("nametag").style.display = "none"
  // if you win tell you you're a winner
  if(picked == "win"){
    let startscreen = document.getElementById("startscreen").style
    startscreen.display = "flex";
    startscreen.backgroundImage = "url(/images/winner-comic.png)";
    document.getElementById("startbutton").style.display = "block";
    playerScore++
    document.getElementById("playerScore").innerHTML = playerScore;
  // if you loose tell you you're a looser
  }else if(picked == "lose"){
    startscreen.style.display = "flex";
    startscreen.style.backgroundImage = "url(/images/looser.png)";
    document.getElementById("startbutton").style.display = "block";
    computerScore++
    document.getElementById("compScore").innerHTML = computerScore
  }else{
    document.getElementById("nametag").style.display = "block"
  }
};


