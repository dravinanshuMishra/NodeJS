# Octal Number System in JavaScript / Node.js

## 📌 Octal Number System
- **Base:** 8
- **Allowed Digits:** `0, 1, 2, 3, 4, 5, 6, 7`
- **Example:**  
  `10` (octal) = `8` (decimal)  
  `75` (octal) = `61` (decimal)  

### 🔹 Representation in JavaScript / Node.js
- **Octal Literal (ES6+)** → Prefix with `0o` or `0O`  
  ```js
  let num = 0o75; // octal
  console.log(num); // 61 (decimal)
  ```

- **Convert Decimal → Octal**
  ```js
  let decimal = 61;
  console.log(decimal.toString(8)); // "75"
  ```

- **Convert Octal → Decimal**
  ```js
  console.log(parseInt("75", 8)); // 61
  ```

---

## 📌 Decimal Number System
- **Base:** 10
- **Allowed Digits:** `0, 1, 2, 3, 4, 5, 6, 7, 8, 9`
- **Example:**  
  `10` (decimal) = `10` (decimal)  
  `75` (decimal) = `75` (decimal)

---

## 📊 Quick Comparison

| Number System | Base | Digits Allowed     | Example (Value in Decimal) |
|---------------|------|--------------------|----------------------------|
| Decimal       | 10   | 0–9                | `10` = 10                  |
| Octal         | 8    | 0–7                | `10` = 8                   |

---


# Understanding Octal Number System Conversion in JavaScript

## Example Code
```js
// start learning octal number system.
const octalNumber1 = 0o237;
console.log(octalNumber1); // 159 in decimal
```

---

## 1️⃣ Step-by-Step Explanation

### **Line 1**
```js
const octalNumber1 = 0o237;
```
- **`0o` Prefix:** This tells JavaScript that the number is in **Octal (Base 8)** format.
- **`237`:** Octal digits can only be `0–7`. Here we have three digits: `2`, `3`, and `7`.

---

## 2️⃣ How Octal to Decimal Conversion Works

In the octal number system, each digit's place value is multiplied by powers of 8, starting from the rightmost digit (position 0).

| Digit | Position (from right) | Power of 8 | Calculation         |
|-------|-----------------------|------------|---------------------|
| 7     | 0                     | 8⁰ = 1     | 7 × 1 = **7**       |
| 3     | 1                     | 8¹ = 8     | 3 × 8 = **24**      |
| 2     | 2                     | 8² = 64    | 2 × 64 = **128**    |

**Total:**
```
128 + 24 + 7 = 159 (decimal)
```

---

### **Line 2**
```js
console.log(octalNumber1); 
```
- JavaScript internally stores numbers in **decimal**.
- So when you print an octal literal like `0o237`, it automatically shows the **decimal equivalent**:
```
159
```

---

## 3️⃣ Back Conversion (Decimal → Octal)
To convert decimal back to octal in JavaScript:
```js
console.log((159).toString(8)); // "237"
```

---

## 🔹 Summary
- **`0o`** → Octal literal in JavaScript (ES6+ syntax).
- **Conversion Formula:** `Sum of (digit × 8^(position))`
- **Output:** Default print is in decimal, use `.toString(8)` to display octal.

---




