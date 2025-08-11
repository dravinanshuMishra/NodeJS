# 🔰 Module Wrapper Function in Node.js (हिंदी में)

Node.js में जब आप कोई JavaScript फ़ाइल बनाते हो, तो Node.js उस फ़ाइल को अपने आप एक function में लपेट देता है।  
इसे ही **Module Wrapper Function** कहते हैं।

---

## 🤔 क्यों लपेटता है?

ताकि:

- आपकी फ़ाइल का कोड **global scope को गंदा न करे** (हर module का अपना local scope हो)
- आपको कुछ **special variables** मिल सकें जैसे:

| 🔑 Variable     | 📄 Description |
|----------------|----------------|
| `require`      | modules को import करने के लिए |
| `exports`      | जो चीज़ें आप बाहर भेजना चाहते हो |
| `module`       | उस file की जानकारी |
| `__filename`   | file का पूरा path |
| `__dirname`   | file का folder path |

---

## 🧠 Node.js क्या करता है?

Node.js हर module (file) को **ऐसे लपेट देता है**:

```js
(function (exports, require, module, __filename, __dirname) {
  // आपकी फ़ाइल का कोड यहां आता है
});
