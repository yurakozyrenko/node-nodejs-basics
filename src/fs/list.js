import fs from 'fs/promises';
import path from 'path';

const url = 'src/fs/files';
// Получение абсолютного пути
const absolutePath = path.resolve(url);

const list = async () => {
    // Write your code here
    try {
        const content = await fs.readdir(absolutePath);
        console.log(content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
