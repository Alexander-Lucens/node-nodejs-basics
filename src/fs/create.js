import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  /* 
    Safity feature.
    Allow to call `create.js` from warious places and have same resule.
  */
  const filePath = path.join(__dirname, 'files', 'fresh.txt');

  try {
    await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx'});
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();
