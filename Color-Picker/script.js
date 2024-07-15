document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    const colorValue = document.getElementById('colorValue');

    colorPicker.addEventListener('input', () => {
        const selectedColor = colorPicker.value;
        colorValue.textContent = `Selected Color: ${selectedColor}`;
        colorValue.style.color = selectedColor;
    });
});
