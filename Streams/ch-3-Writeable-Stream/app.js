// TASK HAI YE.

import fs from "node:fs";

console.time("stream-time"); // ⏱ Start timer to measure how long streaming takes

// 1. Create a readable stream for the MP4 file
// highWaterMark = 64 MB (means ek baar me 64 MB ka chunk read hoga)
const readStream = fs.createReadStream(
  "C:\\Users\\Dell\\Downloads\\Recording 2025-08-13 220058.mp4",
  { highWaterMark: 64 * 1024 * 1024 }
);

// 2️. Create a writable stream for the output file
const writeStream = fs.createWriteStream("stream.mp4");

// 3️. When data is available from readStream, → try to write it into writeStream
readStream.on("data", (chunkBuffer) => {
  const isEmpty = writeStream.write(chunkBuffer);

  if (!isEmpty) {
    // Agar write buffer full ho gaya hai → pause reading
    // (warna RAM me zyada data ek saath load ho jayega)
    readStream.pause();
  }
});

// 4️. When writeStream buffer drains (khali hota hai), → resume reading from readStream
writeStream.on("drain", () => {
  readStream.resume();
});

// 5️. Jab file completely read ho jaye
//    → end event trigger hota hai
//    → stop timer to see total streaming time
readStream.on("end", () => {
  console.timeEnd("stream-time"); // ⏱ Print total time taken
});
