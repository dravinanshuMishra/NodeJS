// 1. TASK: WRITE ONE LAKHA NUMBERS WITHOUT USING STREAM.
// USE ONLY FD (FILE DESCRIPTOR MEANS OPEN AND CLOSE FILE SYNCHRONOUS WALA USE HERE)
import fs from "node:fs";

console.time("stream-time");

const fd = fs.openSync("number.txt", "w");  // write mode me open hai.
for(let i=1; i<=100000; i++) {
    fs.writeSync(fd, `${i} \n `);
}

fs.closeSync(fd);
console.timeEnd("stream-time"); // 217.435 ms (it is a faster then stream).