import {Buffer} from 'node:buffer';

// create buffers.
const buffer1 = Buffer.alloc(10000);
const buffer2 = Buffer.allocUnsafe(10000);

console.log("alloc",buffer1);
console.log("allocUnsafe",buffer2);
