"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var acorn_1 = require("acorn");
var sourceCode = "import './style.scss'";
var ast = acorn_1.Parser.parse(sourceCode, { ecmaVersion: 6, sourceType: 'module' });
console.log(ast, 'ast');
