//1. array buffers create and view / read.
const buffers = new ArrayBuffer(4); // Create a new ArrayBuffer of 4 bytes


// 2. view / read.
const view = new DataView(buffers); // Create a DataView to read from the ArrayBuffer
console.log(view);

// 3. write / modify. total 4 bytes hai charo pr data write kro.
view.setInt8(0, 80);    // decimal 80
view.setInt8(1, 0x50);  // hexadecimal 0x50 = decimal 80
view.setInt8(2, 0x2C);  // hexadecimal 0x2C = decimal 44
view.setInt8(3, 0x2D);  // hexadecimal 0x2D = decimal 45

console.log(view); // view jo return karenga wo hexacimal me rahega.

// 4. read signed, get specific offset / index ki value. ye decimal me get kr dega.
console.log(view.getInt8(0)); // Read the value back
console.log(view.getInt8(1)); // Read the second value
console.log(view.getInt8(2)); // Read the third value
console.log(view.getInt8(3)); // Read the fourth value

// 5. unsigned, get specific offset / index ki value. ye decimal me get kr dega.
console.log(view.getUint8(0)); // Read the value back
console.log(view.getUint8(1)); // Read the second value
console.log(view.getUint8(2)); // Read the third value
console.log(view.getUint8(3)); // Read the fourth value