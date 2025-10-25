import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const pathToScript = path.join(__dirname, 'files', 'script.js');
  return new Promise((resolve, reject) => {
    const child = spawn('node', [pathToScript, ...args], {
      stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    child.on('close', (code) => {
      resolve(code);
    });

    child.on('error', (err) => {
      reject(err);
    })
  });
  
};

// Put your arguments in function call to test this functionality
spawnChildProcess([ 'echo', 'Something', 'other', 'More']);
