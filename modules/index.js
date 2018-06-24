const path = require('path');

const circle = require('./circle.js');
console.log(`半径为 4 的圆的面积是 ${circle.area(4)}`);

// 当 Node.js 直接运行一个文件时，require.main 会被设为它的 module。 
// 这意味着可以通过 require.main === module 来判断一个文件是否被直接运行
console.log(require.main === module);
console.log(require.main.filename); // 当前应用程序的入口点
// console.log(module);

/* 循环模块引用 */
require('./main');

/* The module scope */
console.log(__dirname);
console.log(path.dirname(__filename));
