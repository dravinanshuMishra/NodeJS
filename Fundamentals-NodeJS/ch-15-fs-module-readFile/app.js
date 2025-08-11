// ALWAYTS USE THIS WAY ONLY IMPORT KARO PROMISES KE SAATH AND FUNCTION AISE HI BANAO.
import fs from "node:fs/promises";

// यह Promise-based API (fs/promises) का उपयोग कर रहा है, जिसमें callback function allowed नहीं होता।
const readFile = await fs.readFile("read.txt", "utf-8");
console.log("data:", readFile);

// BEST PRACTICE.
const ThisReadFile = async () => {
    try {
        const data = await fs.readFile("read.txt", "utf-8");
        console.log("data:", data);
    } catch (error) {
        if (error.code === "ENOENT") {
            console.log("File not found");
        } else {
            console.log("Error reading file:", error);
        }  
    }
}

ThisReadFile();