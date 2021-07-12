# JS中的隐式转换
先看几个例子理解下JS中的隐式转换
```
1 + +"2" // => 3
1 + "2" // => "12"
[] == false // => true
1 + [] // => "1"
1 + {} // "1[object Object]"
![] == 0 // => true
[] == ![] // => true
```
## 什么是隐式转换
JavaScript是弱类型语言，或者叫动态语言。在声明变量时不需要指定变量类型。
在一些特定的场景下，JS会自动将数据的类型进行转换，这就是我们所说的隐式转换。

## 发生最多隐式转换的情况

### 1. `==` 操作符
虽然现在我们都用===，但是卷一下也无妨
1. NaN与任何类型比较都是false，包括自己
2. Boolean与其他类型比较，自己先被转换为Number
3. String和Number比较，先将String转换为Number
4. null == undefined比较结果是true，除此之外，null、undefined和其他任何结果的比较值都为false
5. 原始类型和引用类型做比较时，引用类型会依照ToPrimitive规则转换为原始类型。

两个引用类型，比较的是地址，其他的关系操作符
```
[] == ![] // => true
[] == false // => true                             
[] == 0 // => 0 == 0 =>true
```

### 2. `+` 运算符
1. 当一侧为String类型，`+`被识别为字符串连接符，另一侧若不是String会转换为String类型，然后字符串拼接
2. 当一侧为Number类型，另一侧为原始类型，则将原始类型转换为Number类型，进行加法运算
3. 当一侧为引用类型，依照ToPrimitive规则转换为原始类型，再应用前面的规则
**以上规则，优先级从高到低**
```
1 + "2" // => "12"
1 + true // => 2
1 + null // => 1
1 + undefined // => NaN
1 + {} // => "1[object Object]"
```
其他运算`-` `*` `/` `%`，都是隐式调用Number()

### 3.其他补充
* 逻辑语句`if` `while` `for`  
单个变量都是转Boolean，其中只有nul、undefined、""、NaN、0、false这几个是FALSE，其他都是TRUE

* `isNaN()` 转Number

* 一元运算符/单目运算符  
`+` `-` `++` `--` `!` `~`  
其中只有`!`转Boolean，其余都是转Number

## 附录

* JS类型转换（不挨个细说了，列个表格自检）

| 原始值 | to Number | to String | to Boolean |
| :---: | :---: | :---: | :---: |
| true | 1 | "true" | true |
| false | 0 | "false" | false |
| 1 | 1 | "1" | true |
| 0 | 0 | "0" | false |
| "1" | 1 | "1" | true |
| "0" | 0 | "0" | true |
| NaN | NaN | "NaN" | false |
| infinity | infinity | "infinity" | true |
| -infinity | -infinity | "-infinity" | true |
| "" | 0 | "" | false |
| " " | 0 | " " | true |
| "10" | 10 | "10" | true |
| "other" | NaN | "other" | true |
| [] | 0 | "" | true |
| [10] | 10 | "10" | true |
| [10, 20] | NaN | "10,20" | true |
| ["other"] | NaN | "other" | true |
| ["other", "other"] | NaN | "other,other" | true |
| function(){} | NaN | "function(){}" | true |
| {} | NaN | "[object Object]" | true |
| null | 0 | "null" | false |
| undefined | NaN | "undefined" | false |

* toPrimitive规则

js引擎内部的抽象操作ToPrimitive有着这样的签名：
ToPrimitive(input, PreferredType?)

1、如果输入的值已经是一个原始值，则直接返回它

2、否则，如果PreferredType被标记为Number，先调用该对象的valueOf()方法，
如果PreferredType被标记为String，则先调用该对象的toString()方法，
如果返回值是一个原始值，则返回这个值

3、否则，PreferredType为Number的情况，继续调用toString()，
PreferredType为String的情况，继续调用valueOf()，
如果返回值是一个原始值，则返回这个值

4、否则，抛出TypeError异常。

```
PreferredType的值会按照这样的规则来自动设置：
该对象为Date类型，则PreferredType被设置为String，否则PreferredType被设置为Number

所以Date类型在进行+运算或者==操作的时候会优先进行toString()转换

valueOf()
1、Number、Boolean、String这三种构造函数生成的基础值的对象形式，通过valueOf转换后会变成相应的原始值。
2、Date这种特殊的对象，其原型Date.prototype上内置的valueOf函数将日期转换为日期的毫秒的形式的数值。
3、除此之外返回的都为this，即对象本身

toString()
Number、Boolean、String、Array、Date、RegExp、Function这几种构造函数生成的对象，
通过toString转换后会变成相应的字符串的形式，因为这些构造函数上封装了自己的toString方法。
除这些对象及其实例化对象之外，其他对象返回的都是该对象的类型，都是继承的Object.prototype.toString方法。
```

* 奇葩情况
```
{} + [] // => 0
```
第一个{}会被当做代码块，变成+[]，[]转Number输出0

```
const a = {
    i: 1,
    toString: function () {
        return a.i++;
    }
}
if (a == 1 && a == 2 && a == 3) {
    console.log('hello world!');
}
```
最终会有输出
