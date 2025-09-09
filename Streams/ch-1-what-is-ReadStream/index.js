/*
 * import fspromise from "node:fs/promises";
    // const Buffdata = await fspromise.readFile("chars.txt");
    const Buffdata = await fspromise.readFile("C:\\Users\\Dell\\Downloads\\Recording 2025-08-13 220058.mp4"); 
    console.log(Buffdata.byteLength); // 1092106301
 */

// NODEJS READABLE STREAM.
import fs from "node:fs";

console.time("stream-time"); // ⬅️ timer start
const readStream = fs.createReadStream("C:\\Users\\Dell\\Downloads\\Recording 2025-08-13 220058.mp4", {highWaterMark: 64 * 1024 * 1024});
// 64 mebibyte me ab chunks hoga data.
let readCount = 0;
// read Chunks. "data" event = signal that new chunk is ready.
readStream.on("data", (chunkBuffer) => {
    console.log(chunkBuffer); // by defult size 64 kebibyte, 64*2024 = 65536 bytes chunks me aayega.
    console.log(chunkBuffer.byteLength);
    fs.appendFileSync('base.mp4', chunkBuffer);
    readCount++;
})

// "end" = jab saare chunks consume ho gaye, stream ka data khatam ho gaya.
readStream.on("end", ()=>{
     console.timeEnd("stream-time"); // ⬅️ timer stop
     console.log("✅ File streaming finished!");
     console.log({readCount});
})
 