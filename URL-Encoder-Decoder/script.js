function encodeURL() {
    const input = document.getElementById('input').value;
    const encoded = encodeURIComponent(input);
    document.getElementById('output').value = encoded;
  }
  
  function decodeURL() {
    const input = document.getElementById('input').value;
    const decoded = decodeURIComponent(input);
    document.getElementById('output').value = decoded;
  }
  