import { Worker } from 'node:worker_threads';
import os from 'node:os';
import path from 'path';

const url = 'src/wt';
const workerName = 'worker.js';

// Получение абсолютного пути
const absolutePath = path.resolve(url);
const workerPath = path.join(absolutePath, workerName);

// Создаем массив исходя из кол-ва ядер
const numWorkers = os.cpus().length;
const results = new Array(numWorkers);

const performCalculations = async () => {
    // Write your code here
    const fib = (workerData) =>
        new Promise((res, rej) => {
            const worker = new Worker(workerPath, { workerData });
            worker.on('message', (data) => res({ status: 'resolved', data }));
            worker.on('error', () => rej({ status: 'error', data: null }));
        });

    for (let i = 0; i < numWorkers; i += 1) {
        results[i] = fib(i + 10);
    }
    const dataValue = await Promise.allSettled(results);
    console.log(dataValue);
};

await performCalculations();
