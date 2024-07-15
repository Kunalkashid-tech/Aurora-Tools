async function generateHash() {
    const input = document.getElementById('input').value;
    
    if (input.trim() === '') {
      alert('Please enter text to hash.');
      return;
    }
    
    const hash = await sha512(input);
    
    document.getElementById('output').value = hash;
  }
  
  async function sha512(str) {
    const buffer = await crypto.subtle.digest('SHA-512', new TextEncoder().encode(str));
    const hashArray = Array.from(new Uint8Array(buffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    
    return hashHex;
  }
  