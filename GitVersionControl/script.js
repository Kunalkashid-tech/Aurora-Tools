// Simulated Git repository
let repository = [];

function initializeRepo() {
  repository = [];
  addToOutput('Initialized empty Git repository');
}

function commitChanges() {
  const message = document.getElementById('commitMessage').value.trim();
  if (!message) {
    alert('Please enter a commit message.');
    return;
  }
  
  const commit = {
    message: message,
    timestamp: new Date().toLocaleString()
  };

  repository.push(commit);
  addToOutput(`[master ${repository.length}] ${message}`);
}

function viewCommitHistory() {
  let output = '<strong>Commit History:</strong><br>';
  repository.forEach((commit, index) => {
    output += `[${index + 1}] ${commit.message} - ${commit.timestamp}<br>`;
  });
  addToOutput(output);
}

function addToOutput(message) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML += message + '<br>';
}
