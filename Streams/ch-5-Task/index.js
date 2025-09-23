import fs from "node:fs";

const writeStream = fs.createWriteStream("myFile.txt", {highWaterMark: 4});

process.stdin.pipe(writeStream);
// process.stderr.pipe(writeStream);

