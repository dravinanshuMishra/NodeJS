# BUFFER POOL.

```javascript

Buffer Pool in Node.js

Node.js performance ke liye ek Buffer Pool use karta hai.

Kya hai?
Ek pre-allocated large memory block (jaise 8 KB ka) jisme se chhote-chhote Buffer slices diye jaate hain.

Kyun?
Taaki bar-bar malloc (new memory allocate karna) na karna pade, aur memory allocation fast ho.

Kaise kaam karta hai?
Jab aap Buffer.allocUnsafe(size) ya Buffer.from(string) use karte ho chhoti size (< 8 KB) ke liye, tab wo naya memory allocate nahi karta balki Buffer Pool se slice deta hai.

```