var firstId = 100;
// 命名采用驼峰命名法
//小驼峰命名法：除第一个单词之外，其他单词首字母大写。常用于变量名，函数名。例如：myFirstName、myLastName
//大驼峰命名法(又称为帕斯卡命名法)：把第一个单词的首字母也大写了。常用于类名，属性，命名空间等.例如：public class DataBaseUser
console.log(firstId);
console.log(typeof firstId);
document.write(firstId);
document.write(typeof firstId);

// 使用{}将多个相关的语句组合在一起，称为“区块”（block）。
// 区块往往用来构成其他更复杂的语法结构，比如​for​、​if​、​while​、​function​等.

// JS数据类型:
// 字符串（string）
// ​数字（number）
// ​布尔（boolean）
// ​空（null）
// ​​未定义（undefined）
// 对象（object）​
// 变量是没有类型的，只有值才有。变量可以随时持有任何类型的值。
// 在ES6中新增了一种符号(​symbol​) 的基本数据类型 TODO:调查符号(​symbol​)

// typeof
// typeof运算符来查看值得类型，它返回的是类型的字符串值。
// null​是一个表示“​空​”的对象，转为数值时为​0​；​undefined​是一个表示"​此处无定义​"的原始值，转为数值时为​NaN
typeof undefined === "undefined"; // true
typeof true === "boolean"; // true
typeof 42 === "number"; // true
typeof "42" === "string"; // true
typeof { lift: 42 } === "object"; // true
typeof Symbol() === "symbol"; // true
typeof null === "object"; // true
console.log(typeof null);

// 布尔值:false/true
// undefined​/null​/​false​/0​/NaN​/""​或​''​（​空字符串​）为false,其余为true
// 空数组（​[]​）和空对象（​{}​）对应的布尔值，都是​true​。
if ([]) {
  console.log("true");
} // true
if ({}) {
  console.log("true");
} // true

// 数字（number）:极大或极小的数字可以通过科学（指数）计数法来书写
var firstNum = 123e5;
console.log(firstNum); // 12300000
var secondNum = 123e-5;
console.log(secondNum); // 0.00123

//　字符串（string）
// \:option + ¥,用来解决\'\'单引号中引用单引号,\"\"双引号中引用双引号的问题
var firstStr = '"option + ¥"用来解决引号内部引用引号的问题';
console.log(firstStr);

// 算术运算符:自增和自减
// 自增运算符将数值增加​1​。
// 如果变量放在 ​++​ 之后(比如: ++x)，它返回自增后的值。
// 如果变量放在 ​++​ 之前(比如: x++)，它返回原始值，然后增加​1​
// 自减同理

// 三运运算符?:
// (条件) ? 表达式1 : 表达式2
// 上面代码中，如果“条件”为​true​，则返回“​表达式1​”的值，否则返回“​表达式2​”的值。
// 三元运算符可以被视为​if...else...​的简写形式，因此可以用于多种场合。
var firstResult;
console.log(
  firstResult ? "firstResult has a value" : "firstResult does not have a value"
);
var secondStr;
secondStr = "数字" + n + "是" + (n % 2 === 0 ? "偶数" : "奇数");

// 比较运算符:返回 true 或 false。
// ==
// ===
// !=
// !==
var thirdNum = 10;
console.log(thirdNum == 8); // -> false

// 逻辑运算符
// && and
// || or
// !  not
// variable = (condition) ? value1: value2
var isAdult = age < 18 ? "未成年人" : "成年人";

// 复制运算符:+=
// 可以作用于数字或字符串
// a += b; === a = a + b;
// TODO:调查其他赋值运算符,https://www.w3cschool.cn/minicourse/play/jscourse?cp=10029&gid=0

// 字符串的索引从 0 开始，这意味着第一个字符索引值为 [0], 第二个为 [1], 以此类推。
var thirdStr = "JavaScript 微课";
var forthStr = [5];
console.log(forthStr);

// 反斜杠是一个转义字符。 转义字符将特殊字符转换为字符串字符：
var fifthStr = "I'm Loen";
var sixthStr = 'He is called "Lusi"';
// \n 换行
// \r 回车
// \b 退格符
// \f 换页符
// \t tab制表符
// \\ 反斜杠\

//可以使用内置属性 length 来计算字符串的长度：
var seventhStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var seventhStrLength = seventhStr.length;
console.log(seventhStrLength);

// 字符串运算符
// +
console.log(sixthStr + seventhStr);
var secondId = "26个英文字是" + seventhStr + "对么?";
// 在 JavaScript 中，字符串 的值是 不可变的，这意味着一旦字符串被创建就不能被改变。
// 改变字符串的唯一方法是重新给它赋一个值

//if 语句
if (条件) {
  //条件为true时要执行的代码
}
// 条件为false时要执行的代码

//if..else 语句
if (条件) {
  //条件为true时要执行的代码块
} else {
  // 条件为false时要执行的代码块
}

// 如果第一个条件为 false，则可以使用 else if 语句指定新条件。
if (条件1) {
  //条件1为true时要执行的代码块
} else if (条件2) {
  // 条件1为false,条件2为true时要执行的代码块
} else {
  // 条件1为false,条件2为false时要执行的代码块
}

// switch 语句
switch (n) {
  case 1:
    // 执行代码块 1
    break;
  case 2:
    // 执行代码块 2
    break;
  default:
  // n 与 case 1 和 case 2 都不匹配的时候执行的代码
}

// for 循环语句
for (statement1; statement2; statement3) {
  ("code block to be executed");
}
// statement1,statement3可省

// while 循环语句
while (条件) {
  //while中的代码
}
//后续代码
// 条件可以是返回 true 或 false 的任何条件语句。
