import * as fs from 'node:fs/promises';
import path from 'path';

const url = 'src/fs/files';
const fileName = 'fileToRead.txt';
// Получение абсолютного пути
const absolutePath = path.resolve(url);
const filePath = path.join(absolutePath, fileName);

const read = async () => {
    // Write your code here
    try {
        const content = await fs.readFile(filePath, 'utf8');
        console.log(content);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();
