import http from "http";
import fs from "node:fs/promises";

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "video/mp4");
  res.setHeader("Content-Disposition", "attachment; filename=stream.mp4");

  const fileHandle = await fs.open(
    "C:\\Users\\Dell\\Downloads\\Recording 2025-08-13 220058.mp4",
    "r+"
  );
  const {size} = await fileHandle.stat();
  res.setHeader("Content-Length", size);
  const readStream = fileHandle.createReadStream({ highWaterMark: 10 * 1024 * 1024 });

  readStream.on("data", (chunkBuffer) => {
    res.write(chunkBuffer);
    // pause/resume demo
    readStream.pause();
    setTimeout(() => {
      readStream.resume();
    }, 1000); // 10mbps ke speed se download hoga.
  });

  readStream.on("end", () => {
    res.end("\n\n✅ Server finished streaming file.");
  });
});

server.listen(4000, "localhost", () => {
  console.log("🚀 Server Started at http://localhost:4000");
});
