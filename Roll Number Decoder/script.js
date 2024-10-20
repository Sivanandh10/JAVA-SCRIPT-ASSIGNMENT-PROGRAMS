const rollNumberInput = document.getElementById('rollNumberInput');
const decodeButton = document.getElementById('decodeButton');
const decodedResult = document.getElementById('decodedResult');

function decodeRollNumber() {
    const rollNumber = rollNumberInput.value.trim();
    const pattern = /^(\d{2})(\d{2})(\d{2})$/; // Example: 123456
    const match = rollNumber.match(pattern);
    
    if (match) {
        const year = match[1];
        const course = match[2];
        const serial = match[3];
        decodedResult.innerText = `Year: ${year}, Course: ${course}, Serial: ${serial}`;
    } else {
        decodedResult.innerText = 'Invalid roll number format. Use YYCCSS.';
    }
}

decodeButton.addEventListener('click', decodeRollNumber);