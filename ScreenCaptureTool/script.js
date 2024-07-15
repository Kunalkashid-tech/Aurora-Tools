const startCaptureBtn = document.getElementById('startCapture');
const screenVideo = document.getElementById('screenVideo');
const canvas = document.getElementById('canvas');
const captureBtn = document.getElementById('captureBtn');
const downloadLink = document.getElementById('downloadLink');

let stream;
let mediaRecorder;
let chunks = [];

startCaptureBtn.addEventListener('click', async () => {
  try {
    stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    screenVideo.srcObject = stream;
    screenVideo.style.display = 'block';
    startCaptureBtn.style.display = 'none';
    captureBtn.style.display = 'inline-block';
  } catch(err) {
    console.error('Error: ' + err);
  }
});

captureBtn.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  canvas.width = screenVideo.videoWidth;
  canvas.height = screenVideo.videoHeight;
  context.drawImage(screenVideo, 0, 0, canvas.width, canvas.height);

  canvas.style.display = 'block';
  downloadLink.href = canvas.toDataURL('image/png');
  downloadLink.style.display = 'inline-block';
});

downloadLink.addEventListener('mouseover', () => {
  downloadLink.href = canvas.toDataURL('image/png');
});

