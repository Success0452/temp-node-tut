const path = require('path');

console.log(path.sep);

const filePath = path.join('/famous/', 'success', 'text.txt' );
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absoluteDir = path.resolve(__dirname, 'famous', 'success', 'text.txt');
console.log(absoluteDir);