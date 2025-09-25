import fs from "node:fs";

fs.open("mytext.txt", (err, fd) => {
    console.log("file descriptior ::", fd); //3
    console.log("Error is ::", err); //null
});

fs.open("mytext.txt", (err, fd) => {
    console.log("file descriptior ::", fd); //4
    console.log("Error is ::", err); //null
});