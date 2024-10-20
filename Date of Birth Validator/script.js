const dobInput = document.getElementById('dobInput');
const validateButton = document.getElementById('validateButton');
const validationResult = document.getElementById('validationResult');

function validateDob() {
    const dob = new Date(dobInput.value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();

    if (dob.toString() === 'Invalid Date') {
        validationResult.textContent = 'Invalid date of birth.';
    } else if (age < 18) {
        validationResult.textContent = 'You must be at least 18 years old.';
    } else {
        validationResult.textContent = 'Date of birth is valid.';
    }
}

validateButton.addEventListener('click', validateDob);