const arrayContainer = document.getElementById("array-container");

let arraySize = 10;
let delay = 1000;
let originalArray = []; // Declare a global array variable
let currentArray = [];

// This variable to keep track of the pause state
let paused = false;
let finished = false; // sorting accomplish state

function generateRandomArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 30) + 10); // Adjust range as needed
  }
  
  globalArray = [...array];
  
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
  await new Promise(resolve => setTimeout(resolve, delay)); // Wait for the delay
  const tmp = currentArray[idx1];
  currentArray[idx1] = currentArray[idx2];
  currentArray[idx2] = tmp;
}

async function bubbleSort() {
  //const n = array.length;
  const n = arraySize;

  // outerLoop: for (let i = 0; i < n - 1; i++) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (currentArray[j] > currentArray[j + 1]) {
        await swap(j, j + 1);
        displayArray(currentArray);

        // Check the pause state
        while (paused) {
          await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100ms

          // if (stopped) {
          //   break outerLoop;
          // }
        }
      }
    }
  }

  finish = true;
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

  switch(sortType) {
    case 'bubbleSort':
      await bubbleSort();
      break;
    case 'exchangeSort':
        // await bubbleSort();
        console.log('exchange sort');
        alert("exchange sort");
        break;
    // case 'otherSort':
    //   await otherSort();
    //   break;
    default:
      console.log('Invalid sort type');
  }
  
  // await bubbleSort();  
}

// Function to toggle pause and continue
function togglePause() {
  paused = !paused; // Toggle the paused state
  const pauseButton = document.getElementById("pauseButton");
  pauseButton.textContent = paused ? "Resume" : "Pause";

  // if (!paused) {
  //   // If continuing, start/resume sorting
  //   continueSorting();
  // }
}

function reloadPage() {
  window.location.reload();
}