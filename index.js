
console.log("Welcome!");

var player=("chick", "dude")

var player=prompt("Are you a chick or a dude?")

if(player==="chick"){
  console.log("Let's play, Shady Lady!");
} else if (player==="dude") {
  console.log("Let's go, Bro!");
};

if(player==="chick") {
  console.log("You are going out for a night on town with your girls.");
}

if(player==="dude") {
console.log("You are going out for a night on the town with your boys.");
}

/*Put in playa (hard) or novice (easy)?*/
/*
console.log("We are going to keep score now. So get ready!")



confirm("Are you ready?");


/*GETTING DRESSED*/

console.log("You are getting dressed.")

if(player==="chick"){


var clothes=prompt("What are you going to wear? A: Flip flops and cutoff jean shorts. B:Skirt and heels.") }


if(player==="dude"){

  var clothes=("A","B")
  var clothes=prompt("What are you going to wear? A: Flip flops and shorts. B: Button down shirt and jeans.")
}



var scores =[];

if(player==="chick"){
if(clothes==="A") {
  var roundOne=0;
  console.log("You'll be the best dressed girl in the barn. Way to go! POINTS=0");
} else if(clothes==="B") {
  var roundOne=1;
  console.log("Perfect! Players don't look like they try to hard. POINTS=1");
}
}




if(player==="dude"){
  if(clothes==="A") {
    var roundOne=0;
    console.log("Some girls like the homeless look... I guess. SCORE=0!");
  } else if (clothes==="B") {
    var roundOne=1;
    console.log("Perfect. Players don't look like they try to hard. SCORE=1!")
}
}

scores.push(roundOne);

/*GETTING DRESSED OVER*/

var smile=("A","B")


console.log("You are with your friends and walk up to the bar.")


if(player==="chick"){
var smile=prompt("There's hot dude there that gives you a big smile. You: A. Talk to your friends. B. Smile back.")}




if(player==="chick"){
if(smile==="A") {
  var roundTwo=1;
  console.log("Good job! You don't want to seem desperate! POINTS:1!");
} else if(smile==="B") {
  var roundTwo=0;
  console.log("Might as well wear a sign that says: I'm lonely and sad. POINTS:0!");
}
}

if(player==="dude"){
  var smile=prompt("There's hot chick there that gives you a big smile. You: A. Talk to your friends. B. Smile back.")}




if(player==="dude"){
    if(smile==="A") {
      var roundTwo=1;
      console.log("DUDE.Good job! You don't want to seem desperate! POINTS:1!");
    } else if(smile==="B") {
      var roundTwo=0;
      console.log("DUDE.Might as well wear a sign that says: I'm lonely and sad. POINTS:0!");
    }
  }

scores.push(roundTwo);

/*SMILE OVER*/

/*Tally points*/

/*var scores =[];*/
var arrayLength = scores.length;
var sum = 0;
var i;

for(var i=0; i < arrayLength; i++){
  sum+= parseInt(scores[i]);

}

console.log("TOTAL SCORE:" +  (sum));
/*
  sum =+ parseInt(scores[i]);
  console.log("SCORE:" + ("scores[i]");
}/*


var scores = [];
var
var sum = 0;

for(var i=0; i < nums.length; i++){

  sum += parseInt(nums[i]);

}

alert(sum);

*/
