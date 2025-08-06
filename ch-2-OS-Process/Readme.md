# Create README.md content for process properties and methods with examples
process_props_readme = """
# ✅ Top 25 `process` Properties and Methods in Node.js

This file lists the 25 most important and commonly used `process` object properties and methods in Node.js along with short descriptions and examples.

---

## 📜 List of Properties and Methods

| #  | Name                   | Type     | Description |
|----|------------------------|----------|-------------|
| 1  | `process.env`          | Property | Contains environment variables as an object. |
| 2  | `process.argv`         | Property | CLI arguments passed to Node.js. |
| 3  | `process.exit()`       | Method   | Exits the current process with optional exit code. |
| 4  | `process.pid`          | Property | Current process ID. |
| 5  | `process.ppid`         | Property | Parent process ID. |
| 6  | `process.cwd()`        | Method   | Current working directory. |
| 7  | `process.chdir()`      | Method   | Change working directory. |
| 8  | `process.uptime()`     | Method   | Seconds the process has been running. |
| 9  | `process.hrtime()`     | Method   | High-res real time in [seconds, nanoseconds]. |
| 10 | `process.version`      | Property | Node.js version string. |
| 11 | `process.versions`     | Property | Version info of Node.js dependencies. |
| 12 | `process.memoryUsage()`| Method   | Memory usage statistics. |
| 13 | `process.kill(pid)`    | Method   | Send signal to another process. |
| 14 | `process.title`        | Property | Get/set the process title. |
| 15 | `process.platform`     | Property | OS platform (e.g. linux, win32). |
| 16 | `process.arch`         | Property | CPU architecture (e.g. x64). |
| 17 | `process.stdout`       | Property | Writable stream to standard output. |
| 18 | `process.stderr`       | Property | Writable stream to standard error. |
| 19 | `process.stdin`        | Property | Readable stream from standard input. |
| 20 | `process.nextTick()`   | Method   | Schedule function at the start of next event loop. |
| 21 | `process.exitCode`     | Property | Set exit code to use on exit. |
| 22 | `process.emitWarning()`| Method   | Emit warning with message. |
| 23 | `process.getuid()`     | Method   | Gets user ID (POSIX only). |
| 24 | `process.getgid()`     | Method   | Gets group ID (POSIX only). |
| 25 | `process.mainModule`   | Property | Refers to entry-point module. *(deprecated)* |

---

## 🔍 Usage Examples

```js
console.log(process.env.USER);        // Environment variable
console.log(process.argv);            // CLI arguments
console.log(process.pid);             // Current PID
console.log(process.ppid);            // Parent PID
console.log(process.cwd());           // Current directory
process.chdir("..");                  // Go up one dir
console.log(process.uptime());        // Uptime in seconds
console.log(process.hrtime());        // High-res time
console.log(process.version);         // Node version
console.log(process.versions);        // Dependencies versions
console.log(process.memoryUsage());   // Memory usage stats
console.log(process.platform);        // OS type
console.log(process.arch);            // CPU architecture
process.stdout.write("Hello\\n");     // Write to stdout
console.error("This is an error");    // stderr output
process.nextTick(() => console.log("Next Tick")); // Event loop tick
process.exitCode = 1;                 // Set exit code
// process.exit();                    // Force exit (uncomment to use)
process.emitWarning("Custom warning"); // Emit warning

if (process.getuid) console.log(process.getuid()); // POSIX only
if (process.getgid) console.log(process.getgid()); // POSIX only

console.log(require.main === module); // Check if main module
```
