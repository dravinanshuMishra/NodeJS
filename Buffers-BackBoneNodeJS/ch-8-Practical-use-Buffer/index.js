// BASE-64 EXAMPLE IN NODE-JS
import fs from "node:fs/promises";

// step: 1. binary data to convert kr base64 me retun karega ye. btoa () function ka work means binary to ascii means base64 table.
const data = await fs.readFile("./file.txt", "base64");
console.log(data); // base64 me converted data, output: YWJj


// step: 2.base64 data ko binary me convert karega ye. atob () function ka work means base64 to binary means ascii table. (ASCII to Binary).
fs.writeFile("newFile.txt", data, {encoding: "base64"});


// step: 1. emoji image convert into string.
const img = await fs.readFile("./favicon/favicon-16x16.png", "base64");
// console.log(img);

// step: 2. base64 data ko binary me convert karega ye. atob () function ka work means base64 to binary means ascii table. (ASCII to Binary).
fs.writeFile("newFavicon.txt", img);

// step: 3. newFavicon.txt file ko read krke usko wapas image me convert krna hai.
fs.writeFile("new.png", img, {encoding: "base64"});