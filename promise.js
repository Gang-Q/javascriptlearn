// 什么是promise
// 想象一下，你是一位顶尖歌手，粉丝没日没夜地询问你下个单曲什么时候发。
// 为了从中解放，你承诺（promise）会在单曲发布的第一时间发给他们。你给了粉丝们一个列表。他们可以在上面填写他们的电子邮件地址，以便当歌曲发布后，让所有订阅了的人能够立即收到。即便遇到不测，例如录音室发生了火灾，以致你无法发布新歌，他们也能及时收到相关通知。
// 每个人都很开心：你不会被任何人催促，粉丝们也不用担心错过单曲发行。
// 这是我们在编程中经常遇到的事儿与真实生活的类比：
// 1. “生产者代码（producing code）”会做一些事儿，并且会需要一些时间。例如，通过网络加载数据的代码。它就像一位“歌手”。
// 2. “消费者代码（consuming code）”想要在“生产者代码”完成工作的第一时间就能获得其工作成果。许多函数可能都需要这个结果。这些就是“粉丝”。
// 3. **Promise** 是将“生产者代码”和“消费者代码”连接在一起的一个特殊的 JavaScript 对象。用我们的类比来说：这就是就像是“订阅列表”。“生产者代码”花费它所需的任意长度时间来产出所承诺的结果，而 “promise” 将在它（译注：指的是“生产者代码”，也就是下文所说的 executor）准备好时，将结果向所有订阅了的代码开放。

// Promise 对象的构造器（constructor）语法
let promise = new Promise(function (resolve, reject) {
  // executor（生产者代码，“歌手”）
});

// executor
// 传递给 new Promise 的函数被称为 executor。
// 当 executor 获得了结果，无论是早还是晚都没关系，它应该调用以下回调之一：
// - `resolve(value)` — 如果任务成功完成并带有结果 `value`。
// - `reject(error)` — 如果出现了 error，`error` 即为 error 对象。

// 由 new Promise 构造器返回的 promise 对象具有以下内部属性
// - `state` — 最初是 `"pending"`，然后在 `resolve` 被调用时变为 `"fulfilled"`，或者在 `reject` 被调用时变为 `"rejected"`。
// - `result` — 最初是 `undefined`，然后在 `resolve(value)` 被调用时变为 `value`，或者在 `reject(error)` 被调用时变为 `error`。

// 实例1
let promise = new Promise(function (resolve, reject) {
  // 当 promise 被构造完成时，自动执行此函数

  // 1 秒后发出工作已经被完成的信号，并带有结果 "done"
  setTimeout(() => resolve("done"), 1000);
});

// 实例2
let promise = new Promise(function (resolve, reject) {
  // 1 秒后发出工作已经被完成的信号，并带有 error
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// 总结
// executor 应该执行一项工作（通常是需要花费一些时间的事儿），然后调用 resolve 或 reject 来改变对应的 promise 对象的状态。
// 与最初的 “pending” promise 相反，一个 resolved 或 rejected 的 promise 都会被称为 “settled”。

// 注意事项1 这儿只能有一个结果或一个 error
// executor 只能调用一个 `resolve` 或一个 `reject`。任何状态的更改都是最终的。
// 所有其他的再对 `resolve` 和 `reject` 的调用都会被忽略
let promise = new Promise(function (resolve, reject) {
  resolve("done");
  reject(new Error("…")); // 被忽略
  setTimeout(() => resolve("…")); // 被忽略
});

// 注意事项2 Resolve/reject 可以立即进行
// 实际上，executor 通常是异步执行某些操作，并在一段时间后调用 resolve/reject，但这不是必须的。我们还可以立即调用 resolve 或 reject
let promise = new Promise(function (resolve, reject) {
  // 不花时间去做这项工作
  resolve(123); // 立即给出结果：123
});

// 注意事项3 state 和 result 都是内部的

// then
// `.then` 的第一个参数是一个函数，该函数将在 promise resolved 后运行并接收结果。
// `.then` 的第二个参数也是一个函数，该函数将在 promise rejected 后运行并接收 error。
promise.then(
  function (result) {
    /* handle a successful result */
  },
  function (error) {
    /* handle an error */
  }
);

// .then实例1
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve 运行 .then 中的第一个函数
promise.then(
  (result) => alert(result), // 1 秒后显示 "done!"
  (error) => alert(error) // 不运行
);

// .then实例2
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
// reject 运行 .then 中的第二个函数
promise.then(
  (result) => alert(result), // 不运行
  (error) => alert(error) // 1 秒后显示 "Error: Whoops!"
);

// .then实例3
let promise = new Promise((resolve) => {
  setTimeout(() => resolve("done!"), 1000);
});
promise.then(alert); // 1 秒后显示 "done!"

// catch
// 如果我们只对 error 感兴趣，那么我们可以使用 null 作为第一个参数：.then(null, errorHandlingFunction)。或者我们也可以使用 .catch(errorHandlingFunction)，其实是一样的

// .catch实例
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
// .catch(f) 与 promise.then(null, f) 一样
promise.catch(alert); // 1 秒后显示 "Error: Whoops!"

// finally
// 就像常规 `try {...} catch {...}` 中的 `finally` 子句一样，promise 中也有 `finally`。
// `.finally(f)` 调用与 `.then(f, f)` 类似，在某种意义上，`f` 总是在 promise 被 settled 时运行：即 promise 被 resolve 或 reject。
// finally 是执行清理（cleanup）的很好的处理程序（handler），例如无论结果如何，都停止使用不再需要的加载指示符（indicator）。
// `finally(f)` 其实并不是 `then(f,f)` 的别名。它们之间有一些细微的区别：
// 1. `finally` 处理程序（handler）没有参数。在 `finally` 中，我们不知道 promise 是否成功。没关系，因为我们的任务通常是执行“常规”的定稿程序（finalizing procedures）。
// 2. `finally` 处理程序将结果和 error 传递给下一个处理程序。

// .finally实例1
new Promise((resolve, reject) => {
  /* 做一些需要时间的事儿，然后调用 resolve/reject */
})
  // 在 promise 为 settled 时运行，无论成功与否
  .finally(() => stop, loading, indicator)
  // 所以，加载指示器（loading indicator）始终会在我们处理结果/错误之前停止
  .then(
    (result) => show,
    result,
    (err) => show,
    error
  );

// .finally实例2
new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => alert("Promise ready"))
  .catch((err) => alert(err)); // <-- .catch 对 error 对象进行处理

// 我们可以对 settled 的 promise 附加处理程序
// 下面这 promise 在被创建后立即变为 resolved 状态
let promise = new Promise((resolve) => resolve("done!"));
promise.then(alert); // done!（现在显示）

// loadScript
let promise = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);
promise.then(
  (script) => alert(`${script.src} is loaded!`),
  (error) => alert(`Error: ${error.message}`)
);
promise.then((script) => alert("Another handler..."));
