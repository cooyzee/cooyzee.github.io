# Interview Questions

#### 1. Data & Structure types.

```
The latest ECMAScript standard defines nine types
(1-3 97,98,99 4 dead 5 2009 5.1 2011 6 2015)
6 primitive types, 1 special primitive type
undefined
Boolean
Number
String
BigInt
Symbol
Null
So we have 7 primitives define immutable values
Object
Function

Determining types using the `typeof` operator
Determining Object types using `instanceof`

but null、Array、Object
Object.prototype.toString.call()
Array.isArray()也是这样实现的 '[object Array]'
```

#### 2. JS中的数字都是Number类型，64位浮点数（同Java中double类型）.
JS中数字按照IEEE 754国际标准
```
第1位：符号位，0表示正数，1表示负数
第2位到第12位：指数部分
第13位到第64位：小数部分（即有效数字）
```
精度：小数部分有效数字第一位默认为1，所以其最长为53个二进制位，-(2^53-1)到2^53-1的整数都可以精确表示
数值范围：指数部分的长度是11个二进制位，2^1024到2^-1023
#### 3. Symbol

```
Symbol.for("foo"); // 创建一个 symbol 并放入 symbol 注册表中，键为 "foo"
Symbol.for("foo"); // 从 symbol 注册表中读取键为"foo"的 symbol

Symbol.for("bar") === Symbol.for("bar"); // true，证明了上面说的
Symbol("bar") === Symbol("bar"); // false，Symbol() 函数每次都会返回新的一个 symbol

```

#### 数组去重
1. indexOf 实际上也是双重循环
2. set `[...new Set(arr)]`
3. filter
```javascript
function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}
```

#### XHR
XMLHttpRequest

1. readyState: 0 - 4
2. http 状态码 200 404 503

#### 工程化 模块化 组件化
工程化：将项目当成一项系统工程进行分析、组织、构建。结构清晰，分工明确，团队协作，高效率
模块化：node-commonjs ES6-module css-sass
组件化：代码复用