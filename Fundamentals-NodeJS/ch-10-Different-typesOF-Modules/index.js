// NODEJS - Different Types of Modules.
//  1. Core Modules / Native Modules / Built-in Modules.
import fs from 'node:fs';
console.log(typeof fs); // 'object'
//  - Node.js provides a set of built-in modules that can be used without installation.
//  - Examples include 'fs' for file system operations, 'http' for creating servers, etc.


//  2. Local Modules / User-defined Modules.
import { add } from './app.js';
console.log(add(2, 3)); // 5
//  - These are modules created by the user in their application.
//  - They can be imported using relative paths.

//  3. Third-party Modules / npm modules.
import express from 'express';
const app = express();
console.log(typeof express); // 'function'

//  - These are modules that are not part of Node.js core or user-defined.
//  - They are usually installed via npm and can be used in the application.
//  - Examples include 'express' for web applications, 'mongoose' for MongoDB interactions

//  4. Global Modules.
// ये npm से install तो होते हैं लेकिन globally install किए जाते हैं (-g flag के साथ)।

// ये CLI tools जैसे काम करते हैं और हर project में available रहते हैं।

// npm install -g nodemon
