# 📦 Node.js - Different Types of Modules

Node.js में modules का उपयोग कोड को reusable और organized बनाने के लिए किया जाता है। ये चार मुख्य प्रकार के modules सपोर्ट करता है:

---

## 1️⃣ Core Modules / Native Modules / Built-in Modules

Node.js अपने साथ कुछ pre-installed modules लाता है जिन्हें आप बिना किसी installation के सीधे use कर सकते हैं।

```js
import fs from 'node:fs';
console.log(typeof fs); // 'object'
```

### 📝 Explanation:
- Node.js provides a set of built-in modules that can be used without installation.
- Examples include:
  - `'fs'` for file system operations
  - `'http'` for creating servers
  - `'path'`, `'os'`, `'crypto'`, etc.

---

## 2️⃣ Local Modules / User-defined Modules

ये modules developer द्वारा application के अंदर define किए जाते हैं।

```js
// app.js
export function add(a, b) {
  return a + b;
}

// index.js
import { add } from './app.js';
console.log(add(2, 3)); // 5
```

### 📝 Explanation:
- These are modules created by the user in their application.
- They can be imported using relative paths like `./module.js`.

---

## 3️⃣ Third-party Modules / npm Modules

ये modules Node.js के part नहीं होते बल्कि इन्हें npm के ज़रिए install करना पड़ता है।

```bash
npm install express
```

```js
import express from 'express';
const app = express();
console.log(typeof express); // 'function'
```

### 📝 Explanation:
- These are modules that are not part of Node.js core or user-defined.
- They are usually installed via **npm** and can be used in the application.
- Common examples:
  - `'express'` for web applications
  - `'mongoose'` for MongoDB interactions
  - `'axios'`, `'cors'`, `'dotenv'`, etc.

---

## 4️⃣ Global Modules

ये modules globally install किए जाते हैं और CLI (Command Line Interface) tools की तरह काम करते हैं।

```bash
npm install -g nodemon
```

```bash
nodemon app.js
```

### 📝 Explanation:
- ये npm से install तो होते हैं लेकिन globally install किए जाते हैं (`-g` flag के साथ)।
- CLI tools जैसे काम करते हैं और हर project में globally available रहते हैं。
- Examples:
  - `nodemon`
  - `eslint`
  - `npm-check`
  - `typescript` compiler (`tsc`)

---

## 📊 Summary Table

| Type                   | Examples                         | Installed via         | Import Style / Usage         | Purpose                          |
|------------------------|----------------------------------|------------------------|-------------------------------|----------------------------------|
| Core Modules           | `fs`, `http`, `path`             | Built-in               | `import from 'node:fs'`       | System-level tasks               |
| Local Modules          | `./app.js`, `./utils/helper.js`  | User-defined           | `import from './module.js'`   | Custom application logic         |
| Third-party Modules    | `express`, `mongoose`, `cors`    | `npm install`          | `import from 'express'`       | External libraries via npm       |
| Global Modules         | `nodemon`, `eslint`, `tsc`       | `npm install -g`       | CLI usage (e.g. `nodemon`)    | Tools accessible via command line|

---

> ✅ यह document Node.js में modules की सभी मुख्य categories को practical examples और explanations के साथ summarize करता है।