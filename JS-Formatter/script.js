function formatCode() {
    const inputCode = document.getElementById('inputCode').value;

    if (!inputCode.trim()) {
        alert('Please enter some JavaScript code to format.');
        return;
    }

    try {
        const formattedCode = js_beautify(inputCode);
        document.getElementById('outputCode').value = formattedCode;
    } catch (error) {
        alert('Error formatting code: ' + error.message);
    }
}

// Include js-beautify script
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/js-beautify@1.14.0/js/lib/beautify.js';
document.head.appendChild(script);
