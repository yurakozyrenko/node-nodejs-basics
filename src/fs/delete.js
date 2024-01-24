import fs from 'fs/promises';
import path from 'path';

const url = 'src/fs/files';
const fileName = 'fileToRemove.txt';
// Получение абсолютного пути
const absolutePath = path.resolve(url);
const filePath = path.join(absolutePath, fileName);

const remove = async () => {
    // Write your code here
    try {
        // Удаляем файл, проверка не нужна
        await fs.unlink(filePath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};
await remove();
