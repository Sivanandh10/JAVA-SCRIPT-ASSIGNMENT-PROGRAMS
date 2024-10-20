// Get the textarea and result display elements
const textInput = document.getElementById('textInput');
const analyzeButton = document.getElementById('analyzeButton');
const analysisResults = document.getElementById('analysisResults');

// Function to analyze the text
function analyzeText() {
    const text = textInput.value.trim();
    if (text === '') {
        analysisResults.innerText = 'Please enter some text for analysis.';
        return;
    }

    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
    const characterCount = text.length;
    const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;

    analysisResults.innerHTML = `
        <p>Word Count: ${wordCount}</p>
        <p>Character Count: ${characterCount}</p>
        <p>Sentence Count: ${sentenceCount}</p>
    `;
}

// Event listener for the analyze button
analyzeButton.addEventListener('click', analyzeText);