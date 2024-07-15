const upload = document.getElementById('upload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let originalImageData;

function loadImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        }
        img.src = e.target.result;
    }
    reader.readAsDataURL(file);
}

function applyFilter(filter) {
    if (!originalImageData) return;

    const imageData = ctx.createImageData(originalImageData);
    const data = imageData.data;
    const originalData = originalImageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const r = originalData[i];
        const g = originalData[i + 1];
        const b = originalData[i + 2];
        const a = originalData[i + 3];

        if (filter === 'grayscale') {
            const gray = 0.3 * r + 0.59 * g + 0.11 * b;
            data[i] = data[i + 1] = data[i + 2] = gray;
        } else if (filter === 'sepia') {
            data[i] = 0.393 * r + 0.769 * g + 0.189 * b;
            data[i + 1] = 0.349 * r + 0.686 * g + 0.168 * b;
            data[i + 2] = 0.272 * r + 0.534 * g + 0.131 * b;
        } else if (filter === 'invert') {
            data[i] = 255 - r;
            data[i + 1] = 255 - g;
            data[i + 2] = 255 - b;
        } else if (filter === 'normal') {
            data[i] = r;
            data[i + 1] = g;
            data[i + 2] = b;
        }
        data[i + 3] = a;
    }
    ctx.putImageData(imageData, 0, 0);
}

function resetImage() {
    if (originalImageData) {
        ctx.putImageData(originalImageData, 0, 0);
    }
}

function downloadImage() {
    const link = document.createElement('a');
    link.download = 'filtered-image.png';
    link.href = canvas.toDataURL();
    link.click();
}
