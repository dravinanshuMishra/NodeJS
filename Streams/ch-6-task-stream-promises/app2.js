// READ AND WRITE USING PROMISES.
import fs from "node:fs/promises";

// STEP 1: Open file (read + write allowed)
const fileHandle = await fs.open("myText.txt", "r+");

// STEP 2: Create a read stream
const readStream = fileHandle.createReadStream();
readStream.setEncoding("utf-8");

// STEP 3: Listen for data events
readStream.on("data", (chunk) => {
  console.log("DATA CHUNK:", chunk);
});

// STEP 4: Handle end event
readStream.on("end", () => {
  console.log("✅ File reading finished.");

  // STEP: 5. Write only after reading finishes
  const writeStream = fileHandle.createWriteStream({ flag: "a" }); // append mode.
  writeStream.write(` Hello World \n`);
  writeStream.end();
  writeStream.on("finish", () => {
    console.log("Writing finished.");
  });
});
