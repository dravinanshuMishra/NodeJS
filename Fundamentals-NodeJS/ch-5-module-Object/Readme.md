# 📦 Node.js `module` Object

The `module` object is a special built-in object in **Node.js** that provides information about the current module (file). Every file in Node.js is treated as a separate module.

---

## 🔹 Common Properties of `module` Object

| 🏷️ Property | 📄 Description |
|------------|----------------|
| `exports`  | This is the object that's returned when another module requires this one. |
| `id`       | The identifier for the module (usually the filename). |
| `filename` | Full path of the module file. |
| `loaded`   | Boolean that tells whether the module is loaded. |
| `parent`   | The module that first required this one. |
| `children` | Array of modules required by this one. |

---

## 📘 Introduction

- Every file is a **module** in Node.js.
- Node internally **wraps your file** in a function that provides access to:
  ```js
  module, exports, require, __filename, __dirname
