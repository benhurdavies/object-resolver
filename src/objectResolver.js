import * as esprima from 'esprima';
import fs from 'fs';

let contents = fs.readFileSync('./example/calculator.js').toString();

console.log(contents);

let parseJs = esprima.parseModule(contents);

console.log(JSON.stringify(parseJs));
