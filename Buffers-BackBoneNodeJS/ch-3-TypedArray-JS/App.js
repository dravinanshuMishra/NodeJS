const fs = require("fs");

// 1. Create buffer
const buffer = new ArrayBuffer(8);
const uint8View = new Uint8Array(buffer);

// 2. Write data (A-D)
uint8View[0] = 65; // 'A'
uint8View[1] = 66; // 'B'
uint8View[2] = 67; // 'C'
uint8View[3] = 68; // 'D'

// 3. Encode a string
const encoder = new TextEncoder();
const encoded = encoder.encode("Hello"); // Uint8Array
console.log("Encoded:", encoded);

// 4. Decode back
const decoder = new TextDecoder();
const decoded = decoder.decode(encoded);
console.log("Decoded:", decoded);

// 5. Save to disk
fs.writeFileSync("data.bin", encoded);

// 6. Read back
const fileData = fs.readFileSync("data.bin");
const fileDecoded = new TextDecoder().decode(fileData);
console.log("From File:", fileDecoded);
