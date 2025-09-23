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

// 3.we can handle backpressure work through pipe () method.
readStream.pipe(writeStream);

// 4. destroy the method.
// problem ye hai yaha agar suppose that koi stream me error aa gaya to wo kaise handle karega batao?
// handle ke liye dekho myApp.js file. 
setTimeout(()=>{
  console.log("⏹ Unpiping and destroying stream...");
  readStream.unpipe(writeStream);   // सही तरह से unpipe
  readStream.destroy();             // readStream destroy
  writeStream.end();                // writeStream properly close
},3000)


readStream.on("error", (error) => {
  console.log(error);
})


// 5. end.
readStream.on("end", () => {
    console.timeEnd("stream-time");
})


