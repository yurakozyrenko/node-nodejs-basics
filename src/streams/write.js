import { pipeline } from 'node:stream/promises';
import { createWriteStream } from 'node:fs';
import path from 'node:path';

const url = 'src/streams/files';
const fileName = 'fileToWrite.txt';
// Получение абсолютного пути
const absolutePath = path.resolve(url);
const filePath = path.join(absolutePath, fileName);

const write = async () => {
    // Write your code here
    await pipeline(process.stdin, createWriteStream(filePath));
};

await write();
