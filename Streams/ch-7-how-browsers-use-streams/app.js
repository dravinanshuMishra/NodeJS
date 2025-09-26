import http from "http";
import fs from "node:fs/promises";

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  const fileHandle = await fs.open("abc.txt", "r+");
  const readStream = fileHandle.createReadStream({ highWaterMark: 1000 });
  readStream.setEncoding("utf-8"); 

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
