# 📦 ES6 Modules in Node.js (हिंदी में गाइड)

Node.js में पहले CommonJS modules (`require`, `module.exports`) का इस्तेमाल होता था। लेकिन अब Node.js ने **ES6 Modules (a.k.a. ECMAScript Modules)** को भी पूरी तरह सपोर्ट करना शुरू कर दिया है।

---

## ✅ ES6 Modules क्या हैं?

ES6 Modules एक **modular JavaScript code** लिखने का नया तरीका है, जो `import` और `export` सिंटैक्स पर आधारित होता है। यह तरीका ब्राउज़र और Node.js दोनों में काम करता है।

---

## 🔁 Basic Syntax

```js
// 👉 Export करना (named)
export const name = 'Dravinanshu';

export function greet() {
  console.log('Hello!');
}

// 👉 Default export
export default function sayHello() {
  console.log('Hi!');
}
```

```js
// 👉 Import करना (named)
import { name, greet } from './module.js';

// 👉 Default import
import sayHello from './module.js';
```

> ⚠️ ES6 modules में आपको `.js` या `.mjs` extension हमेशा लिखना होता है!

---

## 🛠️ Node.js में ES6 Modules कैसे Enable करें?

Node.js में ES6 modules यूज़ करने के लिए दो तरीके हैं:

### 🔹 Option 1: `.mjs` Extension Use करें

```bash
node app.mjs
```

### 🔹 Option 2: `package.json` में `"type": "module"` जोड़ें

```json
{
  "type": "module"
}
```

अब आप `.js` files में भी `import`/`export` का उपयोग कर सकते हैं।

---

## ⚙️ Example

### 📁 `math.js`

```js
export function add(a, b) {
  return a + b;
}
```

### 📁 `app.js`

```js
import { add } from './math.js';

console.log(add(2, 3)); // 5
```

---

## ⚖️ CommonJS vs ES6 Modules

| Feature              | CommonJS                     | ES6 Modules               |
|----------------------|------------------------------|---------------------------|
| Import               | `require()`                  | `import`                  |
| Export               | `module.exports`             | `export` / `export default` |
| Top-Level Await      | ❌ Not supported              | ✅ Supported               |
| Async Module Loading | ❌ Mostly sync               | ✅ Native async loading    |
| File Extension       | `.js`                        | `.mjs` or `.js` with `"type": "module"` |

---

## ⚠️ Limitations & Notes

- CommonJS (`require`) और ES Modules (`import`) को **आपस में पूरी तरह mix नहीं किया जा सकता।**
- ES Modules में **top-level await** चल सकता है (CommonJS में नहीं)。
- `__filename`, `__dirname` जैसे variables ES Modules में **by default नहीं मिलते**, आपको `import.meta.url` से workaround करना होगा।

---

## 📌 Summary

- Node.js अब ES6 Modules को पूरी तरह सपोर्ट करता है।
- Use `.mjs` extension या `"type": "module"` in `package.json`
- `import`/`export` सिंटैक्स ब्राउज़र और Node दोनों में एक जैसा चलता है।
- नया Project शुरू करते समय **ES6 Modules preferred होते हैं**।

---

✍️ *यह डॉक्युमेंट Node.js में ES6 Modules को जल्दी और आसान तरीके से समझने के लिए बनाया गया है।*