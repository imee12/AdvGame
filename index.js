
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

console.log("We are going to keep score now. So get ready!");


var q;
q = prompt("Are you ready?");

if (q == null) {
  alert('No?! GAME OVER! Another night at home alone for you!');
}
else {
  alert("Let's go!");
}


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

var drink=("A", "B")

console.log("The bartender asks you what you want to drink.")

var drink=prompt("Do you: A: Order a water. B: Get a shot of tequila.")

if(player==="chick"){
  if(drink==="A") {
    var roundThree=0;
    console.log("Why did you even come out? No one likes a Debbie Downer! POINTS:0!");
  } else if(drink==="B") {
    var roundThree=1;
    console.log("You're a party animal! POINTS:1!");
  }
}

if(player==="dude"){
  if(drink==="A") {
    var roundThree=1;
    console.log("Good job! You don't want to seem like you go out all the time. POINTS:1!");
  } else if(drink==="B") {
    var roundThree=0;
    console.log("You blew it! This chick now thinks you have a drinking problem. POINTS:0!");
  }
}

scores.push(roundThree);

var arrayLength = scores.length;
var sum = 0;
var i;

for(var i=0; i < arrayLength; i++){
  sum+= parseInt(scores[i]);

}

console.log("TOTAL SCORE:" +  (sum));

/*DRINK OVER*/

var talk=("A", "B")

if(player==="chick"){
console.log("The hot dude starts to talk to you. What do you do?")
}

if(player==="dude"){
  console.log("The hot chick starts to talk to you. What do you do?")
}
var drink=prompt("Do you: A: Listen intently. B: Listen but actively scan the room.")

if(player==="chick"){
  if(talk==="A") {
    var roundFour=0;
    console.log("Never ever let them think they are interesting!! POINTS:0!");
  } else if(talk==="B") {
    var roundFour=1;
    console.log("You go, girl! Make him sweat! POINTS:1!");
  }
}

if(player==="dude"){
  if(talk==="A") {
    var roundFour=1;
    console.log("Awesome! Chicks love it when they think they are interesting! POINTS:1!");
  } else if(talk==="B") {
    var roundFour=0;
    console.log("You must like sleeping alone. POINTS:0!");
  }
}

scores.push(roundFour);

var arrayLength = scores.length;
var sum = 0;
var i;

for(var i=0; i < arrayLength; i++){
  sum+= parseInt(scores[i]);

}

console.log("TOTAL SCORE:" +  (sum));

/*TALK OVER*/



console.log("It's time for you to settle your bill. Your tab is: $85.")

var tip=prompt("How much do you pay including tip?")

if(player==="chick"){
  if(tip>0) {
    var roundFive=0;
    console.log("Why are you paying?! POINTS:0!");
  } else if(tip<=0) {
    var roundFive=1;
    console.log("He must be paying! EXCELLENT WORK! POINTS:1!");
  }
}

if(player==="dude"){
  if(tip>106.25) {
    var roundFive=1;
    console.log("Way to go! Chicks love generous dudes! POINTS:1!");
  } else if(tip<106.25) {
    var roundFive=0;
    console.log("Last thing a girl needs is an ACD (Another Cheap Dude.) POINTS:0!");
  }
}

scores.push(roundFive);

var arrayLength = scores.length;
var sum = 0;
var i;

for(var i=0; i < arrayLength; i++){
  sum+= parseInt(scores[i]);

}

console.log("TOTAL SCORE:" +  (sum));

/*TIP OVER*/

console.log("It's the end of the night. The bartenders turn on the lights.")


if(player==="chick"){
  console.log("The hot dude asks you what you're doing after this.")
}

if(player==="chick"){
var party=prompt("Do you: A: Invite him to an after party. B: Tell him you're going home.")}

if(player==="dude"){
  console.log("The hot chick asks you what you're doing after this.")
}
if(player=="dude"){
var party=prompt("Do you: A: Invite her to an after party. B: Tell her you're going home.")
}
if(player==="chick"){
  if(party==="A") {
    var roundSix=1;
    console.log("Great work! Sly way of letting him know you wanna hang out, but not in a slutty way. POINTS:1!")
  } else if(party==="B") {
    var roundSix=0;
    console.log("You're boring. POINTS:0!");
  }
}

if(player==="dude"){
  if(party==="A") {
    var roundSix=0;
    console.log("What are you thinking?! Just ask the girl for her number. Now, she thinks you're way into her! POINTS:0!");
  } else if(party==="B") {
    var roundSix=1;
    console.log("Good move. Just get her number. Call her in five days. POINTS:1!");
  }
}

scores.push(roundSix);

var arrayLength = scores.length;
var sum = 0;
var i;

for(var i=0; i < arrayLength; i++){
  sum+= parseInt(scores[i]);

}

console.log("TOTAL SCORE:" +  (sum));

/*PARTY OVER*/

if(player==="chick"){
if(sum>=6) {
  console.log("You've made wise decisions as a professional player, you eventually win over this dude and dump him in a week. This scenario will continue over and over until you die. Alone. You win at this game but lose at life. CONGRATULATIONS!")
}else if(sum<6){
  console.log("Okay. So you're not the biggest player. Tonight, you went home alone and watched Netflix. No big deal. Netflix loves you back.")
}
}

if(player==="dude"){
if(sum>=6) {
  console.log("You've made wise decisions as a professional player, you eventually win over this dude and dump her in a week. This scenario will continue over and over until you die. Alone. You win at this game but lose at life. CONGRATULATIONS!")
}else if (sum<6) {
  console.log("Okay. So you're not the biggest player. Tonight, you ate late night pizza with the boys. Who needs chicks anyway?!")
}
}
