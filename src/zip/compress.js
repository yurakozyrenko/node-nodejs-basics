import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';

const gzip = createGzip();

const url = 'src/zip/files';
const fileName = 'fileToCompress.txt';
const fileNameCompress = 'archive.gz';
// Получение абсолютного пути
const absolutePath = path.resolve(url);
const filePath = path.join(absolutePath, fileName);
const filePathZip = path.join(absolutePath, fileNameCompress);

const source = createReadStream(filePath);
const destination = createWriteStream(filePathZip);

const compress = async () => {
    // Write your code here
    await pipeline(source, gzip, destination);
};

await compress();
