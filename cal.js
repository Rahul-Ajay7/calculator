  
// Function to insert the clicked button's value into the display
function insert(value) {
    document.querySelector('input[name="display"]').value += value;
}

// Function to clear the display (AC button)
function clearData() {
    document.querySelector('input[name="display"]').value = '';
}

// Function to delete the last character (DE button)
function deletelast() {
    let currentValue = document.querySelector('input[name="display"]').value;
    document.querySelector('input[name="display"]').value = currentValue.slice(0, -1);
}

// Function to calculate the result (equals button)
function cal() {
    let calval = document.querySelector('input[name="display"]').value;
        // Evaluate the expression and update the display
    document.querySelector('input[name="display"]').value = eval(calval);
}
       