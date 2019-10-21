const buildKeyFile = require('child_process').spawn;
const startServer = require('child_process').spawn;

buildKeyFile('npm', ['run keyfile'], {
  stdio: 'inherit',
  shell: true
});

startServer('npm', ['start'], { stdio: 'inherit', shell: true });
