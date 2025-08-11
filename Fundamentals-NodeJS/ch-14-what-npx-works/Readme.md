# 🚀 `npx` क्या है? और यह कैसे काम करता है — Node.js में (Simple भाषा में)

यह documentation `npx` के बारे में पूरी जानकारी देती है — वह भी एकदम आसान और step-by-step तरीके से।

---

## 📘 `npx` क्या है?

🔹 `npx` एक CLI (Command Line Interface) टूल है जो `npm` के साथ आता है (npm v5.2.0 से)।  
🔹 इसका उपयोग हम किसी भी Node.js package को **बिना install किए** सीधे run करने के लिए करते हैं।

---

## 🛠️ `npx` कैसे काम करता है? (Step-by-Step)

मान लीजिए आप ये command चलाते हैं:

```bash
npx create-react-app my-app
```

### 🪜 Step 1: Local `node_modules/.bin` में चेक करता है
- सबसे पहले `npx` देखता है कि क्या package local project में पहले से install है?
- अगर हां → उसे वहीं से रन कर देता है।

---

### 🪜 Step 2: Cache में चेक करता है
- अगर local में नहीं है, तो `npx` global cache (`~/.npm/_npx`) में चेक करता है।
- अगर वहां है → उसे रन करता है।

---

### 🪜 Step 3: इंटरनेट से Download करता है
- अगर cache में भी नहीं है, तो npm registry से पैकेज को temporarily डाउनलोड करता है।

---

### 🪜 Step 4: पैकेज को Execute करता है
- पैकेज के अंदर जो `bin` script होता है (`package.json` में define), उसे run करता है।

---

### 🪜 Step 5: Cleanup कर देता है
- अगर पैकेज temporary था, तो command run होने के बाद उसे हटा देता है।

---

## 🎯 Common Examples

| Command | काम |
|--------|-----|
| `npx create-react-app my-app` | React app बनाता है |
| `npx eslint .` | Linting करता है |
| `npx tsc` | TypeScript compiler चलाता है |
| `npx cowsay "Hello"` | Funny message print करता है |

---

## ⚠️ सुरक्षा सलाह (Security Tip)

> किसी भी unknown या untrusted package को `npx` से run करने से बचें, क्योंकि ये code directly execute करता है।

---

## ✅ Summary (सारांश)

> "`npx` एक ऐसा टूल है जो आपको Node.js CLI tools को बिना install किए, तुरंत चलाने की सुविधा देता है। यह पहले local देखता है, फिर cache, और अंत में इंटरनेट से डाउनलोड करता है। काम के बाद साफ-सफाई भी कर देता है।"

---

## 📚 Extra Resources

- [npx - npm Documentation](https://docs.npmjs.com/cli/v9/commands/npx)
- [npm Scripts Guide](https://docs.npmjs.com/cli/v9/using-npm/scripts)
- [Node.js Official Website](https://nodejs.org/)

---

## 📄 License

यह डॉक्यूमेंटेशन MIT License के अंतर्गत उपयोग और संशोधित करने के लिए स्वतंत्र है।