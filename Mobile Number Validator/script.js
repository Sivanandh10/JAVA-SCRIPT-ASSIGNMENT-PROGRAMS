// Get the input field and result display elements
const mobileNumberInput = document.getElementById('mobileNumberInput');
const validateButton = document.getElementById('validateButton');
const validationResult = document.getElementById('validationResult');

// Function to validate the mobile number
function validateMobileNumber() {
    const mobileNumber = mobileNumberInput.value.trim();
    const pattern = /^\d{10}$/; // 10-digit number

    if (pattern.test(mobileNumber)) {
        validationResult.innerText = 'Valid mobile number';
    } else {
        validationResult.innerText = 'Invalid mobile number. Please enter a 10-digit number.';
    }
}

// Event listener for the validate button
validateButton.addEventListener('click', validateMobileNumber);