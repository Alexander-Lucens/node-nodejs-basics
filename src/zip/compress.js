import zlib from 'node:zlib';
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';

import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filepath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filepath);

const compress = async () => {
  const filesPath = path.join(__dirname, 'files');
  const nameOfFile = 'fileToCompress'
  try {
    await pipeline(
      fs.createReadStream(path.join(filesPath, `${nameOfFile}.txt`)),
      zlib.createGzip(),
      fs.createWriteStream(path.join(filesPath, `${nameOfFile}.gz`)),
    );
    console.log('File compressed successfuly!');
  } catch (error) {
    console.error;
  }
};

await compress();
