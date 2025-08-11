# Node.js File System Methods (fs/promises)

This document briefly explains four important file system methods in Node.js.

---

## 1. `rename(oldPath, newPath)`
- **Purpose:** Rename a file/folder or move it to another location.
- **Details:** If the `newPath` is in a different folder, this method will move the file/folder.
- **Example:**
  ```js
  import fs from "fs/promises";
  await fs.rename("old.txt", "new.txt"); // rename file
  await fs.rename("file.txt", "C:\\Users\\Dell\\Desktop\\file.txt"); // move file
  ```

---

## 2. `unlink(path)` (Delete a File)
- **Purpose:** Permanently deletes a file.
- **Details:** Works only for files. For folders, use `rmdir` or `rm`.
- **Example:**
  ```js
  import fs from "fs/promises";
  await fs.unlink("old.txt");
  ```

---

## 3. `copyFile(src, dest)`
- **Purpose:** Makes an exact copy of a file.
- **Details:** Destination folder must already exist, otherwise an error will occur.
- **Example:**
  ```js
  import fs from "fs/promises";
  await fs.copyFile("source.txt", "backup.txt");
  ```

---

## 4. `cp(src, dest, options)`
- **Purpose:** Copies a file or an entire folder.
- **Details:** Supports recursive copy when `{ recursive: true }` is provided in `options`.
- **Example:**
  ```js
  import fs from "fs/promises";
  await fs.cp("myFolder", "myFolderCopy", { recursive: true });
  ```

---

## Summary Table

| Method          | Works On   | Can Move? | Can Copy Folder? | Needs Folder to Exist? |
|----------------|-----------|-----------|------------------|------------------------|
| `rename`       | File/Dir  | ✅         | ❌               | Destination folder must exist |
| `unlink`       | File      | ❌         | ❌               | N/A |
| `copyFile`     | File      | ❌         | ❌               | ✅ |
| `cp`           | File/Dir  | ❌         | ✅               | Creates folder if `recursive: true` |

---

**Tip:** Always handle errors using `try...catch` to avoid crashes.
