import * as fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const url = 'src/hash/files';
const fileName = 'fileToCalculateHashFor.txt';
// Получение абсолютного пути
const absolutePath = path.resolve(url);
const filePath = path.join(absolutePath, fileName);

const calculateHash = async () => {
    // Write your code here
    const content = await fs.readFile(filePath);
    const value = crypto.createHash('SHA256').update(content);
    const resultValue = value.digest('hex');
    console.log(resultValue);
};

await calculateHash();
