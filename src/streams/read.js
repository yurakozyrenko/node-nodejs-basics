import { pipeline } from 'node:stream/promises';
import { createReadStream } from 'node:fs';
import path from 'node:path';

const url = 'src/streams/files';
const fileName = 'fileToRead.txt';
// Получение абсолютного пути
const absolutePath = path.resolve(url);
const filePath = path.join(absolutePath, fileName);

const read = async () => {
    // Write your code here
    await pipeline(createReadStream(filePath), process.stdout);
};

await read();
