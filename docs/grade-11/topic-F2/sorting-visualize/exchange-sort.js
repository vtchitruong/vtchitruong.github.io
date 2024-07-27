const arrayContainer = document.getElementById("array-container");

let arraySize = 10;
let delay = 1000;
let originalArray = []; // Declare a global array variable
let currentArray = [];

// This variable to keep track of the pause state
let paused = false;
// let finished = false; // sorting accomplish state

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
        array.push(Math.floor(Math.random() * 30) + 10); // Adjust range as needed
    }

    return array;
}

// initButton
function init() {
    // Stop the current sorting process
    // stopSorting();

    // get array size input
    const arraySizeInput = document.getElementById("array-size");
    arraySize = parseInt(arraySizeInput.value, 10) || 10;

    // get delay input
    const delayInput = document.getElementById("delay");
    delay = parseInt(delayInput.value, 10) || 1000;

    // generate random array
    originalArray = generateRandomArray(arraySize);
    displayArray(originalArray);

    // enable start button
    startButton.removeAttribute("disabled");

    paused = false;
    finished = false;
}

function displayArray(array) {
    arrayContainer.innerHTML = ""; // Clear the container

    array.forEach(value => {
        const valueDiv = document.createElement("div");
        valueDiv.className = "value-label";
        valueDiv.textContent = value;
        valueDiv.style.color = blue;

        const bar = document.createElement("div");
        bar.className = "array-bar";
        bar.style.height = `${value * 5}px`;

        const container = document.createElement("div");
        container.className = "bar-container";
        container.appendChild(valueDiv);
        container.appendChild(bar);

        arrayContainer.appendChild(container);
    });
}

async function swap(idx1, idx2) {
    // await new Promise(resolve => setTimeout(resolve, delay)); // Wait for the delay
    const tmp = currentArray[idx1];
    currentArray[idx1] = currentArray[idx2];
    currentArray[idx2] = tmp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function displayExchange(array, iIndex, jIndex, sortedIndex) {
    arrayContainer.innerHTML = ""; // Clear the container

    array.forEach((value, index) => {
        const valueDiv = document.createElement("div");
        valueDiv.className = "value-label";
        valueDiv.textContent = value;
        valueDiv.style.color = blue;

        const bar = document.createElement("div");
        bar.className = "array-bar";
        bar.style.height = `${value * 5}px`;

        if (index < sortedIndex) {
            bar.style.backgroundColor = transparent;
            bar.style.borderColor = yellow;
            valueDiv.style.color = yellow;
        } else if (index == iIndex) {
            bar.style.backgroundColor = blue;
            bar.style.borderColor = transparent;
            valueDiv.style.color = blue;
        } else if (index == jIndex) {
            bar.style.backgroundColor = green;
            bar.style.borderColor = transparent;
            valueDiv.style.color = green;
        }

        const container = document.createElement("div");
        container.className = "bar-container";
        container.appendChild(valueDiv);
        container.appendChild(bar);

        arrayContainer.appendChild(container);
    });
}

async function exchangeSort() {
    const n = arraySize;
    for (var i = 0; i < n - 1; ++i) {
        for (var j = i + 1; j < n; ++j) {
            displayExchange(currentArray, i, j, i);
            await sleep(delay);

            if (currentArray[i] > currentArray[j]) {
                await swap(i, j);

                displayExchange(currentArray, i, j, i);
                await sleep(delay);

                // Check the pause state
                while (paused) {
                    await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100ms
                }
            }
        }

        displayExchange(currentArray, i, j, i + 1);
        await sleep(delay);
    }

    initButton.removeAttribute("disabled");
}

async function startSorting() {
    // Copy the global array to currentArray
    currentArray = [...originalArray];

    // Disable the start button and enable the pause button initially
    initButton.setAttribute("disabled", "true");
    startButton.setAttribute("disabled", "true");
    pauseButton.removeAttribute("disabled");

    await exchangeSort();
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