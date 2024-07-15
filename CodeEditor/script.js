function showEditor(editor) {
  document.getElementById('html-editor').classList.add('hidden');
  document.getElementById('css-editor').classList.add('hidden');
  document.getElementById('js-editor').classList.add('hidden');
  document.getElementById(`${editor}-editor`).classList.remove('hidden');
}

function runCode() {
  const htmlCode = document.getElementById('html-code').value;
  const cssCode = `<style>${document.getElementById('css-code').value}</style>`;
  const jsCode = `<script>${document.getElementById('js-code').value}<\/script>`;
  const output = document.getElementById('output').contentWindow.document;

  output.open();
  output.write(htmlCode + cssCode + jsCode);
  output.close();
}
