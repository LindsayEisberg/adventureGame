var name = prompt("What is your name?");
alert("Greetings "  + name + "!  Welcome to Adventures of Nash, The Dog");



function startGame(x,y) {

  var wannaPlay = prompt("Are you Ready to play? (YES or NO)").toUpperCase();
  if (wannaPlay === x) {
    alert("Great! Let us get started.");
  }
  else {
    return(
    alert("That is too bad. This game is pretty fun. See you next time."));
  }
};

startGame("YES","NO"); 

var nash = prompt("Nash is a dog. Dogs like squirrels. One day the front door was left open and Nash sees a squirrel! Being a dog she chases the squirrel. Choose to either CHASE Nash or STAY inside.");
