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

const urlOrign = 'src/fs/files';
const urlCopy = 'src/fs/files_copy';
// Получение абсолютного пути
const absolutePathOrign = path.resolve(urlOrign);
const absolutePathCopy = path.resolve(urlCopy);

const copy = async () => {
    // Write your code here
    try {
        if (
            (await exists(absolutePathCopy)) ||
            !(await exists(absolutePathOrign))
        ) {
            throw new Error('FS operation failed');
        }

        //Получаем файлы из папки files
        const files = await fs.readdir(absolutePathOrign);

        //создаем папку files_copy
        await fs.mkdir(absolutePathCopy);

        const promises = files.map((fileName) => {
            fs.copyFile(
                path.join(absolutePathOrign, fileName),
                path.join(absolutePathCopy, fileName)
            );
        });
        await Promise.all(promises);
    } catch (error) {
        console.log(error.message);
    }
};
await copy();
