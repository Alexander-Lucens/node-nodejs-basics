import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToExec = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
  const numOfCores = os.cpus().length;
  const promises = [];

  for (let i = 0; i < numOfCores; i++) {
    promises.push(
      new Promise((resolve) => {
        const worker = new Worker(pathToExec, { type: 'module' });

        worker.once('message', (data) => {
          resolve(data);
          worker.terminate();
        });

        worker.once('error', () => {
          resolve({ status: 'error', data: null });
          worker.terminate();
        });

        worker.postMessage(10 + i);
      })
    );
  }
  const output = await Promise.all(promises);
  console.log(output);
};

await performCalculations();