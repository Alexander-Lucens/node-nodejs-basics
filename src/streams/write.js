import process from "node:process";
import fs from "node:fs";
import path  from "node:path";
import { fileURLToPath } from "node:url";

const __filepath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filepath);

const write = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

  const stream = fs.createWriteStream(filePath);
  
  process.stdin.pipe(stream);
};

await write();
