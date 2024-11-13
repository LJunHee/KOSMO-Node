const path = require('path');

console.log(path.sep,path.delimiter);

const msg = 'd:\\KOSMO-Node\\..\\.\\KOSMO-Node\\node01\\ex01.js';
const msg1 = 'd:\\KOSMO-Node\\node01\\';
const msg2 = '.\\ex02.js';
console.log(msg1+msg2);
console.log(path.resolve(msg1+msg2));

const p1 = path.parse(msg);
console.log(p1.base);
console.log(p1.dir);
console.log(p1.name,p1.ext);

//절대경로 확인
console.log(path.isAbsolute(msg));
console.log(path.relative('d:\\',msg2));

console.log(path.join(msg1,msg2));
console.log(path.join('d:\\',msg2));