function generateTable() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;

    let tableHTML = '<table border="1">\n';
    for (let i = 0; i < rows; i++) {
        tableHTML += '  <tr>\n';
        for (let j = 0; j < cols; j++) {
            tableHTML += `    <td>Row ${i + 1} Col ${j + 1}</td>\n`;
        }
        tableHTML += '  </tr>\n';
    }
    tableHTML += '</table>';

    document.getElementById('table-code').textContent = tableHTML;
}
