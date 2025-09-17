import fs from "node:fs";

// Example of backpressure and internal buffering in write streams.
// HighWaterMark = 4 means ek baar me maximum 4 bytes buffer me hold ho sakte hain.
const writeStream = fs.createWriteStream("newFile.txt", { highWaterMark: 4 });

let i = 1;
// Loop chalate hain aur file me "A" likhne ki koshish karte hain.
// Agar writeStream.write() false return kare -> iska matlab buffer full ho gaya hai,
// aur hume wait karna padega "drain" event ka.
while (i <= 1000) {
  i++;
  let isEmpty = writeStream.write("A"); // write karte hain ek "A" (1 byte)

  if (!isEmpty) {
    // Buffer full ho gaya (4 bytes cross ho gaye)
    break;
  }

  console.log(isEmpty); // true aayega jab tak buffer full nahi hua otherwise false.
}

// Jab buffer khali hota hai, "drain" event trigger hota hai.
// Yaha se dobara likhna shuru kar dete hain jab tak buffer phir se full na ho jaye.
writeStream.on("drain", () => {
  console.log("drain ::", writeStream.writableLength);

  while (i <= 1000) {
    i++;
    let isEmpty = writeStream.write("A");

    if (!isEmpty) {
      // Buffer phir se full ho gaya -> next drain ka wait karo
      break;
    }

    console.log(isEmpty);
  }
});
