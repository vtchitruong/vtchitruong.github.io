// This function contains the logic to hide the button in a single iframe.
function hideMarkmapBrand(iframe) {
  const onIframeReady = () => {
    try {
      const iframeContent = iframe.contentDocument || iframe.contentWindow.document;
      const brandLink = iframeContent.querySelector('.mm-toolbar a.mm-toolbar-brand');
      if (brandLink) {
        brandLink.style.display = 'none';
      }
    } catch (e) {
      // It's safe to ignore security errors for markmap.
    }
  };

  if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
    onIframeReady();
  } else {
    iframe.addEventListener('load', onIframeReady);
  }
}

// This function finds all markmap iframes on the current page and processes them.
function processAllMarkmaps() {
  const allIframes = document.querySelectorAll('iframe.markmap');
  allIframes.forEach(hideMarkmapBrand);
}

// Run the function on the initial page load
document.addEventListener('DOMContentLoaded', processAllMarkmaps);

// This is the key for instant navigation:
// Re-run the function every time Material for MkDocs finishes loading a new page.
if (window.mkdocs$) {
    window.mkdocs$.subscribe(processAllMarkmaps);
}


// Open external links in a new tab.
var links = document.links;
for (var i = 0, linksLength = links.length; i < linksLength; i++) {
   if (links[i].hostname != window.location.hostname) {
       links[i].target = '_blank';
   }
}

// --- Your Quiz Functions ---
var trueStrings = ["Adorable!", "Brilliant!", "Fabulous!", "Impressive!", "Magnificent!",  "Phenomenal!", "Radiant!", "Remarkable!", "Spectacular!", "Stunning!"];
var falseStrings = ["Almost there, but not quite.", "Better luck next time.", "That’s not it.", "That’s not accurate.", "That’s not the right answer.", "That’s not what I was looking for.", "You need to try again.", "You’re not quite there yet.", "You’re mistaken.", "You’re on the wrong track."];

function process_answer(userInputID, solutionID, appreciateID) {
    var input = document.getElementById(userInputID).value;
    var formattedInput = input.replace(/\n/g,'.newline.').trim();
    var solution = document.getElementById(solutionID).innerHTML;
    var isCorrect = formattedInput == solution;
    var randomIndex = Math.floor(Math.random() * 10);
    var randomString = "";
    var appreciate = document.getElementById(appreciateID);

    if (isCorrect) {
        randomString = trueStrings[randomIndex];
        appreciate.innerHTML = '<span style="color: #00c563">&#10004; ' + randomString + '</span>';
    } else {
        randomString = falseStrings[randomIndex];
        appreciate.innerHTML = '<span style="color: #f92f60">&#10006; ' + randomString + '</span>';
    }
}

function process_options_quiz(userInputID, solutionID, appreciateID) {
    var radioButtons = document.getElementsByName(userInputID);
    var formattedInput = '';
    var appreciate = document.getElementById(appreciateID); // Moved up to prevent errors

    for (var i = 0; i < radioButtons.length; ++i) {
        if (radioButtons[i].checked) {
            formattedInput = radioButtons[i].value;
            break;
        }
    }

    if (formattedInput == '') {
        appreciate.innerHTML = '<span style="color: #f92f60">Bạn hãy chọn một phương án cho cuộc đời mình</span>';
    } else {
        var isCorrect = formattedInput == solutionID;
        var randomIndex = Math.floor(Math.random() * 10);
        var randomString = "";

        if (isCorrect) {
            randomString = trueStrings[randomIndex];
            appreciate.innerHTML = '<span style="color: #00c563">&#10004; ' + randomString + '</span>';
        } else {
            randomString = falseStrings[randomIndex];
            appreciate.innerHTML = '<span style="color: #f92f60">&#10006; ' + randomString + '</span>';
        }
    }
}