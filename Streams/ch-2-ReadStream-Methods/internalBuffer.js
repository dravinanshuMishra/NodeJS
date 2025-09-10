import fs from "node:fs";

const readStream = fs.createReadStream("./chars.txt", {highWaterMark: 4}); // only 4 bytes reads.

// readable event, check data read karne ke liye ready ho gaya hai kya.
readStream.on("readable", () => {
    console.log(readStream.readableLength); // internal buffer mein kitna data hai.
    // console.log(readStream.read(3)); // 3 bytes read karega.
    console.log(readStream.read());// heightWaterMark ke hisaab se read karega.
})