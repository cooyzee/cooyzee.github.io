# The JavaScript Number Type
The JavaScript Number type is a [double-precision 64-bit binary format IEEE 754](https://zh.wikipedia.org/wiki/%E6%B5%AE%E7%82%B9%E6%95%B0) value

## 浮点数
一个浮点数值的表示可以这样：
```
value = sign x exponent x mantissa

sign: 符号位
exponent: 指数
mantissa: 尾数
```

* 指数偏移值  
即浮点数表示法中指数域的编码值，等于指数的实际值机上某个固定值，IEEE 754标准规定该固定值为2e-1 - 1，其中e为存储指数的比特长度
![](https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/fe/csz/cache/exponent-of-single-precision.png)

* 有效尾数默认

## 附录
* 补码
计算机中表示有符号数用补码，消除歧义，减法转加法



