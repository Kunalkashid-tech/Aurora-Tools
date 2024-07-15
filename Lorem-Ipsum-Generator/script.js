function generateLoremIpsum() {
    const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
    const paragraphs = document.getElementById('paragraphs').value;
    const output = document.getElementById('output');
    
    output.innerHTML = '';
    
    for (let i = 0; i < paragraphs; i++) {
        const paragraph = document.createElement('p');
        paragraph.textContent = loremText;
        output.appendChild(paragraph);
    }
}
