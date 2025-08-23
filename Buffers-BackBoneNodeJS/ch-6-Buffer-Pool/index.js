import { Buffer } from "node:buffer";

// Small buffer (< 8 KB) → comes from Buffer Pool
const buf1 = Buffer.allocUnsafe(10);
const buf2 = Buffer.allocUnsafe(10);

console.log("Buf1:", buf1);
console.log("Buf2:", buf2);

// Overwriting buf1 also affects buf2 sometimes,
// because both can come from same Buffer Pool memory
buf1[0] = 65; // 'A'
console.log("Buf1 after write:", buf1);
console.log("Buf2 may share memory region:", buf2);

// Large buffer (>= 8 KB) → allocated separately (not from pool)
const largeBuf = Buffer.allocUnsafe(8192);
console.log("LargeBuf length:", largeBuf.length);

/**
 * Output Explanation:
 * buf1 aur buf2 dono buffer pool ke ek hi memory block se slice ho sakte hain.
 *
 * Agar overwrite karo → kabhi-kabhi dusre buffer ka part bhi change ho sakta hai.
 *
 * Agar buffer size 8 KB se zyada hai → wo direct alag memory allocate karega, pool se nahi.
 */
