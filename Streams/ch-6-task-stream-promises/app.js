// USE HERE PROMISE VERSION.
import fs from "node:fs/promises";

const fileHandle = await fs.open("myFile.txt", "r+"); // r+, means read and write dono hoga.

const { bytesRead, buffer } = await fileHandle.read({
  buffer: Buffer.alloc(20), // 20 bytes का buffer
  offset: 0,                // buffer में लिखना कहाँ से शुरू करना है
  length: 10,               // सिर्फ़ 10 bytes पढ़ने हैं
  position: 5               // file में 5th byte से start करना
});

console.log("Bytes Read:", bytesRead);
console.log("Buffer Content:", buffer.toString());

fileHandle.close();