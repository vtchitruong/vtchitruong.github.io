// Remove the markmap button
const iframe = document.querySelector('iframe');

iframe.addEventListener('load', () => {
    const iframeContent = iframe.contentDocument || iframe.contentWindow.document;
    const brandLink = iframeContent.querySelector('.mm-toolbar a.mm-toolbar-brand');
    brandLink.style.display = 'none';
});

// End of Remove the markmap button

// Open links externally.
var links = document.links;

for (var i = 0, linksLength = links.length; i < linksLength; i++) {
   if (links[i].hostname != window.location.hostname) {
       links[i].target = '_blank';
   }
}

var trueStrings = ["Adorable!", "Brilliant!", "Fabulous!", "Impressive!", "Magnificent!",  "Phenomenal!", "Radiant!", "Remarkable!", "Spectacular!", "Stunning!"];

var falseStrings = ["Almost there, but not quite.", "Better luck next time.", 
"That’s not it.", "That’s not accurate.", "That’s not the right answer.",
"That’s not what I was looking for.", "You need to try again.",
"You’re not quite there yet.", "You’re mistaken.", "You’re on the wrong track."];

function process_answer(userInputID, solutionID, appreciateID) {
    var input = document.getElementById(userInputID).value;

    var formattedInput = input.replace(/\n/g,'.newline.').trim();

    var solution = document.getElementById(solutionID).innerHTML;

    var isCorrect = formattedInput == solution;
  
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

function process_options_quiz(userInputID, solutionID, appreciateID) {
    var radioButtons = document.getElementsByName(userInputID);
    var formattedInput = '';

    for (var i = 0; i < radioButtons.length; ++i) {
        if (radioButtons[i].checked) {
            formattedInput = radioButtons[i].value;
            break;
        }
    }

    if (formattedInput == '') {
        appreciate.innerHTML = '<span style="color: #f92f60">Bạn hãy chọn một phương án cho cuộc đời mình</span>';
    }
    else {
        var isCorrect = formattedInput == solutionID;

        // Get a random index
        var randomIndex = Math.floor(Math.random() * 10);

        var randomString = "";

        var appreciate = document.getElementById(appreciateID);
        console.log(appreciateID);

        if (isCorrect == true) {
            randomString = trueStrings[randomIndex];
            appreciate.innerHTML = '<span style="color: #00c563">&#10004; ' + randomString + '</span>';
        } else {
            randomString = falseStrings[randomIndex];
            appreciate.innerHTML = '<span style="color: #f92f60">&#10006; ' + randomString + '</span>';
        }
    }
    


    
}