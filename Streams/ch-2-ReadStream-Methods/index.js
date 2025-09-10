import fs from "node:fs";

const readStream = fs.createReadStream('./chars.txt');

// 1. intial state Stream. 
console.log(readStream.readableFlowing); // null. ye initial State me hai.
console.log(readStream.readableEnded); // false, jab stream read ho kr end ho jayega then ye true hoga.
console.log(readStream.isPaused()); // false, if paushed then return true otherwise not

// 2. Reading state Streams.
readStream.on("data", (chunkBuffer) => {
    console.log(readStream.readableFlowing); // true, because reading start.
    console.log(readStream.readableEnded); // false, because reading not ended.
    console.log(readStream.isPaused()); // false, because we are not paused.
})

// 3. paused state Stream.
readStream.on("data", (chunkBuffer) => {
    console.log("################################");
    readStream.pause();
    console.log(readStream.readableFlowing); // false,
    console.log(readStream.readableEnded); // false.
    console.log(readStream.isPaused()); // true, beacuse Stream is in paused.
});

// 4. ended state Stream.
readStream.on('end', (chunkBuffer) => {
    console.log("1233")
    console.log(readStream.readableFlowing); // true, i dont know why, nodeJS wale se puchhana padega.
    console.log(readStream.readableEnded); // true, beacause ended.
    console.log(readStream.isPaused()); // false.
})