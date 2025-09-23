// task: 1. Writing One Lakh Numbers
import fs from "node:fs";

console.time("stream-time")
const writeStream = fs.createWriteStream("mytext.txt", {highWaterMark: 100});

for(let i = 1; i<=100000; i++) {
   const isEmpty = writeStream.write(i+"\n"); 

   if(!isEmpty) {
    writeStream.once("drain", () => {
      console.log("Buffer drained, resuming writes...");
    });
   }
}

// Close the stream when done
writeStream.end(() => {
  console.log("Finished writing 1 lakh numbers!");
  console.timeEnd("stream-time");
});

