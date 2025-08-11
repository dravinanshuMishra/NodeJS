import { writeFile, appendFile } from "node:fs/promises";

// 1. Write a file. 
const writeAFile = async (filename, content) => {
  try {
    await writeFile(filename, content);
    console.log("File written successfully");
  } catch (error) {
    console.log("Error ::", error);
  }
}

writeAFile("myTextfile.txt", "TThis is done");

// 2. write a file using appendFile method.
const writeAppendFile = async (filename, content) => {
  try {
    await appendFile(filename, content);
    console.log("File appended successfully");
  } catch (error) {
    console.log("Error ::", error);
  }
}

writeAppendFile("myTextFile-2.txt", "\nThis is appended content");

// 3. file create ho and inside it clock chale.
setInterval(() => {
  writeAFile("myClock.txt", new Date().toLocaleTimeString());
},500);



