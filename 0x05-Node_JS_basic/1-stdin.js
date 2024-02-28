process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.once('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.exit(0);
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
