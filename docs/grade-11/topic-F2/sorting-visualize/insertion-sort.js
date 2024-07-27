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
    displayInsert(originalArray, -1, -1, -1, "", transparent, transparent, 0)

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

function displayInsert(array, iIndex, jIndex, emptyIndex, tmpHeight, tmpBackgr, tmpBorder, sortedIndex) {
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
        }
        
        if (index === emptyIndex) {
            bar.style.backgroundColor = transparent;
            bar.style.borderColor = transparent;
            valueDiv.style.color = transparent;
        }

        if (index === iIndex) {
            bar.style.backgroundColor = blue;
            bar.style.borderColor = transparent;
            valueDiv.style.color = blue;
        } else if (index === jIndex) {
            bar.style.backgroundColor = pink;
            bar.style.borderColor = transparent;
            valueDiv.style.color = pink;
        } 

        const container = document.createElement("div");
        container.className = "bar-container";
        container.appendChild(valueDiv);
        container.appendChild(bar);

        arrayContainer.appendChild(container);
    });

    // Add the tmp bar
    const tmpValueDiv = document.createElement("div");
    tmpValueDiv.className = "value-label tmp-value-label";
    tmpValueDiv.textContent = tmpHeight;
    tmpValueDiv.style.color = tmpBackgr;

    const tmpBar = document.createElement("div");    
    tmpBar.className = "array-bar tmp-bar"; // Apply separate-bar class
    tmpBar.style.height = `${tmpHeight * 5}px`;
    tmpBar.style.backgroundColor = tmpBackgr;
    tmpBar.style.borderColor = tmpBorder;

    const tmpContainer = document.createElement("div");
    tmpContainer.className = "bar-container";
    tmpContainer.appendChild(tmpValueDiv);
    tmpContainer.appendChild(tmpBar);  
    
    arrayContainer.appendChild(tmpContainer);
}

async function insertionSort() {
    const n = arraySize;
    let sortedIndex = 0;

    for (let i = 1; i < n; i++) {
        // display i
        displayInsert(currentArray, i, -1, -1, "", transparent, transparent, sortedIndex);
        await sleep(delay);
        
        let tmp = currentArray[i];
        
        // display tmp
        displayInsert(currentArray, -1, -1, i, tmp, blue, transparent, sortedIndex);
        await sleep(delay);

        let j = i - 1;

        // display i and j
        displayInsert(currentArray, -1, j, i, tmp, blue, transparent, sortedIndex);
        await sleep(delay);

        while (j >= 0 && currentArray[j] > tmp) {
            displayInsert(currentArray, -1, j, j + 1, tmp, blue, transparent, sortedIndex);
            await sleep(delay);

            currentArray[j + 1] = currentArray[j];

            // display step back 
            displayInsert(currentArray, -1, j + 1, j, tmp, blue, transparent, sortedIndex);
            await sleep(delay);

            j = j - 1;

            // Check the pause state
            while (paused) {
                await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100ms
            }
        }

        displayInsert(currentArray, -1, j, j + 1, tmp, blue, transparent, sortedIndex);
        await sleep(delay);

        currentArray[j + 1] = tmp;
        
        displayInsert(currentArray, j + 1, -1, -1, tmp, transparent, transparent, sortedIndex);
        await sleep(delay);

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

// Function to toggle pause and continue
function togglePause() {
    paused = !paused; // Toggle the paused state
    const pauseButton = document.getElementById("pauseButton");
    pauseButton.textContent = paused ? "Resume" : "Pause";
}

function reloadPage() {
    window.location.reload();
}