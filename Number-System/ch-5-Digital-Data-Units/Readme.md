# डिजिटल डेटा यूनिट्स (Digital Data Units) — स्पष्ट और संक्षिप्त अध्ययन

## बेसिक परिभाषा (Basic Definitions)
1. **10101100** → इसमें कुल **8 बिट** हैं।
2. **8 bits = 1 byte**
3. **4 bits = 1 nibble**

---

## डेटा यूनिट्स का आधार
कंप्यूटर में सभी डेटा अंततः **बिट्स (bits)** में स्टोर और ट्रांसफर होता है।
- **Bit**: Binary Digit, जो `0` या `1` हो सकता है।
- **Nibble**: 4 bits का समूह।
- **Byte**: 8 bits का समूह (2 nibbles)।

---

## डेटा मेजरमेंट सिस्टम के 2 प्रकार
डेटा की माप के लिए दो मानक प्रचलित हैं:

### 1. SI (International System of Units)
- **Base**: 10 (Decimal)
- 1 किलोबाइट = 1000 bytes
- प्रयोग: नेटवर्क स्पीड, स्टोरेज डिवाइस मार्केटिंग (HDD/SSD)

| SI यूनिट | Symbol | Value (in Bytes) |
|----------|--------|------------------|
| Kilobyte | kB     | 10³ = 1,000       |
| Megabyte | MB     | 10⁶ = 1,000,000   |
| Gigabyte | GB     | 10⁹ = 1,000,000,000 |
| Terabyte | TB     | 10¹² = 1,000,000,000,000 |

---

### 2. IEC (International Electrotechnical Commission)
- **Base**: 2 (Binary)
- 1 किबिबाइट (Kibibyte) = 1024 bytes
- प्रयोग: ऑपरेटिंग सिस्टम, मेमोरी कैलकुलेशन

| IEC यूनिट  | Symbol | Value (in Bytes) |
|------------|--------|------------------|
| Kibibyte   | KiB    | 2¹⁰ = 1,024       |
| Mebibyte   | MiB    | 2²⁰ = 1,048,576   |
| Gibibyte   | GiB    | 2³⁰ = 1,073,741,824 |
| Tebibyte   | TiB    | 2⁴⁰ = 1,099,511,627,776 |

---

## SI vs IEC का अंतर
| Feature          | SI (Decimal) | IEC (Binary) |
|------------------|--------------|--------------|
| Base             | 10           | 2            |
| 1 KB / KiB value | 1,000 bytes  | 1,024 bytes  |
| Use case         | Network speed, device marketing | OS storage reporting, RAM size |
| Symbols          | kB, MB, GB   | KiB, MiB, GiB |

---

## उदाहरण (Example)
यदि आपका SSD **500 GB** (SI) है, तो OS में यह लगभग **465 GiB** दिखेगा, क्योंकि OS IEC base-2 यूनिट्स में मापता है।

**कैलकुलेशन:**
500,000,000,000 bytes ÷ 1,073,741,824 (bytes/GiB) ≈ 465 GiB

---

## क्विक चीट-शीट
- 1 byte = 8 bits
- 1 nibble = 4 bits
- SI: 1 KB = 1000 bytes
- IEC: 1 KiB = 1024 bytes
- स्टोरेज डिवाइस = SI
- OS/Memory = IEC

---



