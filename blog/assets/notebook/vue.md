# Vue.js

## Summary

1. 使用`Object.freeze()`回阻止修改现有的property，系统不会再追踪变化。

2. Vue实例除了数据property，还暴露了一些有用的实例property与方法。
它们有$前缀，以便与用户自定义的property区分开来。

3. 不要在选项property回调上使用箭头函数
```
created: () => console.log(this.a)
vm.$watch('a', newValue => this.myMethod())
```

4. 数据绑定使用Mustache语法的文本插值，`v-once` 指令将不会更新

5. 输出html需要使用 `v-html`, 不要对用户提供的内容使用，XSS攻击

6. Mustache语法不能作用在html attribute上，使用 `v-bind`，
对于布尔 attribute当被绑定的变量值为null、undefined 或 false，
该attribute不会被渲染

7. Mustache支持表达式，但是只能访问全局变量的一个白名单，自定义全局变量无法访问。

8. 指令的职责是，当表达式的值改变的时候，将其产生的连带影响响应式的作用域DOM。
一些指定可以在冒号后接收参数，`v-bind` `v-on`,
2.6以后可用[]动态求值：v-on:[eventName]，null值用于移除绑定

9. 指令还可以带修饰符`.`，比如：v-on:submit.prevent
还有指令缩写

10. 对于任何复杂的逻辑，都应当使用计算属性。
计算属性与方法定义的区别是它有缓存，计算属性还可以提供setter

11. [侦听属性](https://cn.vuejs.org/v2/guide/computed.html)

12. v-bind在用于class和style时做了增强，支持对象和数组

13. 不推荐同时使用v-if和v-for，v-for有更高的优先级

14. v-for也可以遍历对象
在嵌套 v-for 循环中你可以使用一个方法：v-for="n in even(set)"
