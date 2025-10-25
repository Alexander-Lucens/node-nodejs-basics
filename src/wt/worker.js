import { parentPort } from 'node:worker_threads';

const errorMsg = 'Crazy son of your mom!\nSomohow you got an:\nInvalid input Error!';
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.on('message', (data) => {
    try {
      const n = Number(data);
      if (isNaN(n)) throw new Error(errorMsg);
      const result = nthFibonacci(n);
      parentPort.postMessage({ status: 'resolved', data: result });
    } catch (err) {
      parentPort.postMessage({ status: 'error', data: null });
    }
  });
};

sendResult();
