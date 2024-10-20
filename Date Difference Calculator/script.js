const date1Input = document.getElementById('date1Input');
const date2Input = document.getElementById('date2Input');
const calculateButton = document.getElementById('calculateButton');
const dateDifferenceResult = document.getElementById('dateDifferenceResult');

function calculateDateDifference() {
    const date1 = new Date(date1Input.value);
    const date2 = new Date(date2Input.value);
    const difference = Math.abs(date2 - date1);
    const days = Math.floor(difference / (1000 * 3600 * 24));

    dateDifferenceResult.textContent = `The difference between the two dates is ${days} days.`;
}

calculateButton.addEventListener('click', calculateDateDifference);