### Node.js में require() method एक module को import करने के लिए उपयोग किया जाता है, और यह जो भी module export करता है, उसे return करता है।
## module.export ko console karane pr  empty {}, object return hoga jo by default hota hai.
# exports और module.exports दोनों शुरू में एक ही object को point करते हैं:
```javascript
console.log(module.exports === exports);  // true
```