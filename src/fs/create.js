import fs from 'fs/promises';
import path from 'path';

const DATA = 'I am fresh and young';
const fileName = 'fresh.txt';
const url = 'src/fs/files';
// Получение абсолютного пути
const absolutePath = path.resolve(url);
const filePath = path.join(absolutePath, fileName);

const create = async () => {
    // Write your code here
    try {
        // Создаем и записываем файл (с флагом "wx" для предотвращения перезаписи)
        await fs.writeFile(filePath, DATA, { flag: 'wx' });
    } catch (error) {
        // Если файл уже существует, выбрасываем ошибку
        throw new Error('FS operation failed');
    }
};
await create();
