import path from 'node:path';
import { release, version } from 'node:os';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// May be not the best way to gat data (because its Synchronous)
const getDataJSON = (stringPath) => {
  const url = new URL(stringPath, import.meta.url);
  const data = fs.readFileSync(url);
  return JSON.parse(data);
};

const a =  getDataJSON('./files/a.json');
const b =  getDataJSON('./files/b.json');

const random = Math.random();

const unknownObject = random > 0.5 ? a : b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = http.createServer((req, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
