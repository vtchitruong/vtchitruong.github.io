import * as vsl from "./visualize.js";

let n = 10; // arraySize
let delay = 1000;
let animation_sleep_time = delay / 50;

let originalArray = []; // Declare a global array variable
let currentArray = [];

// pause state
let paused = false;

const arrayContainer = document.getElementById("array-container");

const initButton = document.getElementById("initButton");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");

window.init = init;
window.startSorting = startSorting;
window.displaySelect = displaySelect;
window.selectionSort = selectionSort;
window.togglePause = togglePause;
window.reloadPage = reloadPage;

// New button
function init() {
    // get array size input
    const arraySizeInput = document.getElementById("array-size");
    n = parseInt(arraySizeInput.value, 10) || 10;

    // get delay input
    const delayInput = document.getElementById("delay");
    delay = parseInt(delayInput.value, 10) || 1000;

    // generate random array
    originalArray = vsl.generateRandomArray(n);
    vsl.displayArray(originalArray, arrayContainer);

    // enable start button
    startButton.removeAttribute("disabled");

    paused = false;
}

function displaySelect(array, iIndex, jIndex, minIndex) {
    arrayContainer.innerHTML = ""; // Clear the container

    array.forEach((value, index) => {
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

        if (index < iIndex) {
            valueDiv.style.color = vsl.yellow;
            bar.style.backgroundColor = vsl.transparent;
            bar.style.borderColor = valueDiv.style.color;
            indexDiv.style.color = valueDiv.style.color;
        } else if (index == iIndex) {
            valueDiv.style.color = vsl.pink;
            bar.style.backgroundColor = valueDiv.style.color;
            bar.style.borderColor = vsl.transparent;
            indexDiv.textContent = 'i';
            indexDiv.style.color = valueDiv.style.color;
        } else if (index == jIndex) {
            valueDiv.style.color = vsl.blue;
            bar.style.backgroundColor = valueDiv.style.color;
            bar.style.borderColor = vsl.transparent;
            valueDiv.style.color = valueDiv.style.color;
            indexDiv.style.color = valueDiv.style.color;
            indexDiv.textContent = 'j';
        } else if (index == minIndex) {
            valueDiv.style.color = vsl.green;
            bar.style.backgroundColor = valueDiv.style.color;
            bar.style.borderColor = vsl.transparent;            
            indexDiv.style.color = valueDiv.style.color;
            indexDiv.textContent = 'min';
        }

        const container = document.createElement("div");
        container.className = "bar-container";
        container.appendChild(valueDiv);
        container.appendChild(bar);
        container.appendChild(indexDiv);

        arrayContainer.appendChild(container);
    });
}

async function selectionSort() {
    for (let i = 0; i < n - 1; ++i) {
        // display i
        displaySelect(currentArray, i, -1, -1);
        await vsl.sleep(delay);
      
        let min = i;
        for (var j = i + 1; j < n; ++j) {
            // display j  
            displaySelect(currentArray, i, j, -1);
            await vsl.sleep(delay);

            if (currentArray[j] < currentArray[min]) {
                min = j;
            }

            // Check the pause state
            while (paused) {
                await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100ms
            }
        }

        // display to min detected
        displaySelect(currentArray, i, -1, min);
        await vsl.sleep(delay);

        await vsl.swap(currentArray, i, min);

        // display after swap
        displaySelect(currentArray, i, -1, min);
        await vsl.sleep(delay);
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

    await selectionSort();
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