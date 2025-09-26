import fs from "node:fs";

const fd = fs.openSync("newFile.txt", "w"); // file descriptor hai jo ki wrie mode me kr diya maine.

fs.write(fd, "hello world 😂", (err, bytesWritten, writtenData) => {
    console.log(bytesWritten);
    console.log(writtenData);
})