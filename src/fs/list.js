import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const filesDir = path.join(__dirname, 'files');

  try {
    await fs.access(filesDir);
    const filesArray = await fs.readdir(filesDir);
    console.log(filesArray);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list();
