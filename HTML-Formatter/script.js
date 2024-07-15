function formatHTML() {
    const input = document.getElementById('input').value;
    const formatted = beautifyHTML(input);
    document.getElementById('output').value = formatted;
}

function beautifyHTML(html) {
    const tab = '\t';
    let result = '';
    let indent = '';

    html.split(/>\s*</).forEach((element) => {
        if (element.match(/^\/\w/)) {
            indent = indent.substring(tab.length);
        }

        result += indent + '<' + element + '>\r\n';

        if (element.match(/^<?\w[^>]*[^\/]$/)) {
            indent += tab;
        }
    });

    return result.substring(1, result.length - 3);
}
