# Front End

## suggestion on optimization for front-end development 

### 1. decrease http request

一个完整的HTTP请求需要经历DNS查找，TCP握手，浏览器发出HTTP请求，服务器接受请求，
服务器处理请求并发出响应，浏览器接受响应等过程。

在一个HTTP请求中，真正下载数据的时间占比很小，所以为什么要建议将多个小文件合并为一个大文件，
从而减少HTTP请求，节约时间。

### 2. HTTP2

HTTP超文本传输协议

主要是解决HTTP1.1性能不好才出现的，HPack, Server push, 多路复用


