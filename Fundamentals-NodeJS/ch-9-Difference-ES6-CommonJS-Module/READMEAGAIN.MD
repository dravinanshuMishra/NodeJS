## 📦 CommonJS (CJS) vs ES6 Modules (MJS) in Node.js

---

### 🔁 `this` Behavior

```js
// In ES6 Module
console.log(this); // ❌ undefined (strict mode enabled by default)

// In CommonJS Module
console.log(this); // ✅ {} (refers to module.exports object)
```

---

### 📌 Hoisting

- **CommonJS (CJS)**: ❌ Not hoisted — `require` statements behave like regular functions.
- **ES6 Modules (MJS)**: ✅ Imports are **hoisted** — meaning they are moved to the top at compile time.

---

### 📄 Example Code

#### ✅ ES6 Module Example

> Use `.mjs` extension or `"type": "module"` in `package.json`

```js
// math.mjs
export function add(a, b) {
  return a + b;
}
export function sub(a, b) {
  return a - b;
}

// app.mjs
import { add, sub } from './math.mjs';
console.log(add(5, 3)); // 8
console.log(sub(5, 3)); // 2
```

#### ✅ CommonJS Module Example

```js
// math.js
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
module.exports = { add, sub };

// app.js
const { add, sub } = require('./math.js');
console.log(add(5, 3)); // 8
console.log(sub(5, 3)); // 2
```

---

### 📊 Feature Comparison

| Feature | 🧩 CommonJS (CJS) | 🚀 ES6 Module (MJS) |
|--------|------------------|--------------------|
| 🔧 Syntax | `require()`, `module.exports` | `import`, `export` |
| ⚙️ Execution | Synchronous (Blocking) | Asynchronous (Non-blocking) |
| 📦 Load Time | Runtime (Dynamic) | Compile Time (Static) |
| 🧠 Tree Shaking | ❌ Not supported | ✅ Supported |
| 📄 File Extension | `.js` | `.mjs` or `.js` with `"type": "module"` |
| 🧭 Scope | Own local scope | Strict mode by default |
| ⏳ Top-Level `await` | ❌ Not supported | ✅ Supported |
| 🔁 Dynamic Import | ✅ `require()` | ✅ `import()` function |
| 📍 `__filename`, `__dirname` | ✅ Available | ❌ Use `import.meta.url` instead |
| 🧪 Use in Browser | ❌ Not directly | ✅ Yes |
| 🔄 Named Export | ⚠️ Limited | ✅ Full Support |
| 🔃 Default Export | ✅ Yes | ✅ Yes |

---

### 🧠 Note on `import.meta`

In ES6 modules:
```js
console.log(import.meta.url); // Full file path (like __filename)
```

To simulate `__dirname`:
```js
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

---

### 📝 Summary

- Use **CommonJS** for legacy Node.js support.
- Use **ES6 Modules** for modern, optimized, and browser-compatible code.
- Prefer **MJS** if you're targeting ESM features like top-level await, tree-shaking, or static analysis.