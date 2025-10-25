import zlib from 'node:zlib';
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';

import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filepath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filepath);

const decompress = async () => {
  const filesPath = path.join(__dirname, 'files');
  const nameOfFile = 'fileToCompress';

  const readFrom = fs.createReadStream(path.join(filesPath, `${nameOfFile}.gz`));
  const writeTo = fs.createWriteStream(path.join(filesPath, `${nameOfFile}.txt`));

  await pipeline(readFrom, zlib.createUnzip(), writeTo);

  console.log('Decompression successful.');
};

await decompress();
