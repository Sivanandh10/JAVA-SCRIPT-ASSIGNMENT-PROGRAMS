// Get the combo box and input elements
const comboBox = document.getElementById('comboBox');
const addItemInput = document.getElementById('addItemInput');
const addItemButton = document.getElementById('addItemButton');
const removeItemButton = document.getElementById('removeItemButton');
const displayItemsButton = document.getElementById('displayItemsButton');
const displayItemsDiv = document.getElementById('displayItems');

// Function to add an item to the combo box
function addItem() {
    const itemText = addItemInput.value.trim();
    if (itemText !== '') {
        const option = document.createElement('option');
        option.text = itemText;
        comboBox.add(option);
        addItemInput.value = ''; // Clear input field
    }
}

// Function to remove the selected item from the combo box
function removeItem() {
    const selectedIndex = comboBox.selectedIndex;
    if (selectedIndex !== -1) {
        comboBox.remove(selectedIndex);
    }
}

// Function to display all items in the combo box
function displayItems() {
    const items = Array.from(comboBox.options).map(option => option.text);
    displayItemsDiv.innerText = 'Items: ' + items.join(', ');
}

// Event listeners for buttons
addItemButton.addEventListener('click', addItem);
removeItemButton.addEventListener('click', removeItem);
displayItemsButton.addEventListener('click', displayItems);