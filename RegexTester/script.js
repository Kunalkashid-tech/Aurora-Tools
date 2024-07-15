function testRegex() {
    var regexPattern = document.getElementById('regexInput').value;
    var textToTest = document.getElementById('textInput').value;
    var regex = new RegExp(regexPattern, 'g');
    var match;
    var matches = [];
  
    while ((match = regex.exec(textToTest)) !== null) {
      matches.push(match[0]);
    }
  
    displayResults(matches);
  }
  
  function displayResults(matches) {
    var resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
  
    if (matches.length > 0) {
      var resultHTML = '<h3>Matches:</h3><ul>';
      matches.forEach(function (match) {
        resultHTML += '<li>' + match + '</li>';
      });
      resultHTML += '</ul>';
      resultsContainer.innerHTML = resultHTML;
    } else {
      resultsContainer.innerHTML = '<p>No matches found.</p>';
    }
  }
  