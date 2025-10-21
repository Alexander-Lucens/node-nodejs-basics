import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const deleteFile = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await fs.rm(deleteFile);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
