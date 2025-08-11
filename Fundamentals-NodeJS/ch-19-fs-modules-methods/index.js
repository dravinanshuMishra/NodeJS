import fsPromises from "node:fs/promises";
import fs from "fs";

// 1. RENAME THE FILE.
const RenameTheFile = async () => {
  try {
    await fsPromises.rename("newFile.png", "newFile-2.png");
    console.log(`File renamed successfully !!`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("File not found");
      return;
    } else {
      console.log("Error renaming file:", error);
    }
  }
};

// RenameTheFile();

// 2. DELETE THE FILE.
const DeleteTheFile = async () => {
  try {
    await fsPromises.unlink("newFile-2.png");
    console.log(`File deleted successfully !!`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("File not found");
      return;
    } else {
      console.log("Error deleting file:", error);
    }
  }
};

// DeleteTheFile();

// 3. Copy the file.
// syntax: source of file name , second destination of file name.
const CopyTheFile = async () => {
  try {
    await fsPromises.copyFile(
      "anime.png",
      "C:\\Users\\Dell\\Pictures\\anime.png"
    );
    console.log(`File copied successfully !!`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("File not found");
      return;
    } else {
      console.log("Error copying file:", error);
    }
  }
};

// CopyTheFile();

// 4. CP method for folder to folder copy.
// syntax: source of folder name , second destination of folder name.
const CopyFolder = async () => {
  try {
    await fsPromises.cp(
      "D:\\MAASHARDA\\START-MAASHARDA\\JS-Development\\Full-Stack-Development-2025\\BACKEND\\NodeJS\\ch-19-fs-modules-methods",
      "C:\\Users\\Dell\\Pictures",
      { recursive: true }
    );
    console.log(`Folder copied successfully !!`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("Folder not found");
      return;
    } else {
      console.log("Error copying folder:", error);
    }
  }
};

// CopyFolder();

// 5. delete the empty folder.
const DeleteTheEmptyfolder = async () => {
  try {
    await fsPromises.rmdir("hello");
    console.log("Empty folder deleted successfully !!");
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("Folder not found");
      return;
    } else if (error.code === "ENOTEMPTY") {
      console.log("Folder is not empty, cannot delete");
      return;
    } else {
      console.log("Error deleting empty folder:", error);
    }
  }
};

// DeleteTheEmptyfolder();
// 6. delete the folder (folder inside mutiple files and folder).
const DeleteTheFolder = async () => {
  try {
    await fsPromises.rm("C:\\Users\\Dell\\AppData\\Local\\Temp", {
      recursive: true,
    });
    console.log("Folder deleted successfully !!");
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("Folder not found");
      return;
    } else if (error.code === "EBUSY") {
      console.log("Folder is currently in use, cannot delete");
      return;
    } else {
      console.log("Error deleting folder:", error);
    }
  }
};

// DeleteTheFolder();

// 7. CREATE A NEW FOLDER.
const CreateNewFolder = async () => {
  try {
    // Pehle check karo ki folder exist karta hai ya nahi
    try {
      await fsPromises.access("newFolder");
      console.log("Folder already exists");
      return;
    } catch {
      // Agar yaha aaya to folder nahi hai, ab banate hain
    }

    await fsPromises.mkdir("newFolder", { recursive: true });
    console.log("Folder created successfully !!");
  } catch (error) {
    console.log("Error creating folder:", error);
  }
};

// call the function.
// CreateNewFolder();

// 8. stats.
const GetFileStats = async () => {
  try {
    const stats = await fsPromises.stat("newFile-3.png");
    console.log("File stats:", stats);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("File not found");
      return;
    } else {
      console.log("Error getting file stats:", error);
    }
  }
};

// GetFileStats();

// 9. getFolderStats.
const GetFolderStats = async () => {
  try {
    const stats = await fsPromises.stat("newFolders");
    console.log("Folder stats:", stats);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("Folder not found");
      return;
    } else {
      console.log("Error getting folder stats:", error);
    }
  }
};

// GetFolderStats();

// 10. watch.
const WatchFile = () => {
  try {
    fs.watch("file.txt", (eventType, filename) => {
      console.log(`Event: ${eventType}, File: ${filename}`);
    });
    console.log("Watching for changes in file.txt...");
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("File not found");
      return;
    } else {
      console.log("Error watching file:", error);
    }
  }
};

WatchFile();
