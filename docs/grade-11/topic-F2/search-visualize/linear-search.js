const arrayContainer = document.getElementById("array-container");

let arraySize = 13;
let originalArray = []; // Declare a global array variable

let k = 37;

let delay = 1000;

// This variable to keep track of the pause state
let paused = false;

const yellow = "#ffcc3b";
const blue = "#0099cc";
const orange = "#ff8433";
const pink = "#ff748c";
const green = "#00e673";
const transparent = "transparent";

const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const stopButton = document.getElementById("stopButton");

function generateRandomArray(size) {
    const array = [];

    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 45) + 10);
    }

    return array;
}

// initButton
function init() {
    // get array size input
    const arraySizeInput = document.getElementById("array-size");
    arraySize = parseInt(arraySizeInput.value, 10) || 13;

    // get delay input
    const delayInput = document.getElementById("delay");
    delay = parseInt(delayInput.value, 10) || 1000;

    // generate random array
    originalArray = generateRandomArray(arraySize);
    // originalArray.sort(function(a, b) {return a - b});
    displayArray(originalArray);

    // enable start button
    startButton.removeAttribute("disabled");

    paused = false;
    finished = false;
}

function displayArray(array) {
    arrayContainer.innerHTML = ""; // Clear the container

    array.forEach((value, index) => {
      const valueDiv = document.createElement("div");
      valueDiv.className = "value-label";
      valueDiv.textContent = value;

      const bar = document.createElement("div");
      bar.className = "array-bar";
      bar.style.height = `${value * 5}px`;

      const indexDiv = document.createElement("div");
      indexDiv.className = "value-label";
      indexDiv.textContent = index;

      const container = document.createElement("div");
      container.className = "bar-container";
      container.appendChild(valueDiv);
      container.appendChild(bar);
      container.appendChild(indexDiv);

      arrayContainer.appendChild(container);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function displayLinearSearch(array, currentIndex, found) {
    arrayContainer.innerHTML = ""; // Clear the container

    array.forEach ((value, index) => {
        const valueDiv = document.createElement("div");
        valueDiv.className = "value-label";
        valueDiv.textContent = value;

        const bar = document.createElement("div");
        bar.className = "array-bar";
        bar.style.height = `${value * 5}px`;

        if (index == found) {
            bar.style.backgroundColor = pink;
            bar.style.borderColor = transparent;
        } else if (index == currentIndex) {
            bar.style.backgroundColor = orange;
            bar.style.borderColor = transparent;
        }
        else {
            bar.style.backgroundColor = transparent;
            bar.style.borderColor = blue;
        }

        const indexDiv = document.createElement("div");
        indexDiv.className = "value-label";
        indexDiv.textContent = index;
        indexDiv.style.color = bar.style.backgroundColor;

        const container = document.createElement("div");
        container.className = "bar-container";
        container.appendChild(valueDiv);
        container.appendChild(bar);
        container.appendChild(indexDiv);

        arrayContainer.appendChild(container);
    });
}

async function linearSearch() {
    const n = arraySize;
    let found = -1;
    for (let i = 0; i < arraySize; ++i) {
        displayLinearSearch(originalArray, i, found);
        await sleep(delay);    
        
        if (originalArray[i] == k) {
            found = i;
            break;            
        }
    }   
   
    if (found == -1) {
        displayLinearSearch(originalArray, -1, found);
        await sleep(delay);        
    }
    else {
        displayLinearSearch(originalArray, -1, found);
        await sleep(delay);       
    }

    // Check the pause state
    while (paused) {
        await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100ms
    }

    initButton.removeAttribute("disabled");
}

async function startSearching() {
    // get k to find
    const keyInput = document.getElementById("key");
    k = parseInt(keyInput.value, 10) || 37;

    // Disable the start button and enable the pause button initially
    initButton.setAttribute("disabled", "true");
    startButton.setAttribute("disabled", "true");
    pauseButton.removeAttribute("disabled");

    await linearSearch();
}

// Function to toggle pause and continue
function togglePause() {
    paused = !paused; // Toggle the paused state
    const pauseButton = document.getElementById("pauseButton");
    pauseButton.textContent = paused ? "Resume" : "Pause";
}

function reloadPage() {
    window.location.reload();
}