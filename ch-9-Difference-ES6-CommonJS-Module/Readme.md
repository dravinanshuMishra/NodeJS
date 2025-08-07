# 📦 Synchronous vs Asynchronous + CommonJS vs ES6 Modules (हिंदी में)

## 🔄 Synchronous vs Asynchronous JavaScript

- **Synchronous:** काम एक के बाद एक, रुक कर चलता है।
- **Asynchronous:** समय लेने वाले काम पीछे चला दिए जाते हैं, बाकी कोड आगे बढ़ता है।

---

## 📦 Difference Between CommonJS and ES6 Modules

| Feature | 🧩 CommonJS Module | 🚀 ES6 Module |
|--------|---------------------|------------------|
| 🔧 Syntax | `require()` और `module.exports` | `import` और `export` |
| ⚙️ Execution | Synchronous (एक के बाद एक) | Asynchronous (साथ-साथ possible) |
| 🧠 Use In | Default in Node.js (v12 और उससे पहले) | Modern Node.js (v14+, full in v20+) और Browsers |
| 📄 File Extension | `.js` | `.mjs` या `.js` with `"type": "module"` in `package.json` |
| 🔁 Import/Export | `const x = require('./x')`<br>`module.exports = x` | `import x from './x.js'`<br>`export default x` |
| 🔄 Dynamic Import | ❌ नहीं supported | ✅ `import()` method से possible |
| ⏳ Top-level `await` | ❌ Not supported | ✅ Supported |
| 🧭 Scope | CommonJS module का अपना scope होता है | ES6 modules हमेशा strict mode में होते हैं |
| 📍 `__filename`, `__dirname` | ✅ उपलब्ध | ❌ नहीं होते (use `import.meta.url`) |

---

### 🧩 CommonJS Example
```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };

// app.js
const { add } = require('./math');
console.log(add(2, 3)); // 5
```

---

### 🚀 ES6 Module Example
```js
// math.mjs OR math.js (with "type": "module")
export function add(a, b) {
  return a + b;
}

// app.mjs OR app.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
```

---

## 📌 Summary

- **CommonJS** पुराना तरीका है जो सिर्फ Node.js में चलता है।
- **ES6 Modules** नया और स्टैंडर्ड तरीका है जो Node.js और browsers दोनों में चलता है।
- नए प्रोजेक्ट्स में **ES6 Modules** का इस्तेमाल करना recommended है।