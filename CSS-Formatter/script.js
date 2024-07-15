function formatCSS() {
    let cssInput = document.getElementById('cssInput').value;
    let formattedCSS = css_beautify(cssInput);
    document.getElementById('cssOutput').value = formattedCSS;
}

function css_beautify(style) {
    var options = {
        indent_size: 4,
        indent_char: ' ',
        selector_separator_newline: true,
        newline_between_rules: true
    };

    var formatted = '',
        pad = 0;

    style = style.replace(/\s{2,}/g, ' '); 
    style = style.replace(/(\s?)\{\s*/g, ' {\n'); 
    style = style.replace(/;(\s?)/g, ';\n' + ' '.repeat(pad * options.indent_size)); 
    style = style.replace(/\/\*/g, '\n/*');
    style = style.replace(/\*\//g, '*/\n');
    style = style.replace(/\}\s?/g, '}\n\n');

    var lines = style.split('\n');
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf('}') !== -1) pad--;
        formatted += ' '.repeat(pad * options.indent_size) + lines[i] + '\n';
        if (lines[i].indexOf('{') !== -1) pad++;
    }

    return formatted.replace(/\n{2,}/g, '\n');
}
