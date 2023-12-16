// Open links externally.
var links = document.links;

for (var i = 0, linksLength = links.length; i < linksLength; i++) {
   if (links[i].hostname != window.location.hostname) {
       links[i].target = '_blank';
   }
}

function process_answer(userInputID, solutionID, appreciateID) {
    // Get the input value
    var input = document.getElementById(userInputID).value;

    var formattedInput = input.replace(/\n/g,'.newline.').trim();

    var solution = document.getElementById(solutionID).innerHTML;

    // Compare input with the answer
    var isCorrect = formattedInput == solution;

    var trueStrings = ["Adorable!", "Brilliant!", "Fabulous!", "Impressive!", "Magnificent!",  "Phenomenal!", "Radiant!", "Remarkable!", "Spectacular!", "Stunning!"];

    var falseStrings = ["Almost there, but not quite.", "Better luck next time.", 
    "That’s not it.", "That’s not accurate.", "That’s not the right answer.",
    "That’s not what I was looking for.", "You need to try again.",
    "You’re not quite there yet.", "You’re mistaken.", "You’re on the wrong track."];
  
    // Get a random index
    var randomIndex = Math.floor(Math.random() * 10);

    var randomString = "";

    var appreciate = document.getElementById(appreciateID);

    if (isCorrect == true) {
        randomString = trueStrings[randomIndex];
        appreciate.innerHTML = '<span style="color: #00c563">&#10004; ' + randomString + '</span>';
    }
    else {
        randomString = falseStrings[randomIndex];
        appreciate.innerHTML = '<span style="color: #f92f60">&#10006; ' + randomString + '</span>';
    }
}