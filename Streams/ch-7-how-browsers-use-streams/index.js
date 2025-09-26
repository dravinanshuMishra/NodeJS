import http from "http";
import fs from "node:fs/promises";

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
   res.setHeader("Content-Type", "image/webp"); 

  const fileHandle = await fs.open("river.webp", "r+");
  const readStream = fileHandle.createReadStream({ highWaterMark: 1000 });

  readStream.on("data", (chunkBuffer) => {
    res.write(chunkBuffer);
    // pause/resume demo
    readStream.pause();
    setTimeout(() => {
      readStream.resume();
    }, 10);
  });

  readStream.on("end", () => {
    res.end("\n\n✅ Server finished streaming file.");
  });
});

server.listen(4000, "localhost", () => {
  console.log("🚀 Server Started at http://localhost:4000");
});
