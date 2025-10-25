import process from "node:process";
import fs from "node:fs";
import path  from "node:path";
import { fileURLToPath } from "node:url";

const __filepath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filepath);

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const stream = fs.createReadStream(filePath);

  stream.pipe(process.stdout);
  // OR
  // stream.on('data', chunk => process.stdout.write(chunk));
};

await read();
