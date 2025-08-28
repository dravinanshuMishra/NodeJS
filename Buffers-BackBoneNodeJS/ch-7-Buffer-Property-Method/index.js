// step:1. import Buffer.
import { Buffer } from "node:buffer";

// step: 2. create buffer, UTF-8 encoding me store karke.
const buffer = Buffer.from("Hello World !!", "utf-8");

// step: 3. toString () method, Buffer ko wapas string me decode kar diya.
console.log(buffer.toString('utf-8'));

// step: 4. write () method, Buffer me data ko wapas likh diya.
buffer.write("Hello Node.js !!", "utf-8");
console.log(buffer.toString()); // bye default encoding utf-8.


// step: 5. Buffer toJSON () method, Buffer ko JSON me convert kar diya.
console.log(buffer.toJSON());

// step: 6. subarray () method.
const subArray = buffer.subarray(0, 5);
console.log(subArray.toString()); // Hello

// step: 7. copy () method.
const nodeBuffer2 = Buffer.alloc(20);
buffer.copy(nodeBuffer2, 0, 0, 7);
console.log(nodeBuffer2.toString()); // Hello N


// step: 8. includes method.
console.log(buffer.includes("Node")); // true. it means hai.
console.log(buffer.includes("World")); // false, it means nahi hai.

// Step: 9. at method examples.
console.log(buffer.at(0)); // 72.
console.log(buffer.at(-1)); // 33.

