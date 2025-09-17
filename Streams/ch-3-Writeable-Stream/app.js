// TASK READ AND WRITE A MP4 FILE.
import fs from "node:fs";

console.time("stream-time"); // For time calculations.

// 1. Read a file.
const readStream = fs.createReadStream(
  "C:\\Users\\Dell\\Downloads\\Recording 2025-08-13 220058.mp4",
  { highWaterMark: 64 * 1024 * 1024 }
);

// 2. write a file.
const writeStream = fs.createWriteStream("stream.mp4");

// 3. Read a file and write.
readStream.on("data", (chunkBuffer) => {
    writeStream.write(chunkBuffer);
});

// 4. end stream
readStream.on("end", () => {
    console.timeEnd("stream-time");
})

