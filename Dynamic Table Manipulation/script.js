const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const addRowButton = document.getElementById('addRowButton');
const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

function addRow() {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    if (name && age) {
        const newRow = dataTable.insertRow();
        const nameCell = newRow.insertCell(0);
        const ageCell = newRow.insertCell(1);
        
        nameCell.textContent = name;
        ageCell.textContent = age;

        nameInput.value = '';
        ageInput.value = '';
    } else {
        alert('Please enter both name and age.');
    }
}

addRowButton.addEventListener('click', addRow);