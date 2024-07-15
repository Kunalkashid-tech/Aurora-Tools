function encodeHTML() {
    const inputText = document.getElementById('inputText').value;
    const encodedText = inputText.replace(/&/g, '&amp;')
                                 .replace(/</g, '&lt;')
                                 .replace(/>/g, '&gt;')
                                 .replace(/"/g, '&quot;')
                                 .replace(/'/g, '&#039;');
    document.getElementById('outputText').value = encodedText;
}

function decodeHTML() {
    const inputText = document.getElementById('inputText').value;
    const decodedText = inputText.replace(/&amp;/g, '&')
                                 .replace(/&lt;/g, '<')
                                 .replace(/&gt;/g, '>')
                                 .replace(/&quot;/g, '"')
                                 .replace(/&#039;/g, "'");
    document.getElementById('outputText').value = decodedText;
}
