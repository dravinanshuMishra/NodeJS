// import fs.
import fsPromises from "node:fs/promises";

// 1. asynchronous I/O read file.
const data = await fsPromises.readFile("file.txt", "utf-8");
console.log("Data:", data);