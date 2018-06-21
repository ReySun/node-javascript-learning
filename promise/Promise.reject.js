/* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject */
/**
 * Promise.reject(reason)方法返回一个带有拒绝原因reason参数的Promise对象。
 * reason 表示Promise被拒绝的。
 */
/* 使用静态Promise.reject()方法 */
Promise.reject("Testing static reject").then(function(reason) {
  // 未被调用
}, function(reason) {
  console.log(reason); // "Testing static reject"
});

Promise.reject(new Error("fail")).then(function(result) {
  // 未被调用
}, function(error) {
  console.log(error); // stacktrace
});