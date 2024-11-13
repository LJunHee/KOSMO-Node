const fs = require('fs');



const result = fs.writeFileSync('./ex01.js','//js작성',{encoding:'utf-8'});
console.log(result);

// const msg = fs.readFileSync('./ex01.js',{encoding:'utf-8'});
// console.log(msg);