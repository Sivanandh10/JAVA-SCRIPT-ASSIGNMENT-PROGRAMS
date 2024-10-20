let counterValue = 0; // Initialize counter value
let intervalId; // Variable to store the interval ID

// Function to update the counter display
function updateCounter() {
    document.getElementById('counter').textContent = counterValue;
}

// Function to start the counter
function startCounter() {
    if (!intervalId) { // Prevent multiple intervals
        intervalId = setInterval(() => {
            counterValue++;
            updateCounter();
        }, 1000); // Increment every second
    }
}

// Function to stop the counter
function stopCounter() {
    clearInterval(intervalId); // Clear the interval
    intervalId = null; // Reset interval ID
}

// Function to reset the counter
function resetCounter() {
    stopCounter(); // Stop the counter first
    counterValue = 0; // Reset counter value
    updateCounter(); // Update display
}

// Event listeners for buttons
document.getElementById('startButton').addEventListener('click', startCounter);
document.getElementById('stopButton').addEventListener('click', stopCounter);
document.getElementById('resetButton').addEventListener('click', resetCounter);