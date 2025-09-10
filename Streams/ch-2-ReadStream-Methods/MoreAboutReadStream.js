import fs from "node:fs";

// Better: pass encoding in options (cleaner) and attach 'error' listener early.
const readStream = fs.createReadStream("./chars.txt", {
  highWaterMark: 4,   // buffer size in bytes
  encoding: "utf8"    // receive strings instead of Buffers
});

// we can also set encoding later (but not recommended)
// readStream.setEncoding("utf8");

// optional :: Attach error handler ASAP (to catch open/read errors).
readStream.on("error", (err) => {
  console.error("Error occurred while reading the file:", err);
});

// step: 1. Listen for the 'open' event
readStream.on("open", (fd) => {
  console.log(`File descriptor: ${fd}`);
});

// step: 2. Listen for the 'ready' event
readStream.on("ready", () => {
  console.log("Stream is ready to be read.");
});

// step: 3. Listen for the 'data' event to read chunks
readStream.on("data", (chunk) => {
  // chunk is a string because encoding was set
  console.log(`Received ${chunk.length} characters (${Buffer.byteLength(chunk, "utf8")} bytes).`);
  console.log("Chunk:", chunk);

  // --- choose one of the following depending on intent ---
  // 1) stop with an error:
  // readStream.destroy(new Error("Manual error"));

  // 2) stop gracefully (close resource; 'end' will NOT fire):
  // readStream.destroy();

  // 3) just pause reading for a while:
  // readStream.pause();
  // setTimeout(() => readStream.resume(), 1000);
});

// step: 4. Listen for the 'end' event
readStream.on("end", () => {
  console.log("No more data to read. (end event)");
});

// step: 5. Listen for the 'close' event.
readStream.on("close", () => {
  console.log("Stream has been closed.");
});
// Note: 'close' event fires after 'end' or 'error' (if no 'end').
// If you call readStream.destroy(), 'close' will fire but NOT fire 'end' event.