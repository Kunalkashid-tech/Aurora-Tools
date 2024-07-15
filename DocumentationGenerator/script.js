document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('docForm');
    const entriesContainer = document.getElementById('entries');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get input values
        const title = document.getElementById('entryTitle').value;
        const content = document.getElementById('entryContent').value;

        // Create entry element
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');

        const titleElement = document.createElement('h2');
        titleElement.textContent = title;

        const contentElement = document.createElement('p');
        contentElement.textContent = content;

        entryDiv.appendChild(titleElement);
        entryDiv.appendChild(contentElement);

        // Append entry to container
        entriesContainer.appendChild(entryDiv);

        // Clear form inputs
        form.reset();
    });

    // Function to download documentation as a text file
    function downloadDocumentation() {
        const entries = entriesContainer.innerHTML;
        const blob = new Blob([entries], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'documentation.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Event listener for download button
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', function() {
        downloadDocumentation();
    });
});
