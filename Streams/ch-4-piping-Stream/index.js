import fs from "node:fs";

// FOR TIME.
console.time("stream-time");

// 1. CREATE A READ STREAM.
const readStream = fs.createReadStream(
  "C:\\Users\\Dell\\Downloads\\Recording 2025-08-13 220058.mp4",
  { highWaterMark: 64 * 1024 * 1024 }
);

// 2. write here.
const writeStream = fs.createWriteStream("stream.mp4");

// 3. handle back pressure.
// readStream.on("data", (chunkBuffer) => {
//     const isEmpty = writeStream.write(chunkBuffer);
//     if(!isEmpty) {
//         readStream.pause();
//     }
// });

// 4. if, isEmpty then resume.
// writeStream.on("drain", () => {
//     readStream.resume();
// })

// OR. we can handle backpressure work through pipe () method.
readStream.pipe(writeStream);

// unpipe () method se video destry k sakte hai.
setTimeout(() => {
    // readStream.unpipe(writeStream);
},2000)

// 5. end.
readStream.on("end", () => {
    console.timeEnd("stream-time");
})




