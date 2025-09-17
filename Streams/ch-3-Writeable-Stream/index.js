import fs from "node:fs";

// 1. Writable Stream.
const writeStream = fs.createWriteStream("file.txt");
console.log(writeStream.writableHighWaterMark); //16 kb ka hai it means bytes me, 16 * 1024 = 16384 bytes. check by default high water mark value.

// 2. HOW TO WRITE DATA.?
writeStream.write("ABCD");
writeStream.write("12345");
writeStream.write("abcd");


// 3. 