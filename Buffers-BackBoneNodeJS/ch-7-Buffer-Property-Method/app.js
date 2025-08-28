// import Buffer
import { Buffer } from "node:buffer";

// create buffer
const buf = Buffer.from("Hello World", "utf-8");

// buffer properties
console.log("Buffer instance:", buf);
console.log("Underlying ArrayBuffer:", buf.buffer);  // ArrayBuffer
console.log("byteLength:", buf.byteLength);          // total bytes in ArrayBuffer
console.log("byteOffset:", buf.byteOffset);          // starting offset
console.log("length:", buf.length);                  // number of bytes in Buffer

// Accessing a byte by index
console.log("First byte (as number):", buf[0]);      // 72 (ASCII for 'H')

// Convert back to string
console.log("String value:", buf.toString("utf-8"));

