function generateDebugger() {
    const codeInput = document.getElementById('codeInput').value;
    const debuggerOutput = document.getElementById('debuggerOutput');
  
    // Simulate a debugger output
    const debugInfo = `Debugger output for:\n\n${codeInput}\n\n======================================\nDebugging information:\n- Line 1: Something happened\n- Line 2: Another issue found\n- Line 3: Warning detected`;
  
    // Display debugger output
    debuggerOutput.textContent = debugInfo;
  }
  