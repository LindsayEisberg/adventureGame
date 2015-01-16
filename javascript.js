var pointsPossible = new Object();
pointsPossible.stay = 0;
pointsPossible.chase = 10;
pointsPossible.goLeft = 0;
pointsPossible.goRight = 15;
pointsPossible.wait = 5;
pointsPossible.climb = 100;

var userPoints = 0;


var name = prompt("What is your name?");
console.log("Greetings "  + name + "!  Welcome to Adventures of Nash, The Dog");


function begin() {
  var startGame = ["YES","NO"];

  var wannaPlay = prompt("Are you Ready to play? (YES or NO)").toUpperCase();
  if (wannaPlay === startGame[0]) {
    console.log("Great! Let us get started.");
    gameStep1();
  }
  else {
    console.log("That is too bad. This game is pretty fun. See you next time.");
    return;
  }

};


begin();

function gameStep1() {
  var nash = prompt("Nash is a dog. Dogs like squirrels. One day the front door was left open and Nash sees a squirrel! Being a dog she chases the squirrel. Choose to either CHASE Nash or STAY inside.").toUpperCase();
  if (nash === "CHASE") {
    console.log("There she goes down the street! You run faster and faster, but cannot seem to catch up. Just as you round the corner, you lose sight of her.");
    gameStep2();
  }
  else {
    console.log("Nash is a pretty smart dog, and squirrels are high in protein, but she will not be able to find her way home. GAME OVER - you lost your dog.");
    userPoints += pointsPossible.stay;
    return (console.log("Your total points: " + userPoints));
  }

};


function gameStep2() {
  var leftRight = prompt("Did Nash run LEFT or RIGHT").toUpperCase();
  if (leftRight === "RIGHT") {
    console.log("There she is! Up ahead! In the tree!");
    gameStep3();
  }
  else {
    console.log("Looks like she ran the other way. GAME OVER.");
    userPoints += pointsPossible.chase;
    userPoints += pointsPossible.goLeft;
    return (console.log("Your total points: " + userPoints));

  }
};

function gameStep3() {
  var climbWait = prompt("She has been up that tree for a while now. Looks like I have a choice to make - climb the tree or wait for her to come down. Type CLIMB or WAIT.").toUpperCase();
  if (climbWait === "CLIMB") {
    console.log("You caught her! Congrats, you have won!");
    userPoints += pointsPossible.chase;
    userPoints += pointsPossible.goRight;
    userPoints += pointsPossible.climb;
    return (console.log("Your total points: " + userPoints));
  }
  else {
    console.log("Looks like Nash is stuck in the tree. Time to call for backup. GAME OVER.");
    userPoints += pointsPossible.chase;
    userPoints += pointsPossible.goRight;
    userPoints += pointsPossible.wait;
    return (console.log("Your total points: " + userPoints));
  }
};
