# Recap
[iterator](#iterator)

---

## `i.e.`
stands for id est, or "that is"  
used in front of a word or phrase that restates what has been said previously

## `e.g.`
stands for exempli gratia in Latin and means "for example"

## `generic font family`
In CSS, a broad class of similar fonts used in a prioritized list of fonts. 
Common generic font families include:
* serif (such as Times New Roman, Bodoni, and Garamond)
* sans-serif (such as Arial, Verdana, and Helvetica)
* monospace (such as Courier, MS Courier New, and Prestige)
* script
* fantasy

Some Rules:
1. Don't use more than 3-4 fonts on any one page.
2. Don't change the font in mid sentence unless you have a very good reason.
3. Sans serif for online, serif for print.
4. Monospace for typewriter and code.
5. Script and fantasy for accents.
> Monospace are designed to make characters easy to read and find in hundreds of lines of code.  
In the other hand, serifs and sans serifs fonts are designed to be used to improve legibility in large amount of texts, example books, magazines, and so on

## `iterator`
它是一种接口，为各种不同的数据结构提供统一的访问机制。
任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

Iterator 接口主要供 `for...of` 消费

## `Dart`
谷歌开发的计算机编程语言,语法类似C语言，可以转译为JavaScript  
Dart2成为强类型语言，Flutter用的就是Dart

## `SaaS`
software as a service 软件及服务

## `TDZ`
Temporal dead zone  
```
ReferenceError: Cannot access 'a' before initialization
变量提升也有优先级：函数声明 > arguments > 变量声明
typeof检测未声明的变量不会抛出错误，会返回 undefined

```

## 宏任务 微任务
宿主环境提供的叫宏任务，由语言标准提供的叫微任务，这是算比较标准也算比较好记忆的区分宏任务和微任务了。  

1. 一般来说，非阻塞性的任务采取同步方式执行，直接在主线程执行栈完成。
2. 阻塞性的任务都会采用异步来执行，异步工作一般会交给其他线程完成，探后回调函数会放到事件队列中。
![](https://graph.baidu.com/resource/121e5e8811bd0eeccffa401592192053.jpg)

macrotask: 主代码块 > setImmediate > MessageChannel > setTimeout / setInterval
![](https://graph.baidu.com/resource/121de5444e58c1602b49301591932015.jpg)

microtask: process.nextTick > Promise = MutationObserver
![](https://graph.baidu.com/resource/1216777ea7d06546e449901592192194.jpg)