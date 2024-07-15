// script.js
document.getElementById('packageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const packageManager = document.getElementById('packageManager').value;
    const packageName = document.getElementById('packageName').value.trim();
    let command = '';

    switch(packageManager) {
        case 'npm':
            command = `npm install ${packageName}`;
            break;
        case 'yarn':
            command = `yarn add ${packageName}`;
            break;
        case 'pip':
            command = `pip install ${packageName}`;
            break;
        default:
            command = 'Please select a package manager';
    }

    document.getElementById('command').textContent = command;
});
