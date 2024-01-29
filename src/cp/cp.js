import { fork } from 'node:child_process';
import path from 'node:path';
const url = 'src/cp/files';
const fileName = 'script.js';
// Получение абсолютного пути
const absolutePath = path.resolve(url);
const filePath = path.join(absolutePath, fileName);

const spawnChildProcess = async (args) => {
    // Write your code here
    
    // Запускаем дочерний процесс
    const childProcess = fork(filePath, args, { silent: true });

    // Пробрасываем stdin главного процесса в stdin дочернего процесса
    process.stdin.pipe(childProcess.stdin);

    // Пробрасываем stdout дочернего процесса в stdout главного процесса
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/*[4,3,2,1]*/);
