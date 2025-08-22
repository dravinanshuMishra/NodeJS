import { Buffer } from "node:buffer";
// step: 1. create nodeJS buffer.

// const buffer = Buffer.alloc(4); 
// or
const buffer = Buffer.from([0, 0, 0, 0]); // 4 bytes ka array buffer create ho gaya.
console.log(buffer); 

// step: 2. write data in buffer string / numbers.
buffer.write("NODE");
console.log("write buffers data ::",buffer);

// step: 3. read buffer.
console.log("read buffers data ::",buffer.toString());


// extra step: 4.  we can set directlay set buffers values.
buffer[0] = 65;
buffer[1] = 66;
buffer[2] = 67;
// buffer[3] = 68;

// extra step: 5. Get individual byte
console.log("Byte[0]:", buffer[0]); // 65
console.log("Byte[1]:", buffer[1]); // 66
console.log("Byte[2]:", buffer[2]); // 67
console.log("Byte[3]:", buffer[3]); // 68