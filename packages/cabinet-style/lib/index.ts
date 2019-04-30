import { Parser } from 'acorn';
import { generate } from 'astring';

const sourceCode = `import './style.scss'`;

const ast = Parser.parse(sourceCode, { ecmaVersion: 6, sourceType: 'module'});
console.log(ast, 'ast')