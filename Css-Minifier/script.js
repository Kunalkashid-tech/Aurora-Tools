function minifyCSS() {
    let cssInput = document.getElementById('css-input').value;

    // Remove comments
    let minifiedCSS = cssInput.replace(/\/\*[\s\S]*?\*\//g, '');
    // Remove whitespace
    minifiedCSS = minifiedCSS.replace(/\s{2,}/g, ' ');
    minifiedCSS = minifiedCSS.replace(/\s*([{}:;,])\s*/g, '$1');
    minifiedCSS = minifiedCSS.replace(/;}/g, '}');

    document.getElementById('css-output').value = minifiedCSS;
}
