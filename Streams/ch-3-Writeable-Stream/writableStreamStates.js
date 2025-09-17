console.log("States of Writable Stream.");
import fs from "node:fs";

const writeStream = fs.createWriteStream("newFile.txt", { highWaterMark: 4 }); // 4 bytes.

// 1. writable state example.
// console.log(writeStream.writable); //true. because it is ready to perform writable.
// writeStream.end();
// console.log(writeStream.writable); // false, because writable stream false ho gaya hai.

// 2. writableCorked.
writeStream.write("hii");
console.log(writeStream.writableCorked); // abhi 0 hai beacuse corked nahi hua hai abhi.
writeStream.cork();
writeStream.write("hello");

console.log(writeStream.writableCorked); // 1. aa gaya aur it means corked ho gaya aur file me kuchha bhi nahi likha gaya.
writeStream.uncork();
console.log(writeStream.writableCorked); // now 0 beacuse uncorked kr diya.

// 3. writableEnded and writabledFinished.
writeStream.end();
console.log(writeStream.writableEnded); // true.

// because finihsed hone ke liye kucha time chaiye taki saare data empty ho jaaye.
setTimeout(() => {
  console.log(writeStream.writableFinished); // true.
}, 10);
