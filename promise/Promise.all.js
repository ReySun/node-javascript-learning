/* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all */
/**
 * Promise.all(iterable);
 * 返回一个 Promise 实例，此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；
 * 如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果
 * iterable 一个可迭代对象，如 Array 或 String
 */
/* Promise.all 的使用 */
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
}); 
Promise.all([p1, p2, p3]).then(values => { 
  console.log(values); // [3, 1337, "foo"] 
});

// 如果参数中包含非 promise 值，这些值将被忽略，但仍然会被放在返回数组中（如果 promise 完成的话）：
var p = Promise.all([1,2,3]);
var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
var p3 = Promise.all([1,2,3, Promise.reject(555)]);
setTimeout(function(){
  console.log(p);
  console.log(p2);
  console.log(p3);
});
// logs
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }

/* Promise.all 的异步和同步 */
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];
var p = Promise.all(resolvedPromisesArray);
console.log(p);
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p); // Promise { [ 33, 44 ] }
});
// logs, in order:
// Promise { <state>: "pending" } 
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }

var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
});
// logs
// Promise { <state>: "pending" } 
// the stack is now empty
// Promise { <state>: "rejected", <reason>: 44 }

// 但是，Promise.all 当且仅当传入的可迭代对象为空时为同步：
var p = Promise.all([]); // will be immediately resolved
var p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
console.log(p);
console.log(p2)
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p2);
});
// logs
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }

/* Promise.all 的快速返回失败行为 */
var p1 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 1000, 'one'); 
}); 
var p2 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 2000, 'two'); 
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'four');
});
var p5 = new Promise((resolve, reject) => {
  reject('reject');
});

Promise.all([p1, p2, p3, p4, p5]).then(values => { 
  console.log(values);
}, reason => {
  console.log(reason)
});

//From console:
//"reject"

//You can also use .catch
Promise.all([p1, p2, p3, p4, p5]).then(values => { 
  console.log(values);
}).catch(reason => { 
  console.log(reason)
});

//From console: 
//"reject"
