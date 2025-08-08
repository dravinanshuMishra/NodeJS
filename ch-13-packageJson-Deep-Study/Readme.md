## DEEP STUDY PACKAGE.JSON FILE.
```javascript
# how to create nodeJS project.
1. npm init ==> step by step batao isako.
2. npm init -y ==> jo bhi default configuration ke saath aaye.

"scripts": {
   "start": "node index.js",
   "test": "echo \"Error: no test specified\" && exit 1",
   "restart": "npm run stop && npm run start",
   "stop": "kill $(lsof -t -i:3000)",
   "dev": "nodemon index.js" or
   "dev": "node --watch index.js" ==> ye watch karenga work same like nodemon.
},
```
  
# 🚀 Deep Study — Node.js App
This project is a simple Node.js application. The scripts defined in the `package.json` file help you manage and control the app efficiently during development and production.

---

## 📦 Scripts Available

The following NPM scripts are defined in the `package.json` file:

| Command          | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| `npm start`       | 🔹 Starts the app using Node.js by running `index.js`.                       |
| `npm run dev`     | 🔄 Starts the app using `nodemon`, automatically restarts on code changes. |
| `npm run stop`    | 🛑 Stops the app by killing the process running on port `3000`. *(Unix only)* |
| `npm run restart` | ♻️ Restarts the app — first stops it, then starts it again.                 |
| `npm test`        | ❌ Placeholder command — shows an error message since no test is defined.  |

---

## 📝 Scripts Detail

### ▶️ `start`
```bash
node index.js
