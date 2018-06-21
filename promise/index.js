/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
 */

/**
 * 一个 Promise有以下几种状态:
 * pending: 初始状态，既不是成功，也不是失败状态。
 * fulfilled: 意味着操作成功完成。
 * rejected: 意味着操作失败。
 */

let myFirstPromise = new Promise(function(resolve, reject){
  //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
  //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
  setTimeout(function(){
    resolve("成功!"); //代码正常执行！
  }, 250);
});

myFirstPromise.then(function(successMessage){
  //successMessage的值是上面调用resolve(...)方法传入的值.
  //successMessage参数不一定非要是字符串类型，这里只是举个例子
  console.log("Yay! " + successMessage);
});

require('./Promise.all');
require('./Promise.resolve');
require('./Promise.reject');
require('./Promise.race');