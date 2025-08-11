import fs from "node:fs";

// 1. Read a file. readFileSync works synchronously and does not have a callback function.
const content = fs.readFileSync("read.txt", "utf-8");
console.log("content:", content);

// 2. readFile Read a file asynchronously using readFile. readFile returns a Promise and it can be used with async/await. readFile accept three parameters first, file path, second, encoding and third, callback function.
fs.readFile("read.txt", "utf-8", (error, data) => {
    if(error) {
        if(error.code === "ENOENT") {
            console.log("File not found");
        } else {
            console.log("Error reading file:", error);
        }
    } else {
        console.log("data:", data);
    }
})

// NOTE: YE DONO MAT USE KARO OPEN APP.JS AND DEKHO YAHI TARIKA USE KARO.