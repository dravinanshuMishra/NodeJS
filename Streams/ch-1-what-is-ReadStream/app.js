import fs from "node:fs";

// Readable Stream.
const file = "C:\\Users\\Dell\\Downloads\\Recording 2025-08-13 220058.mp4";
const { size: totalSize } = fs.statSync(file);

console.time("stream-time");

// step: 1. create Read Stream.
const readStream = fs.createReadStream(file, {
  highWaterMark: 64 * 1024
});

// Step: 2. create variable for readCount, byteCoun, lastPercentage.
let readCount = 0;
let byteCount = 0;
let lastPercentage = 0;


// step: 3. readStream pr chunks read karo.
readStream.on("data", (chunkBuffer) => {
    byteCount +=chunkBuffer.byteLength;
    readCount++;
    const percentage = Math.floor((byteCount/totalSize) * 100);

    if(percentage >= lastPercentage + 10) {
        lastPercentage = percentage;
        console.log(`📊 Progress: ${percentage}%`);
    }
    fs.appendFileSync("myVideo.mp4", chunkBuffer);
});

// step: 4. readStream end.
readStream.on("end", () => {
    console.timeEnd("stream-time");
    console.log("✅ File streaming finished!");
    console.log({readCount, byteCount, lastPercentage});
})


