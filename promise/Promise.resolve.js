/* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve */
/**
 * Promise.resolve(value)
 * 返回一个解析过带着给定值的Promise对象，如果返回值是一个promise对象，则直接返回这个Promise对象
 * 返回一个以给定值解析后的Promise对象。但如果这个值是个thenable（即带有then方法），
 * 返回的promise会“跟随”这个thenable的对象，采用它的最终状态（指resolved/rejected/pending/settled）；
 * 如果传入的value本身就是promise对象，则该对象作为Promise.resolve方法的返回值返回；否则以该值为成功状态返回promise对象。
 */

 /* 使用静态方法Promise.resolve */
Promise.resolve("Success").then(function(value) {
  console.log(value); // "Success"
}, function(value) {
  // 不会被调用
});

/* 对一个数组进行resolve */
var p = Promise.resolve([1,2,3]);
p.then(function(v) {
  console.log(v[0]); // 1
});

/* Resolve另一个promise对象 */
var original = Promise.resolve('我在第二行');
var cast = Promise.resolve(original);
cast.then(function(value) {
  console.log('value: ' + value);
});
console.log('original === cast ? ' + (original === cast));
// 打印顺序如下，这里有一个同步异步先后执行的区别
// original === cast ? true
// value: 我在第二行

/* resolve thenable的对象们并抛出错误 */
// Resolve一个thenable对象
var p1 = Promise.resolve({ 
  then: function(onFulfill, onReject) { onFulfill("fulfilled!"); }
});
console.log(p1 instanceof Promise) // true, 这是一个Promise对象

p1.then(function(v) {
    console.log(v); // 输出"fulfilled!"
  }, function(e) {
    // 不会被调用
});

// Thenable在callback之前抛出异常
// Promise rejects
var thenable = { then: function(resolve) {
  throw new TypeError("Throwing");
  resolve("Resolving");
}};

var p2 = Promise.resolve(thenable);
p2.then(function(v) {
  // 不会被调用
}, function(e) {
  console.log(e); // TypeError: Throwing
});

// Thenable在callback之后抛出异常
// Promise resolves
var thenable = { then: function(resolve) {
  resolve("Resolving");
  throw new TypeError("Throwing");
}};

var p3 = Promise.resolve(thenable);
p3.then(function(v) {
  console.log(v); // 输出"Resolving"
}, function(e) {
  // 不会被调用
});