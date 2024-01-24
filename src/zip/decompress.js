import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';

const gzip = createGunzip();

const url = 'src/zip/files';
const fileName = 'fileToCompress.txt';
const fileNameDecompress = 'archive.gz';
// Получение абсолютного пути
const absolutePath = path.resolve(url);
const filePath = path.join(absolutePath, fileName);
const filePathUnzip = path.join(absolutePath, fileNameDecompress);

const source = createReadStream(filePathUnzip);
const destination = createWriteStream(filePath);

const decompress = async () => {
    // Write your code here

    await pipeline(source, gzip, destination);
};

await decompress();
