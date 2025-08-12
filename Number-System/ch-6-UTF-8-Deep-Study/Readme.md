# `xxd` Command – Hexadecimal, Binary और Reverse Process Guide

`xxd` एक Linux/Unix command-line टूल है जो किसी फ़ाइल का **hex dump** बनाता है और उसे **binary, hex, या ASCII** में दिखाता है।  
इसके अलावा, यह hex dump को फिर से original फ़ाइल में बदलने की भी क्षमता रखता है।

---

## 1. Hexadecimal Output

```bash
xxd myFile.txt
```

### 📌 Description:
- `myFile.txt` के कंटेंट को **Hexadecimal** फॉर्मेट में दिखाता है।
- Output में 3 कॉलम होंगे:
  1. **Offset (Address)** – फ़ाइल के अंदर data कहाँ से शुरू हो रहा है (hex में)
  2. **Hexadecimal Bytes** – actual data का hex representation
  3. **ASCII Representation** – data का readable text

---

## 2. Binary Output

```bash
xxd -b myFile.txt
```

### 📌 Description:
- `-b` फ्लैग binary output दिखाने के लिए है।
- हर byte को **8-bit binary** में दिखाया जाएगा।
- Output में भी Address और ASCII representation रहेगा।

---

## 3. Reverse Process – Hex से Original File बनाना

अगर आपके पास किसी फ़ाइल का hex dump है और उसे वापस original फ़ाइल में बदलना है:

```bash
xxd -r myFile.hex myFile.txt
```

### 📌 Description:
- `-r` फ्लैग का मतलब है **reverse** यानी hex dump से actual फ़ाइल बनाना।
- पहला argument है hex dump फ़ाइल, दूसरा है output फ़ाइल का नाम।

---

## Example

मान लो `myFile.txt` में लिखा है:
```
ABC
```

---

### Hexadecimal Output:
```bash
xxd myFile.txt
```
Output:
```
00000000: 4142 430a                                ABC.
```

---

### Binary Output:
```bash
xxd -b myFile.txt
```
Output:
```
00000000: 01000001 01000010 01000011 00001010  ABC.
```

---

### Reverse Example:
1. **Hex Dump बनाना**
```bash
xxd myFile.txt > dump.hex
```

2. **Hex Dump से फ़ाइल वापस पाना**
```bash
xxd -r dump.hex restored.txt
```

अब `restored.txt` का कंटेंट original `myFile.txt` जैसा ही होगा।

---

## Summary Table:

| Command                          | Output Format  | Flag Purpose                               |
|----------------------------------|---------------|---------------------------------------------|
| `xxd myFile.txt`                 | Hexadecimal    | Default output                              |
| `xxd -b myFile.txt`              | Binary         | `-b` = binary output                        |
| `xxd -r dump.hex myFile.txt`     | Reverse Hex    | `-r` = hex dump से original file restore    |
| `xxd myFile.txt > dump.hex`      | Save Hex Dump  | Output को फ़ाइल में सेव करना               |

---

## Tips:
- `xxd` का default width 16 bytes per line होता है, इसे बदलने के लिए `-c <num>` यूज़ करें:
```bash
xxd -c 8 myFile.txt
```
- सिर्फ़ कुछ bytes दिखाने के लिए `-l <length>` यूज़ करें:
```bash
xxd -l 16 myFile.txt
```
## For 1 byte character
`0xxxxxxx`

## For 2 bytes character
`110xxxxx 10xxxxxx`


## For 3 bytes character
`1110xxxx 10xxxxxx 10xxxxxx`

## For 4 bytes character
`11110xxx 10xxxxxx 10xxxxxx 10xxxxxx`