import * as vsl from "./visualize.js";

let n = 13; // arraySize
let delay = 1000;

let originalArray = []; // Declare a global array variable

let flagArray = []
let k = 37;

let left;
let right;
let mid;

// pause state
let paused = false;

const arrayContainer = document.getElementById("array-container");

const initButton = document.getElementById("initButton");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");

window.init = init;
window.startSearching = startSearching;
window.displayBinarySearch = displayBinarySearch;
window.binarySearch = binarySearch;
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

    setVisible(0, n - 1);

    // enable start button
    startButton.removeAttribute("disabled");

    paused = false;
}

function displayBinarySearch(array) {
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
        indexDiv.className = "index-label";
        indexDiv.textContent = index;
        indexDiv.style.color = valueDiv.style.color;

        if (flagArray[index] == 2) {
            valueDiv.style.color = vsl.pink;
            bar.style.backgroundColor = valueDiv.style.color;
            bar.style.borderColor = vsl.transparent;
            indexDiv.style.color = valueDiv.style.color;
        } else if (index == left) {
            valueDiv.style.color = vsl.blue;
            bar.style.backgroundColor = valueDiv.style.color;
            bar.style.borderColor = vsl.transparent;
            indexDiv.style.color = valueDiv.style.color;
        } else if (index == right) {
            valueDiv.style.color = vsl.blue;
            bar.style.backgroundColor = valueDiv.style.color;
            bar.style.borderColor = vsl.transparent;
            indexDiv.style.color = valueDiv.style.color;
        } else if (index == mid) {
            valueDiv.style.color = vsl.green;
            bar.style.backgroundColor = valueDiv.style.color;
            bar.style.borderColor = vsl.transparent;
            indexDiv.style.color = valueDiv.style.color;
        } else if (flagArray[index] == 1) {
            valueDiv.style.color = vsl.blue;
            bar.style.backgroundColor = vsl.transparent;
            bar.style.borderColor = valueDiv.style.color;
            indexDiv.style.color = valueDiv.style.color;
        } else if (flagArray[index] == 0) {
            valueDiv.style.color = vsl.grey;
            bar.style.backgroundColor = vsl.transparent;
            bar.style.borderColor = valueDiv.style.color;
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

function setInvisible(begin, end) {
    for (let i = begin; i < end + 1; ++i) {
        flagArray[i] = 0; // 0 means invisible, un-displayed
    }
}

function setVisible(begin, end) {
    for (let i = begin; i < end + 1; ++i) {
        flagArray[i] = 1; // 1 means visible, un-displayed
    }
}

async function binarySearch() {
    left = 0;
    right = n - 1;
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        
        displayBinarySearch(originalArray);
        await vsl.sleep(delay);

        if (originalArray[mid] == k) {
            flagArray[mid] = 2; // 2 means found
            displayBinarySearch(originalArray);
            await vsl.sleep(delay);
            break;
        }
        
        if (originalArray[mid] < k) {
            setInvisible(left, mid);           
            left = mid + 1;
        }
        else {
            setInvisible(mid, right);
            right = mid - 1;
        }

        displayBinarySearch(originalArray);
        await vsl.sleep(delay);

        // Check the pause state
        while (paused) {
            await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100ms
        }
    }

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

    await binarySearch();
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