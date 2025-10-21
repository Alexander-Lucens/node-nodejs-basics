import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    await fs.access(fileToRead);
    const data = await fs.readFile(fileToRead, { encoding: 'utf8'});
    console.log(data);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();
