const passwordLengthInput = document.getElementById('passwordLengthInput');
const generateButton = document.getElementById('generateButton');
const generatedPassword = document.getElementById('generatedPassword');

function generatePassword() {
    const passwordLength = parseInt(passwordLengthInput.value);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    generatedPassword.textContent = password;
}

generateButton.addEventListener('click', generatePassword);