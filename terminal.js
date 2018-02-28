
const { spawnSync } = require('child_process');
const args = process.argv.slice(2);

// Do arguments check here
if (!args.length) {
  console.error('Incorrect params provided!');
  return;
}

// Parse [user@]host into array
const credentials = args.shift().split('@').filter(val => !!val);

if (credentials.length < 2) {
  const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Login: '
  });

  rl.on('line', (line) => {
    const login = line.trim();
  
    if (!login) {
      rl.prompt();
    } else {
      credentials.unshift(line.trim());
      rl.close();
      runSsh();
    }
  });

  rl.prompt();
} else {
  runSsh();
}

function runSsh() {
  spawnSync('ssh', [credentials.join('@'), ...args], { stdio: 'inherit' });
}