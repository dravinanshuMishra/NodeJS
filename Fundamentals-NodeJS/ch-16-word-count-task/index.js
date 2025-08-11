// word count task app.
import fs from "node:fs/promises";

// get file path from command line arguments
const filePath = process.argv[2];
console.log(filePath);

if (!filePath) {
    console.error("Please provide a file path as a command line argument. like this:: npm run <file-path> like: file-1.txt");
    process.exit(1);
}

// read a file.
const readAFile = async (filepath, encoding) => {
    try {
        const data = await fs.readFile(filepath, encoding);
        console.log(data.length);
        // "जहाँ भी एक या ज़्यादा whitespace मिले, वहां से text को काट दो। Aur white space wale ko remove kr do."
        const word = data.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(word => word.length > 0);
        // console.log(word);

        // LOGIC WRITE KAUN SA WORD KITANI BAAR REPEATE HUA HAI.
        let wordCount = Object.create(null);
        for(let w of word) {
            wordCount[w] = (wordCount[w] || 0) + 1;
        }
        // console.log(wordCount);
        return wordCount;
    } catch (error) {
        if (error.code === "ENOENT") {
            console.error("File not found");
        } else {
            console.error("Error reading file:", error);
        }
    }
}
readAFile(filePath, "utf-8");

// for run terminal command.
// node index.js file-1.txt