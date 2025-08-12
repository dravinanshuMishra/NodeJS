
# UTF-8 vs UTF-16 vs UTF-32 — Unicode Transformation Format

## Definition
UTF (Unicode Transformation Format) is a way to store and transmit Unicode characters in bytes.  
The difference lies in how many bytes are used for each character.

---

## 1. UTF-8
- **Bytes per char:** 1 to 4 bytes (Variable length)
- **How it works:**
  - ASCII chars → 1 byte
  - Extended chars (emoji, Hindi) → 2–4 bytes
- **Example:**
  - `"A"` → `0x41` → **1 byte**
  - `"😊"` → `0xF0 0x9F 0x98 0x8A` → **4 bytes**
- **Use cases:**
  - Most common on the web (HTML, JSON, APIs)
  - Best for storage/transfer when most text is English

---

## 2. UTF-16
- **Bytes per char:** 2 or 4 bytes (Variable length)
- **How it works:**
  - Basic Multilingual Plane (BMP) chars → 2 bytes
  - Others → 4 bytes (surrogate pairs)
- **Example:**
  - `"A"` → `0x0041` → **2 bytes**
  - `"😊"` → `0xD83D 0xDE0A` → **4 bytes**
- **Use cases:**
  - Windows internal API
  - Java, C#, and many programming languages internally
  - Good for Asian languages

---

## 3. UTF-32
- **Bytes per char:** Always 4 bytes (Fixed length)
- **How it works:**
  - Each char stores Unicode code point directly in 4 bytes
- **Example:**
  - `"A"` → `0x00000041` → **4 bytes**
  - `"😊"` → `0x0001F60A` → **4 bytes**
- **Use cases:**
  - Rare for storage (wastes space for ASCII)
  - Useful when fixed-width indexing is needed

---

## Quick Comparison Table

| Feature         | UTF-8           | UTF-16          | UTF-32         |
|----------------|----------------|----------------|---------------|
| Bytes/char     | 1–4            | 2 or 4         | Always 4      |
| Space efficiency| Best for English | Best for Asian langs | Worst (space-heavy) |
| Compatibility  | ASCII compatible | Not ASCII compatible | Not ASCII compatible |
| Common usage   | Web, APIs, files | Windows, Java, .NET | Internal processing |

---

## Summary
- **UTF-8** → Compact for English, universal web standard
- **UTF-16** → Balanced for multi-language text
- **UTF-32** → Fixed size, easier indexing, memory heavy
