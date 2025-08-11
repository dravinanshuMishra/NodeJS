import fs from "node:fs/promises";

// 1. process.argv se command get.
const copyCommand = process.argv[2]; // "copy"
const filename = process.argv[3];    // source file
const destination = process.argv[4]; // destination file

// command 
// npm start copy file.txt hello.txt


if (!copyCommand || copyCommand.toLowerCase() !== "copy") {
    console.log("Usage: node copyFile.js copy <source> <destination>");
    process.exit(1);
}

if (!filename) {
    console.log("Source file not specified.");
    process.exit(1);
}

if (!destination) {
    console.log("Destination file not specified.");
    process.exit(1);
}

const copyFileReadAndCreate = async (filename, destination, content) => {
    try {
        // Agar source file nahi hai to create karo
        try {
            await fs.access(filename);
        } catch {
            console.log(`Source file not found. Creating: ${filename}`);
            await fs.writeFile(filename, content, "utf-8");
        }

        // Ab source file ko read karke destination me likho
        const data = await fs.readFile(filename, "utf-8");
        await fs.writeFile(destination, data, "utf-8");
        console.log(`File copied successfully from ${filename} to ${destination}`);
    } catch (error) {
        // error ko log file me store karne aur dekhane ka tarika.
        fs.appendFile("error.log", `\n\nError:${new Date().toLocaleString("en-IN", { hour12: true })}\n ${error.message}\n ${error.stack}`, "utf-8");

        console.log("to see full error log check ./error.log");
    }
};

copyFileReadAndCreate(filename, destination, "This is the content to be copied.");
