/* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race */
/**
 * Promise.race(iterable);返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promis就会解决或拒绝
 * iterable 可迭代对象，类似Array。
 */


/* Promise.race的异步性 */
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"

/* 使用 Promise.race –  setTimeout 的示例 */
var p1 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 500, "one"); 
});
var p2 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 100, "two"); 
});

Promise.race([p1, p2]).then(function(value) {
console.log(value); // "two"
// 两个都完成，但 p2 更快
});

var p3 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 100, "three");
});
var p4 = new Promise(function(resolve, reject) { 
  setTimeout(reject, 500, "four"); 
});

Promise.race([p3, p4]).then(function(value) {
console.log(value); // "three"
// p3 更快，所以它完成了              
}, function(reason) {
// 未被调用
});

var p5 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 500, "five"); 
});
var p6 = new Promise(function(resolve, reject) { 
  setTimeout(reject, 100, "six");
});

Promise.race([p5, p6]).then(function(value) {
// 未被调用             
}, function(reason) {
console.log(reason); // "six"
// p6 更快，所以它失败了
});