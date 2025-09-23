import fs from "node:fs";

console.log("readingFileWithFileDescriptor.js");

// 1. Open file (get file descriptor)
const fd = fs.openSync("myFile.txt");

// 2. Get file stats (to know file size)
const stats = fs.statSync("myFile.txt");
const fileSize = stats.size; // correct property

// 3. Create a buffer with same size as file
const buffer = Buffer.alloc(fileSize);

// 4. Read file into buffer
fs.read(fd, buffer, 0, fileSize, 0, (err, bytesRead, buff) => {
  if (err) throw err;

  console.log("File Descriptor:", fd);        // e.g. 3
  console.log("Error:", err);                 // null
  console.log("Bytes Read:", bytesRead);      // actual size of file
  console.log("Buffer Data:", buff);          // raw buffer
  console.log("String Data:", buff.toString()); // readable text

  fs.closeSync(fd); // always close!
});
