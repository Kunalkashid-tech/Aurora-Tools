function generateBarcode() {
    var input = document.getElementById('barcode-input').value;
    JsBarcode("#barcode", input, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 100,
        displayValue: true
    });
}
