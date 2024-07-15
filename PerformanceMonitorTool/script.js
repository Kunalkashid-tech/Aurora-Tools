document.addEventListener('DOMContentLoaded', function() {
    setInterval(function() {
      // CPU usage (not universally available)
      var cpuUsage = performance.now(); // Simulated value
  
      // Memory usage
      var memoryUsage = (performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit) * 100;
  
      // Network speed (simulated value)
      var networkSpeed = Math.random() * 100; // Simulated value
  
      // Page load time
      var pageLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
  
      // Update UI
      document.getElementById('cpuUsage').textContent = cpuUsage.toFixed(2) + '%';
      document.getElementById('memoryUsage').textContent = memoryUsage.toFixed(2) + '%';
      document.getElementById('networkSpeed').textContent = networkSpeed.toFixed(2);
      document.getElementById('pageLoadTime').textContent = pageLoadTime.toFixed(0);
    }, 1000); // Update every second
  });
  