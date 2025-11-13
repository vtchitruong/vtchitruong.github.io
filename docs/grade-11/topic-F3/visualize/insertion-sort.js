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
window.displayInsert = displayInsert;
window.insertionSort = insertionSort;
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

function displayInsert(array, iIndex, jIndex, emptyIndex, tmpHeight, tmpBackgr, tmpBorder, sortedIndex) {
    arrayContainer.innerHTML = ""; // Clear the container

    array.forEach((value, index) => {
        const valueDiv = document.createElement("div");
        valueDiv.className = "value-label";
        valueDiv.textContent = value;
        valueDiv.style.color = vsl.blue;

        const bar = document.createElement("div");
        bar.className = "array-bar";
        bar.style.height = `${value * 5}px`;
        bar.style.borderColor = valueDiv.style.color;

        const indexDiv = document.createElement("div");
        indexDiv.className = "index-label";
        indexDiv.textContent = index;
        indexDiv.style.color = valueDiv.style.color;

        if (index < sortedIndex) {
            valueDiv.style.color = vsl.yellow;
            bar.style.backgroundColor = vsl.transparent;
            bar.style.borderColor = valueDiv.style.color;
            indexDiv.style.color = valueDiv.style.color;
        }
        
        if (index === emptyIndex) {
            valueDiv.style.color = vsl.grey;
            bar.style.backgroundColor = vsl.transparent;
            bar.style.borderColor = valueDiv.style.color;
            valueDiv.style.color = valueDiv.style.color;
            indexDiv.style.color = valueDiv.style.color;
        }

        if (index === iIndex) {
            valueDiv.style.color = vsl.blue;
            bar.style.backgroundColor = valueDiv.style.color;
            bar.style.borderColor = vsl.transparent;
            indexDiv.textContent = 'i';
            indexDiv.style.color = valueDiv.style.color;
        } else if (index === jIndex) {
            valueDiv.style.color = vsl.pink;
            bar.style.backgroundColor = valueDiv.style.color;
            bar.style.borderColor = vsl.transparent;
            valueDiv.style.color = valueDiv.style.color;
            indexDiv.style.color = valueDiv.style.color;
            indexDiv.textContent = 'j';
        } 

        const container = document.createElement("div");
        container.className = "bar-container";
        container.appendChild(valueDiv);
        container.appendChild(bar);
        container.appendChild(indexDiv);

        arrayContainer.appendChild(container);
    });

    // Add the tmp bar
    const tmpValueDiv = document.createElement("div");
    tmpValueDiv.className = "tmp-value-label";
    tmpValueDiv.textContent = tmpHeight;
    tmpValueDiv.style.color = tmpBackgr;

    const tmpBar = document.createElement("div");
    tmpBar.className = "array-bar tmp-bar"; // Apply separate-bar class
    tmpBar.style.height = `${tmpHeight * 5}px`;
    tmpBar.style.backgroundColor = tmpBackgr;
    tmpBar.style.borderColor = tmpBorder;

    const indexDiv = document.createElement("div");
    indexDiv.className = "tmp-index-label";
    indexDiv.textContent = 't';
    indexDiv.style.color = tmpBackgr;

    const tmpContainer = document.createElement("div");
    tmpContainer.className = "bar-container";
    tmpContainer.appendChild(tmpValueDiv);
    tmpContainer.appendChild(tmpBar);
    tmpContainer.appendChild(indexDiv);
    
    arrayContainer.appendChild(tmpContainer);
}

async function insertionSort() {
    let sortedIndex = 0;

    for (let i = 1; i < n; i++) {
        // display i
        displayInsert(currentArray, i, -1, -1, "", vsl.transparent, vsl.transparent, sortedIndex);
        await vsl.sleep(delay);
        
        let tmp = currentArray[i];
        
        // display tmp
        displayInsert(currentArray, -1, -1, i, tmp, vsl.blue, vsl.transparent, sortedIndex);
        await vsl.sleep(delay);

        let j = i - 1;

        // display i and j
        displayInsert(currentArray, -1, j, i, tmp, vsl.blue, vsl.transparent, sortedIndex);
        await vsl.sleep(delay);

        while (j >= 0 && currentArray[j] > tmp) {
            displayInsert(currentArray, -1, j, j + 1, tmp, vsl.blue, vsl.transparent, sortedIndex);
            await vsl.sleep(delay);

            currentArray[j + 1] = currentArray[j];

            // display step back 
            displayInsert(currentArray, -1, j + 1, j, tmp, vsl.blue, vsl.transparent, sortedIndex);
            await vsl.sleep(delay);

            j = j - 1;

            // Check the pause state
            while (paused) {
                await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100ms
            }
        }

        displayInsert(currentArray, -1, j, j + 1, tmp, vsl.blue, vsl.transparent, sortedIndex);
        await vsl.sleep(delay);

        currentArray[j + 1] = tmp;
        
        displayInsert(currentArray, j + 1, -1, -1, tmp, vsl.transparent, vsl.transparent, sortedIndex);
        await vsl.sleep(delay);

        // Check the pause state
        while (paused) {
            await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100ms
        }

        sortedIndex = i +1 ;
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

    await insertionSort();
}

// Pause button
function togglePause() {
    paused = !paused; // Toggle the paused state
    pauseButton.textContent = paused ? "Resume" : "Pause";
}

// Reset button
function reloadPage() {
    window.location.reload();   
}