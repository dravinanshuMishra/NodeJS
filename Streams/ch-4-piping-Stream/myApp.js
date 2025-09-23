// Important Points:
// pipeline(readStream, writeStream, cb) अपने-आप errors handle करता है।
// → इसलिए आपको अलग से error event सुनने की ज़रूरत नहीं।
// unpipe() का मतलब सिर्फ ये है कि अब से data आगे नहीं जाएगा, पर readStream अब भी active रहेगा।
// अगर आप पूरा stream बंद करना चाहते हो → readStream.destroy() बुलाइए।


import fs from "node:fs";
import { pipeline } from "node:stream";

console.time("stream-time");

const readStream = fs.createReadStream(
  "C:\\Users\\Dell\\Downloads\\Recording 2025-08-13 220058.mp4",
  { highWaterMark: 64 * 1024 * 1024 }
);

const writeStream = fs.createWriteStream("stream.mp4");

pipeline(readStream, writeStream, (error) => {
  if (error) console.error("❌ Pipeline failed:", error);
  else console.log("✅ Pipeline finished successfully.");
});

setTimeout(() => {
  console.log("⏹ Unpiping writeStream...");
  readStream.unpipe(writeStream);   // सही तरीका
  readStream.destroy();             // अगर आप readStream बंद करना चाहते हो
}, 4000);

readStream.on("end", () => {
  console.timeEnd("stream-time");
});
