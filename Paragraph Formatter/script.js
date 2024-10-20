const paragraphInput = document.getElementById('paragraphInput');
const formatButton = document.getElementById('formatButton');
const formattedParagraph = document.getElementById('formattedParagraph');

function formatParagraph() {
    const paragraph = paragraphInput.value.trim();
    const formattedText = paragraph.replace(/\n/g, '<br>').replace(/\s+/g, ' ');
    formattedParagraph.innerHTML = formattedText;
}

formatButton.addEventListener('click', formatParagraph);