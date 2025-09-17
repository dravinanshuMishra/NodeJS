import fs from "node:fs";

// 1. Writable Stream.
const writeStream = fs.createWriteStream("file.txt");
console.log(writeStream.writableHighWaterMark); //16 kb ka hai it means bytes me, 16 * 1024 = 16384 bytes. check by default high water mark value.

// 2. HOW TO WRITE DATA.?
writeStream.write("ABCD");
writeStream.write("12345");
writeStream.write("abcd");


// 3. HOW TO END (CLOSE) WRITABLE STREAM.
writeStream.end(); // END, ke sath do event fire honge. finish and close.

// 4. NOW FINISHED THE WRITABLE STREAM.
writeStream.on("finish", () => {
    console.log("Finished");
});

// 5. close stream.
writeStream.on("close", () => {
    console.log("closed");
})

// writeStream.write("abcd"); // Do Not, Error [ERR_STREAM_WRITE_AFTER_END]: write after end