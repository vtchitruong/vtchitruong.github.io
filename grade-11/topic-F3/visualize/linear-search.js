import * as vsl from "./visualize.js";

let n = 13; // arraySize
let delay = 1000;

let originalArray = []; // Declare a global array variable

let k = 37;
// pause state
let paused = false;

const arrayContainer = document.getElementById("array-container");

const initButton = document.getElementById("initButton");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");

window.init = init;
window.startSearching = startSearching;
window.displayLinearSearch = displayLinearSearch;
window.linearSearch = linearSearch;
window.togglePause = togglePause;
window.reloadPage = reloadPage;

// New button
function init() {
    // get array size input
    const arraySizeInput = document.getElementById("array-size");
    n = parseInt(arraySizeInput.value, 10) || 13;

    // generate random array
    originalArray = vsl.generateRandomArray(n);
    originalArray.sort(function(a, b) {return a - b});
    vsl.displayArray(originalArray, arrayContainer);

    // enable start button
    startButton.removeAttribute("disabled");

    paused = false;
}

function displayLinearSearch(array, currentIndex, found) {
    arrayContainer.innerHTML = ""; // Clear the container

    array.forEach ((value, index) => {
        const valueDiv = document.createElement("div");
        valueDiv.className = "value-label";
        valueDiv.textContent = value;
        valueDiv.style.color = vsl.blue;

        const bar = document.createElement("div");
        bar.className = "array-bar";
        bar.style.height = `${value * 5}px`;
        
        const indexDiv = document.createElement("div");
        indexDiv.className = "value-label";
        indexDiv.textContent = index;
        indexDiv.style.color = valueDiv.style.color;

        if (index == found) {
            valueDiv.style.color = vsl.pink;
            bar.style.backgroundColor = valueDiv.style.color;
            bar.style.borderColor = vsl.transparent;
            indexDiv.style.color = valueDiv.style.color;
        } else if (index == currentIndex) {
            valueDiv.style.color = vsl.blue;
            bar.style.backgroundColor = valueDiv.style.color;
            bar.style.borderColor = vsl.transparent;
            indexDiv.style.color = valueDiv.style.color;
        }

        const container = document.createElement("div");
        container.className = "bar-container";
        container.appendChild(valueDiv);
        container.appendChild(bar);
        container.appendChild(indexDiv);

        arrayContainer.appendChild(container);
    });
}

async function linearSearch() {
    let found = -1;
    for (let i = 0; i < n; ++i) {
        displayLinearSearch(originalArray, i, found);
        await vsl.sleep(delay);    
        
        if (originalArray[i] == k) {
            found = i;
            break;            
        }

        // Check the pause state
        while (paused) {
            await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100ms
        }
    }

    displayLinearSearch(originalArray, -1, found);
    await vsl.sleep(delay);

    initButton.removeAttribute("disabled");
    startButton.removeAttribute("disabled");
}

async function startSearching() {
    // get k to find
    const keyInput = document.getElementById("key");
    k = parseInt(keyInput.value, 10) || 37;

    // get delay input
    const delayInput = document.getElementById("delay");
    delay = parseInt(delayInput.value, 10) || 1000;

    // Disable the start button and enable the pause button initially
    initButton.setAttribute("disabled", "true");
    startButton.setAttribute("disabled", "true");
    pauseButton.removeAttribute("disabled");

    await linearSearch();
}

// Pause button
function togglePause() {
    paused = !paused; // Toggle the paused state
    // const pauseButton = document.getElementById("pauseButton");
    pauseButton.textContent = paused ? "Resume" : "Pause";
}

// Reset button
function reloadPage() {
    window.location.reload();   
}