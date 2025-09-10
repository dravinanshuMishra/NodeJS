import fs from "node:fs";

// Streams.
const readStream = fs.createReadStream("./chars.txt", { highWaterMark: 4 }); // 4 bytes me read karega means 4 chars me.

// read Stream.
let readCount = 0;
readStream.on("data", (chunksBuffer) => {
  readCount++;
  console.log(readStream.bytesRead) // ye batayega ki ab tak kitani bytes read ho gaya hai.
  console.log(readStream.readableHighWaterMark); // ye batayega ki ek baar me sirf itane byte hi read ho sakti hai.

  //  ye tarika sahi hai.
  if (readStream.readableHighWaterMark === readStream.bytesRead) {
    fs.writeFileSync("abc.txt", chunksBuffer);
  } else {
    fs.appendFileSync("abc.txt", chunksBuffer);
  }
 
//   if (readCount === 1) {
//     fs.writeFileSync("abc.txt", chunksBuffer);
//   } else {
//     fs.appendFileSync("abc.txt", chunksBuffer);
//   }

    readStream.pause();
    setTimeout(() => {
      readStream.resume();
    }, 100);
    console.log(readStream.isPaused());
});

// pause.
readStream.on("pause", () => {
    console.log("paused");
})
// remuse.
readStream.on("resume", () => {
    console.log("remsuse");
})
