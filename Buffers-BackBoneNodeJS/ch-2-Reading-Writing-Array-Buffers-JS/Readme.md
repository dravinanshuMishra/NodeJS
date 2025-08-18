# JavaScript ArrayBuffer — Reading & Writing

## 1. Introduction
ArrayBuffer एक fixed-length block of raw binary data है।  
Data को directly read/write नहीं कर सकते — इसके लिए TypedArray या DataView use होता है।

---

## 2. Create ArrayBuffer
```javascript
const buffer = new ArrayBuffer(8);
console.log(buffer.byteLength); // 8
```

---

## 3. Write Data (Using TypedArray)
```javascript
const buffer = new ArrayBuffer(8);
const view = new Uint8Array(buffer);

view[0] = 255;
view[1] = 100;

console.log(view); // Uint8Array(8) [255, 100, 0, 0, 0, 0, 0, 0]
```

---

## 4. Read Data
```javascript
const buffer = new ArrayBuffer(4);
const view = new Uint8Array(buffer);

view[0] = 10;
view[1] = 20;

console.log(view[0]); // 10
console.log(view[1]); // 20
```

---

## 5. DataView (Advanced)
```javascript
const buffer = new ArrayBuffer(4);
const dataView = new DataView(buffer);

dataView.setInt16(0, 500);
dataView.setInt16(2, 1000);

console.log(dataView.getInt16(0)); // 500
console.log(dataView.getInt16(2)); // 1000
```

---

## 6. String ↔ ArrayBuffer Example
```javascript
function stringToArrayBuffer(str) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0; i < str.length; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

function arrayBufferToString(buffer) {
    const bufView = new Uint8Array(buffer);
    return String.fromCharCode(...bufView);
}

const myBuffer = stringToArrayBuffer("Hello");
console.log(myBuffer);

const myString = arrayBufferToString(myBuffer);
console.log(myString); // "Hello"
```

---

## Summary Table

| Feature | Explanation |
|---------|-------------|
| ArrayBuffer | Raw binary data store करता है |
| TypedArray | ArrayBuffer पर read/write करने के लिए |
| DataView | Flexible read/write with byte order |
| Size | Fixed length |
