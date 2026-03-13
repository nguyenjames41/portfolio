const path = require('path')
const { spawn } = require('child_process')

const dir = __dirname

// Use the cmd wrapper on Windows
const child = spawn('cmd', ['/c', 'npx', 'vite', '--port', '5173', '--host'], {
  stdio: 'inherit',
  cwd: dir,
})

child.on('error', (err) => {
  console.error('Failed to start vite:', err)
  process.exit(1)
})
