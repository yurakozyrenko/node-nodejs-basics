import * as fs from 'node:fs/promises';
import path from 'path';

const exists = async (path) => {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
};
const url = 'src/fs/files';
const fileName = 'wrongFilename.txt';
const newFileName = 'properFilename.md';
 
// Получение абсолютного пути файлов
const absolutePath = path.resolve(url);
const filePath = path.join(absolutePath, fileName);
const newFilePath = path.join(absolutePath, newFileName);

const rename = async () => {
    // Write your code here
    try {
        if (await exists(newFilePath)) {
            throw new Error('FS operation failed');
        }
        // Переименовывает файл
        await fs.rename(filePath, newFilePath);
    } catch (error) {
        console.log(error.message);
    }
};

await rename();
