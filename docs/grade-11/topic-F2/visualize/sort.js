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
const grey = "#cfcfcf";
const transparent = "transparent";

function generateRandomArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 30) + 10); // Adjust range as needed
  }

  globalArray = [...array];

  return array;
}

// initButton
/*
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
*/

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

/*
async function swap(idx1, idx2) {
    // await new Promise(resolve => setTimeout(resolve, delay)); // Wait for the delay
    const tmp = currentArray[idx1];
    currentArray[idx1] = currentArray[idx2];
    currentArray[idx2] = tmp;
}
*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function displaySelect(array, firstIndex, secondIndex, minIndex) {
    arrayContainer.innerHTML = ""; // Clear the container

    array.forEach((value, index) => {
        const valueDiv = document.createElement("div");
        valueDiv.className = "value-label";
        valueDiv.textContent = value;

        const bar = document.createElement("div");
        bar.className = "array-bar";
        bar.style.height = `${value * 5}px`;

        if (index < firstIndex) {
            bar.style.backgroundColor = yellow;
            bar.style.borderColor = transparent;
        }
        
        if (index === firstIndex) {
            bar.style.backgroundColor = orange;
            bar.style.borderColor = transparent;
        } else if (index === secondIndex) {
            bar.style.backgroundColor = green;
            bar.style.borderColor = transparent;
        } else if (index === minIndex) {
            bar.style.backgroundColor = pink;
            bar.style.borderColor = transparent;
        }

        const container = document.createElement("div");
        container.className = "bar-container";
        container.appendChild(valueDiv);
        container.appendChild(bar);

        arrayContainer.appendChild(container);
    });
}

async function selectionSort() {
    const n = arraySize;
    for (let i = 0; i < n - 1; ++i) {
        // display i
        displaySelect(currentArray, i, -1, -1);
        await sleep(delay);
      
        let min = i;
        for (var j = i + 1; j < n; ++j) {
          // display j  
          displaySelect(currentArray, i, j, -1);
              await sleep(delay);

              if (currentArray[j] < currentArray[min]) {
                  min = j;
              }
        }

        // display to min detected
        displaySelect(currentArray, i, -1, min);
        await sleep(delay);

        await swap(i, min);

        // display after swap
        displaySelect(currentArray, i, -1, min);
        await sleep(delay);

        // Check the pause state
        while (paused) {
            await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100ms
        }
    }

    initButton.removeAttribute("disabled");
}

function displayInsert(array, iIndex, jIndex, emptyIndex, tmpHeight, tmpBackgr, tmpBorder, sortedIndex) {
    arrayContainer.innerHTML = ""; // Clear the container

    array.forEach((value, index) => {
        const valueDiv = document.createElement("div");
        valueDiv.className = "value-label";
        valueDiv.textContent = value;

        const bar = document.createElement("div");
        bar.className = "array-bar";
        bar.style.height = `${value * 5}px`;

        if (index < sortedIndex) {
            bar.style.backgroundColor = yellow;
            bar.style.borderColor = transparent;
        }
        
        if (index === emptyIndex) {
            bar.style.backgroundColor = transparent;
            bar.style.borderColor = transparent;
        }

        if (index === iIndex) {
            bar.style.backgroundColor = orange;
            bar.style.borderColor = transparent;
        } else if (index === jIndex) {
            bar.style.backgroundColor = green;
            bar.style.borderColor = transparent;
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
        displayInsert(currentArray, i, -1, -1, 0, transparent, transparent, sortedIndex);
        await sleep(delay);
        
        let tmp = currentArray[i];
        
        // display tmp
        displayInsert(currentArray, -1, -1, i, tmp, orange, transparent, sortedIndex);
        await sleep(delay);

        let j = i - 1;

        // display i and j
        displayInsert(currentArray, -1, j, i, tmp, orange, transparent, sortedIndex);
        await sleep(delay);

        while (j >= 0 && currentArray[j] > tmp) {
            displayInsert(currentArray, -1, j, j + 1, tmp, orange, transparent, sortedIndex);
            await sleep(delay);

            currentArray[j + 1] = currentArray[j];

            // display step back 
            displayInsert(currentArray, -1, j + 1, j, tmp, orange, transparent, sortedIndex);
            await sleep(delay);

            j = j - 1;

            // displayInsert(currentArray, -1, j - 1, j, tmp, orange, transparent);
            // await sleep(delay);

            // Check the pause state
            while (paused) {
                await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100ms
            }
        }

        displayInsert(currentArray, -1, j, j + 1, tmp, orange, transparent, sortedIndex);
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

function displayBubble(array, iIndex, jIndex, nextjIndex) {
    arrayContainer.innerHTML = ""; // Clear the container

    array.forEach((value, index) => {
        const valueDiv = document.createElement("div");
        valueDiv.className = "value-label";
        valueDiv.textContent = value;

        const bar = document.createElement("div");
        bar.className = "array-bar";
        bar.style.height = `${value * 5}px`;

        if (index > iIndex) {
            bar.style.backgroundColor = yellow;
            bar.style.borderColor = transparent;
        }
        
        if (index === jIndex) {
            bar.style.backgroundColor = orange;
            bar.style.borderColor = transparent;
        } else if (index === nextjIndex) {
            bar.style.backgroundColor = green;
            bar.style.borderColor = transparent;
        }
        
        const container = document.createElement("div");
        container.className = "bar-container";
        container.appendChild(valueDiv);
        container.appendChild(bar);

        arrayContainer.appendChild(container);
    });
}

async function bubbleSort() {
    const n = arraySize;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // display j
            displayBubble(currentArray, n - 1 - i, j, j + 1);
            await sleep(delay);

            if (currentArray[j] > currentArray[j + 1]) {
                await swap(j, j + 1);

                displayBubble(currentArray, n - 1 - i, j + 1, j);
                await sleep(delay);

                // Check the pause state
                while (paused) {
                    await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100ms
                }
            }
        }

        // display after every j-loop
        displayBubble(currentArray, n - 2 - i, -1, -1);
        await sleep(delay);
    }

    initButton.removeAttribute("disabled");
}

function displayExchange(array, iIndex, jIndex) {
    arrayContainer.innerHTML = ""; // Clear the container

    array.forEach((value, index) => {
        const valueDiv = document.createElement("div");
        valueDiv.className = "value-label";
        valueDiv.textContent = value;
        valueDiv.style.color = blue;
        valueDiv.style.font.color = blue;
        
        const bar = document.createElement("div");
        bar.className = "array-bar";
        bar.style.height = `${value * 5}px`;

        if (index < iIndex) {
            bar.style.backgroundColor = yellow;
            bar.style.borderColor = transparent;
            valueDiv.style.color = yellow;
        }
        
        if (index === iIndex) {
            bar.style.backgroundColor = orange;
            bar.style.borderColor = transparent;
        } else if (index === jIndex) {
            bar.style.backgroundColor = green;
            bar.style.borderColor = transparent;
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
            displayExchange(currentArray, i, j);
            await sleep(delay);

            if (currentArray[i] > currentArray[j]) {
                await swap(i, j);

                displayExchange(currentArray, i, j);
                await sleep(delay);

                // Check the pause state
                while (paused) {
                    await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100ms
                }
            }
        }
    }

    initButton.removeAttribute("disabled");
}

async function startSorting() {
  // Copy the global array to currentArray
  currentArray = [...globalArray];

  // Disable the start button and enable the pause button initially
  const startButton = document.getElementById("startButton");
  const pauseButton = document.getElementById("pauseButton");
  const stopButton = document.getElementById("stopButton");

  initButton.setAttribute("disabled", "true");
  startButton.setAttribute("disabled", "true");
  pauseButton.removeAttribute("disabled");
  // stopButton.removeAttribute("disabled"); // Enable the stop button

  // Start the sorting process
  const sortTypeSelect = document.getElementById("sorting-method");
  const sortType = sortTypeSelect.value;

  switch (sortType) {
    case 'selectionSort':
      await selectionSort();
      break;
    case 'insertionSort':
      await insertionSort();
      break;
    case 'bubbleSort':
      await bubbleSort();
      break;
    case 'exchangeSort':
      await exchangeSort();
      break;
    default:
      alert('Invalid sort type');
  }

  // await bubbleSort();  
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

