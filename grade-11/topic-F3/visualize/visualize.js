const blue = "#0099cc";
const green = "#00e673";
const pink = "#ff748c";
const orange = "#ff8433";
const yellow = "#ffcc3b";
const grey = "#cfcfcf";
const transparent = "transparent";

function generateRandomArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 30) + 10); // Adjust range as needed
    }

    // globalArray = [...array];

    return array;
}

function displayArray(array, array_container) {
    array_container.innerHTML = ""; // Clear the container

    array.forEach((value, index) => {
        const valueDiv = document.createElement("div");
        valueDiv.className = "value-label";
        valueDiv.textContent = value;
        valueDiv.style.color = blue;

        const bar = document.createElement("div");
        bar.className = "array-bar";
        bar.style.height = `${value * 5}px`;
        bar.style.borderColor = blue;

        const indexDiv = document.createElement("div");
        indexDiv.className = "index-label";
        indexDiv.textContent = index;
        indexDiv.style.color = blue;

        const container = document.createElement("div");
        container.className = "bar-container";
        container.appendChild(valueDiv);
        container.appendChild(bar);
        container.appendChild(indexDiv);

        array_container.appendChild(container);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function swap_move(array, idx1, idx2, sleep_time) {
    const bars = document.getElementsByClassName('array-bar');
    const barContainers = document.getElementsByClassName('bar-container');
    
    const bar1 = bars[idx1];
    const bar2 = bars[idx2];
    
    const bar1Container = barContainers[idx1];
    const bar2Container = barContainers[idx2];
    
    // Move bars up
    bar1.style.transform = 'translateY(-50px)';
    bar2.style.transform = 'translateY(-50px)';
    await sleep(sleep_time);
    
    // Calculate exact positions using offsetLeft
    const bar1Position = bar1Container.offsetLeft;
    const bar2Position = bar2Container.offsetLeft;
    const totalDistance = Math.abs(bar2Position - bar1Position);
    
    const totalSteps = 50; // Total number of steps for the animation
    const stepSize = totalDistance / totalSteps; // Size of each step in pixels
    const direction = idx2 > idx1 ? 1 : -1; // Determine the direction of movement
    
    for (let step = 0; step <= totalSteps; step++) {
        const offset = step * stepSize * direction;
        bar1.style.transform = `translate(${offset}px, -50px)`;
        bar2.style.transform = `translate(${-offset}px, -50px)`;
        await sleep(sleep_time); // Adjust sleep time for smoother animation
    }
    
    // Ensure bars reach exact positions
    bar1.style.transform = `translate(${(bar2Position - bar1Position) * direction}px, -50px)`;
    bar2.style.transform = `translate(${(bar1Position - bar2Position) * direction}px, -50px)`;
    await sleep(sleep_time);

    // Set the final positions using left and top properties
    const bar1FinalPosition = bar2Position + 'px';
    const bar2FinalPosition = bar1Position + 'px';

    bar1Container.style.position = 'absolute';
    bar2Container.style.position = 'absolute';
    bar1Container.style.left = bar1FinalPosition;
    bar2Container.style.left = bar2FinalPosition;

    // Move bars back down without resetting the transform
    bar1.style.transform = 'translateY(0)';
    bar2.style.transform = 'translateY(0)';
    await sleep(sleep_time);

    // Swap positions in the array
    // const temp = array[idx1];
    // array[idx1] = array[idx2];
    // array[idx2] = temp;
    // await sleep(sleep_time);
    
    // Refresh the array display after swap
    // displayArray(currentArray);
}

async function swap(array, idx1, idx2) {
    const t = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = t;
}

export { blue, green, pink, orange, yellow, grey, transparent,
    generateRandomArray, displayArray, sleep, swap
};
