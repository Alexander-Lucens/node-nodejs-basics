import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  
  const oldDir = path.join(__dirname, 'files');
  const newDir = path.join(__dirname, 'files_copy');

  try {

    await fs.access(oldDir);

    try {
      await fs.access(newDir);
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw new Error('FS operation failed');
      }
    }

    await fs.cp(oldDir, newDir, { recursive: true });
    
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
