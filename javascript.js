var name = prompt("What is your name?");
alert("Greetings "  + name + "!  Welcome to Adventures of Nash, The Dog");


function startGame() {
var begin = prompt("Are you Ready to play (YES or NO)").toUpperCase();
if (begin === "YES") {
  alert("Great! Let's get started.");
}
else {
  alert("That's too bad. This game is pretty fun. See you next time.");
}
};
var nash = prompt("Nash is a dog. Dogs like squirrels. One day the front door was left open and Nash sees a squirrel! Being a dog she chases the squirrel. Choose to either CHASE Nash or STAY inside.");



function startGame() {
  var wannaPlay = confirm("do you want to play?");

  if(wannaPlay) {
    beginGame() // youll need to make this
  } else {
    return ();  // stops execution of program
  }
}
Show less

startGame()
