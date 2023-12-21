const arrayContainer = document.getElementById("array-container");

let arraySize = 13;
let originalArray = []; // Declare a global array variable

let flagArray = []
let k = 37;

let delay = 1000;

let left;
let right;
let mid;

// This variable to keep track of the pause state
let paused = false;

const yellow = "#ffcc3b";
const blue = "#0099cc";
const orange = "#ff8433";
const pink = "#ff748c";
const green = "#00e673";
const transparent = "transparent";

function generateRandomArray(size) {
    const array = [];
    flagArray = [];

    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 45) + 10); // Adjust range as needed
        flagArray.push(1); // 1 means visible, displayed
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
    originalArray.sort(function(a, b) {return a - b});
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

function displayBinarySearch(array) {
    arrayContainer.innerHTML = ""; // Clear the container

    array.forEach ((value, index) => {
        const valueDiv = document.createElement("div");
        valueDiv.className = "value-label";
        valueDiv.textContent = value;

        const bar = document.createElement("div");
        bar.className = "array-bar";
        bar.style.height = `${value * 5}px`;        

        bar.style.borderColor = transparent;

        if (flagArray[index] == 2) {
            bar.style.backgroundColor = pink;
        }
        else if (index == left) {
            bar.style.backgroundColor = green;
        }
        else if (index == right) {
            bar.style.backgroundColor = green;
        }
        else if (index == mid) {
            bar.style.backgroundColor = yellow;
        }
        else if (flagArray[index] == 1) {
            bar.style.backgroundColor = blue;
        }
        else if (flagArray[index] == 0) {
            bar.style.backgroundColor = transparent;
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

function setFalse(begin, end) {
    for (let i = begin; i < end + 1; ++i) {
        flagArray[i] = 0; // 0 means invisible, un-displayed
    }
}

async function binarySearch() {
    const n = arraySize;

    left = 0;
    right = n - 1;
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        
        displayBinarySearch(originalArray);
        await sleep(delay);

        if (originalArray[mid] == k) {
            flagArray[mid] = 2; // 2 means found
            displayBinarySearch(originalArray);
            await sleep(delay);
            break;
        }
        else if (originalArray[mid] < k) {
            setFalse(left, mid);
            displayBinarySearch(originalArray);
            await sleep(delay);
            
            left = mid + 1;
                        
            displayBinarySearch(originalArray);
            await sleep(delay);
        }
        else {
            setFalse(mid, right);
            displayBinarySearch(originalArray);
            await sleep(delay);

            right = mid - 1;

            displayBinarySearch(originalArray);
            await sleep(delay);
        }

        // Check the pause state
        while (paused) {
            await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100ms
        }
    }

    initButton.removeAttribute("disabled");
}

async function startSearching() {
    // get k to find
    const keyInput = document.getElementById("key");
    k = parseInt(keyInput.value, 10) || 37;

    // Disable the start button and enable the pause button initially
    const startButton = document.getElementById("startButton");
    const pauseButton = document.getElementById("pauseButton");
    const stopButton = document.getElementById("stopButton");

    initButton.setAttribute("disabled", "true");
    startButton.setAttribute("disabled", "true");
    pauseButton.removeAttribute("disabled");

    await binarySearch();
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