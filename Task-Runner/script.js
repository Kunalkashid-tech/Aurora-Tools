function addTask() {
    const taskName = document.getElementById('taskName').value.trim();
    if (!taskName) return;
  
    const taskRunner = document.querySelector('input[name="taskRunner"]:checked').value;
    const generatedScript = document.getElementById('generatedScript');
    const currentScript = generatedScript.value.trim();
  
    let taskScript = '';
  
    switch (taskRunner) {
      case 'gulp':
        taskScript = `gulp.task('${taskName}', function() {\n  console.log('Running ${taskName} task');\n});\n\n`;
        break;
      case 'grunt':
        taskScript = `grunt.registerTask('${taskName}', function() {\n  console.log('Running ${taskName} task');\n});\n\n`;
        break;
      case 'npm':
        taskScript = `"${taskName}": "echo 'Running ${taskName} task'\",\n`;
        break;
      default:
        break;
    }
  
    const updatedScript = currentScript + taskScript;
    generatedScript.value = updatedScript;
  }
  