function generateImage() {
    var code = document.getElementById('codeInput').value.trim();
    if (!code) {
      alert('Please enter some code.');
      return;
    }
  
    // Split code into lines for multiline handling
    var lines = code.split('\n');
  
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    
    // Adjust canvas dimensions based on text size
    canvas.width = 800; // Adjust width as needed
    canvas.height = lines.length * 20 + 40; // Adjust height based on lines
  
    // Styling the text
    ctx.font = '14px Arial';
  
    // Draw background and text
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'top';
  
    // Draw each line of code
    for (var i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], 10, 20 + i * 20); // Adjust text position (x, y)
    }
  
    // Convert canvas to image
    var img = canvas.toDataURL('image/png');
  
    // Display the image
    var imageContainer = document.getElementById('imageContainer');
    var codeImage = document.getElementById('codeImage');
    codeImage.src = img;
    imageContainer.style.display = 'block';
  
    // Show download button
    var downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.style.display = 'block';
  }
  
  function downloadImage() {
    var codeImage = document.getElementById('codeImage');
    var imgURL = codeImage.src.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    var link = document.createElement('a');
    link.download = 'code_image.png';
    link.href = imgURL;
    link.click();
  }
  