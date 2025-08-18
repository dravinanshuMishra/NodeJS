# ArrayBuffer & DataView — Beginner Friendly Step‑by‑Step (Chrome Console)

Ye guide bilkul basic se samjhaata hai ki **ArrayBuffer** aur **DataView** kaise kaam karte hain, aur aapne screenshot me jo steps kiye the unko clean tarike se repeat/verify kaise karein.

---

## 0) ArrayBuffer / DataView kya hote hain?
- **ArrayBuffer** = raw memory ka *fixed-size* block (sirf bytes). Iske andar numbers/strings ka format nahi hota.
- **DataView** = isi memory ko different data types (Int8, Uint8, Int16, Int32, Float32, …) me **read/write** karne ka tool.
- Aap **typed arrays** (jaise `Uint8Array`) se bytes ko seedha dekh bhi sakte ho.

> Tip: Multi-byte values (Int16/Int32/Float32…) me **endianness** (byte order) important hota hai.

---

## 1) 4‑byte ka buffer banao
```javascript
const buffer = new ArrayBuffer(4); // 4 bytes = 32 bits
```
- Naye buffer me by default sab bytes `0` hote hain.

**Bytes dekhne ka easy tareeka:**
```javascript
Array.from(new Uint8Array(buffer)); // -> [0, 0, 0, 0]
```

---

## 2) DataView banao (usi buffer ke upar)
```javascript
const dataView = new DataView(buffer);
```
- `dataView` aur `buffer` same memory ko point karte hain.
- Ab aap is memory ko chhote/bade numbers ki tarah read/write kar sakte ho.

---

## 3) 1 byte likho (offset 0 par)
```javascript
dataView.setInt8(0, 80);
```
**Matlab:**  
- Offset `0` (pehla byte) par signed 8‑bit value **80** store ho gayi.  
- `80 (decimal) = 0x50 (hex)` hota hai, ASCII me `'P'`.
- Ab bytes honge: `[0x50, 0x00, 0x00, 0x00]`

**Verify (console):**
```javascript
Array.from(new Uint8Array(buffer)); // -> [80, 0, 0, 0]
```
**Memory Inspector me** aapko hex me `50 00 00 00` dikhega — ye wahi 80 hai jo hex me `0x50` likha jaata hai.

---

## 4) Value wapas padhna (verify)
```javascript
dataView.getInt8(0);   // -> 80
dataView.getUint8(0);  // -> 80
```
**Note:** `getInt8` signed hota hai (−128…127), `getUint8` unsigned hota hai (0…255).

---

## 5) Multi‑byte read/write + endianness
**2 bytes (Int16) ka example:**  
```javascript
// offset 0 par Int16 likho — littleEndian = true
dataView.setInt16(0, 0x1234, true);
// Ab bytes: [0x34, 0x12, 0x00, 0x00]  (little endian: LSB pehle)

dataView.getInt16(0, true);  // -> 0x1234 (4660)
dataView.getInt16(0, false); // -> 0x3412 (13330)  // alag order ke kaaran
```
**Yaad rakhein:** `getInt16/setInt16` jaise methods me 3rd parameter endianness hota hai.  
- `true` = **little endian** (aajkal zyada common CPU order)  
- `false` = **big endian** (default agar aap parameter pass na karo)

---

## 6) Doosra byte set karo (practice)
```javascript
dataView.setUint8(1, 0x41); // 65 decimal, 'A'
Array.from(new Uint8Array(buffer)); // -> e.g. [0x34, 0x41, 0x00, 0x00] (aapke flow par depend karega)
```

---

## 7) Common mistakes (aapke screenshot se related)
- **`ReferenceError: data is not defined`**  
  Aisa tab aata hai jab aap `data` likh dete ho par variable banaya `dataView` tha. Sahi variable ka naam type karein (`dataView`).

- **Out‑of‑bounds offset**  
  `setInt8(10, 1)` jaise calls 4‑byte buffer me error denge. Offset hamesha `0..length-1` range me rakhein.

- **Endianness bhool jaana**  
  `getInt16`/`setInt16` me 3rd parameter nahi diya to default **big endian** hota hai — aapko unexpected number mil sakta hai.

---

## 8) Quick cheatsheet
```javascript
// 4 bytes ka buffer
const buffer = new ArrayBuffer(4);

// Bytes ko dekhna
Array.from(new Uint8Array(buffer)); // -> [0,0,0,0]

// DataView
const dv = new DataView(buffer);

// 1 byte likho/padho
dv.setUint8(0, 0x50);  // [80,0,0,0]
dv.getUint8(0);        // 80

// 2 bytes (Int16) with endianness
dv.setInt16(0, 0x1234, true); // Little Endian
dv.getInt16(0, true);         // 0x1234
```

---

## 9) Practice tasks
1. 4‑byte buffer me `'A' (0x41)` ko byte‑by‑byte likho aur read karke verify karo.
2. Int16 ko big endian aur little endian dono se likho/read karo — difference observe karo.
3. Har write ke baad `Array.from(new Uint8Array(buffer))` print karke bytes ka snapshot rakho.

---

**Bas!** Ab aap confidently buffers/bytes ko read/write kar sakte ho. Isi pattern me aur experiments try karein.
