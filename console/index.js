//@ts-check
const fs = require('fs');
const { Console } = require('console');

const moment = require('moment');
const consoleTime = moment().format('YYYY-MM-DD HH:mm:ss:');

const output = fs.createWriteStream('./console/stdout.log');
const errorOutput = fs.createWriteStream('./console/stderr.log');

/* 全局符号 console 是一个特殊的 Console 实例，其输出会被送往 process.stdout 和 process.stderr。它等价于调用： */
const console = new Console(process.stdout, process.stderr);
const newConsole = new Console(output, errorOutput);
const logger = {
  log(data, ...args){
    newConsole.log(consoleTime, data, ...args);
  },
  debug(data, ...args){
    this.log(data, ...args); // The console.debug() function is an alias for console.log().
  },
  info(data, ...args){
    this.log(data, ...args); // The console.info() function is an alias for console.log().
  },
  error(error, ...args){
    newConsole.error(consoleTime, error, ...args);
  },
  warn(warn, ...args){
    newConsole.warn(consoleTime, warn, ...args); // console.warn() 函数是 console.error() 的一个别名
  },
  trace(message, ...args){
    newConsole.trace(consoleTime, message, ...args)
  },
  dir(obj){
    newConsole.dir(obj)
  },
  time(str){
    this.log(`start with: ${str}`)
    newConsole.time(str)
  },
  timeEnd(str){
    newConsole.timeEnd(str);
    this.log(`  end with: ${str}`)
  }
}

// console.table(obj) // 新增于: v0.1.100
logger.log('OK', 2);
logger.time('100-elements');
for (let i = 0; i < 100000; i++) {}
logger.timeEnd('100-elements');

logger.error('222',new Error('错误信息'), 333);
logger.trace('Show me');
logger.warn(`警告信息`);

console.log(1)
console.group(); // console.groupCollapsed()
console.log(2)
console.groupEnd();
console.log(3)
var ss = console.time('100-elements');
for (let i = 0; i < 100; i++) {}
console.timeEnd('100-elements');
console.log(ss);
