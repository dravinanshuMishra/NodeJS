# Hexadecimal Number System in JavaScript / Node.js

## 📌 Overview
- **Base:** 16
- **Allowed Digits:** `0–9` and `A–F` (or lowercase `a–f`)
- **A–F Mapping:**  
  - A = 10  
  - B = 11  
  - C = 12  
  - D = 13  
  - E = 14  
  - F = 15

---

## 🔹 Example Conversions

### Hexadecimal → Decimal
Each digit is multiplied by 16 raised to the power of its position (right to left).

Example: `0x2F`  
| Digit | Position | Power of 16 | Calculation       |
|-------|----------|-------------|-------------------|
| F(15) | 0        | 16⁰ = 1     | 15 × 1 = **15**   |
| 2     | 1        | 16¹ = 16    | 2 × 16 = **32**   |

**Total:** `32 + 15 = 47 (decimal)`

---

## 🔹 JavaScript Representation
- **Hexadecimal Literal** → Prefix with `0x` or `0X`
```js
let hexNum = 0x2F;
console.log(hexNum); // 47 (decimal)
```

- **Decimal → Hexadecimal**
```js
console.log((47).toString(16)); // "2f"
```

- **Hexadecimal → Decimal**
```js
console.log(parseInt("2F", 16)); // 47
```

---

## 📊 Quick Comparison Table

| Number System | Base | Digits Allowed        | Example (Decimal Value) |
|---------------|------|-----------------------|-------------------------|
| Decimal       | 10   | 0–9                   | `10` = 10               |
| Octal         | 8    | 0–7                   | `10` = 8                |
| Hexadecimal   | 16   | 0–9, A–F / a–f         | `10` = 16               |

---

## 💡 Real-world Usage
- **Web Colors** (e.g., `#FF5733`)
- **Memory Addresses** in programming
- **Low-level Data Representation** (e.g., binary ↔ hex for compactness)

---


# Hexadecimal (0x) — Step-by-step explanation for beginners

## Example code
```js
// 1. 0x in JS represents a hexadecimal number.
const digit1 = 0x843;
console.log(digit1); // 2115
```

---

## 1) ये `0x843` क्या है?
- `0x` — JavaScript में hexadecimal literal के लिए prefix है। मतलब यह number **base 16** में लिखा गया है।  
- `843` — यह hexadecimal digits हैं (यहां सब digits 0–9 में हैं)। Hex में digits `0–9` और `A–F` (या `a–f`) होते हैं।

---

## 2) Hexadecimal → Decimal कैसे convert करते हैं (बिल्कुल step-by-step)

Hexadecimal में हर digit की कुल value = **digit × 16^(position)**  
Position (इंडेक्स) right से 0, 1, 2,... बढ़ता है।

हमारे number `0x843` के digits और positions:
- सबसे दाहिने digit = `3` → position = 0  
- बीच वाला digit = `4` → position = 1  
- सबसे बाएं digit = `8` → position = 2  

**Power of 16 (position के अनुसार):**
- 16^0 = 1
- 16^1 = 16
- 16^2 = 256

**हर digit का गणित (digit-by-digit):**
1. Rightmost: `3 × 16^0 = 3 × 1 = 3`
2. Middle:   `4 × 16^1 = 4 × 16 = 64`
3. Leftmost: `8 × 16^2 = 8 × 256 = 2048`

> अगर 256×8 कैसे आया ये देखना चाहो तो:
> 256 × 8 = (200×8) + (50×8) + (6×8) = 1600 + 400 + 48 = 2048

**अब जोड़ें (step-wise addition):**
- पहले दो को जोड़ो: `3 + 64 = 67`
- फिर तीसरे को जोड़ो: `67 + 2048 = 2115`

या alignment से दिखाएँ:
```
   2048
 +   67
 ------
   2115
```

इसलिए `0x843` का decimal मान **2115** है — और यही `console.log` में दिखेगा।

---

## 3) JavaScript में क्यों decimal दिखता है?
- JavaScript के number literals internal रूप से numeric value रखते हैं (decimal में दिखाते हैं)। जब आप `console.log(0x843)` करते हैं तो JS उस internal numeric (decimal) value को print करता है — इसलिए output `2115` आता है।

---

## 4) कैसे परिवर्तित करें — छोटे code examples
```js
// Hex literal -> decimal (literal)
console.log(0x843);         // 2115

// Hex string -> decimal (parseInt के साथ)
console.log(parseInt("843", 16)); // 2115

// Decimal -> Hex string (.toString(16))
console.log((2115).toString(16)); // "843"
```

> नोट: `.toString(16)` lowercase hex देता है ("843") — uppercase चाहिए तो `.toString(16).toUpperCase()` कर लें।

---

## 5) Quick reference / Extra notes
- Hex base = **16**. Digits: `0–9`, `A(10)`, `B(11)`, `C(12)`, `D(13)`, `E(14)`, `F(15)`.
- Hex literal JS में: `0x...` या `0X...` (case-insensitive)
- Hex में letters भी आ सकते हैं, जैसे `0xA3F` (`A = 10`, `F = 15`).

---

## 6) Practice (छोटा exercise)
- Convert `0x1A3` to decimal step-by-step (try देख के बताओ, मैं check कर दूँगा)।

---

**Short summary:** `0x843 = 8×256 + 4×16 + 3×1 = 2048 + 64 + 3 = 2115` — इसलिए `console.log(0x843)` का output **2115** होता है.

