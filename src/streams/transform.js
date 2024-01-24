import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
const dataRevers = (data) => data.toString().split('').reverse().join('');

const transform = async () => {
    // Write your code here
    const myTransform = new Transform({
        transform(data, encoding, callback) {
            callback(null, dataRevers(data));
        },
    });

    await pipeline(process.stdin, myTransform, process.stdout);
};

await transform();
