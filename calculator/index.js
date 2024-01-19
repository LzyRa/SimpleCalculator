// Get the HTML element with the id "display"
const display = document.getElementById("display");

// Function to append inputs to the display
function appendToDisplay(input){
    display.value += input;

}

// Clear the display
function clearDisplay(){
    display.value = ("");

}

// Function to perfrom calculation
function calculate(){
    display.value = eval(display.value)

}