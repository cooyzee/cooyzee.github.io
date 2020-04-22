# Sass

> css 层叠样式表 Cascading Style Sheets

> Sass (Syntactically Awesome StyleSheets)，是由ruby语言编写的一款css预处理语言，和html一样有严格的缩进风格，和css编写规范有着很大的出入，是不使用花括号和分号的，所以不被广为接受。
> Sass是一款强化CSS的辅助工具，是对CSS的扩展，它在CSS语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、继承(extend)、导入 (inline imports) 等高级功能，其后缀是.sass。

> SCSS (Sassy CSS)，是Sass3引入新的语法，其语法完全兼容 CSS3，并且继承了Sass的强大功能。也就是说，任何标准的CSS3样式表都是具有相同语义的有效的SCSS文件。
> SCSS需要使用分号和花括号而不是换行和缩进。SCSS对空白符号不敏感，其实就和css3语法一样，其后缀名是分别为 .scss。

## some rules that I haven't used

* 父选择器 `&`，作为首字符接后缀可生成复合选择器
```
.navbar {
  &-item {     =>    .navbar-item {}
  }
}
```

* 将属性嵌套在命名空间中
```
{
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
```

* 占位符选择器 %，用@extend指令调用

* 多重延伸，继续延伸
```
@extend .error, .attention;
@extend .error; @extend .attention;
```

* @at-root

* output style
  * nested
  * expanded
  * compact
  * compressed