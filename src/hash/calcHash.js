import crypto from 'node:crypto';
import fs from 'node:fs';
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = crypto.createHash("sha256");
  const stream = fs.createReadStream(filePath);

  stream.on('data', chunk => hash.update(chunk));
  stream.on('end', () => console.log(hash.digest('hex')) );
  stream.on('error', err => {
    console.error('Error during reading file.\n', err);
  });
};

await calculateHash();
