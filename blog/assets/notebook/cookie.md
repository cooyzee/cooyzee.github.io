# ookie

我们知道，HTTP是一种无状态协议，指服务器对于客户端每次发送的请求都认为它是一个新的请求，
上一次的会话和下一次会话没有联系。但是很多场景下，我们需要知道下一次和上一次会话的关系，比如登录以后记住登录状态。
这时候就引入了Cookie和Session体系。

#### 1. cookie 存在哪里？

一般被浏览器以txt的形式存储在电脑硬盘中，供浏览器读写。

#### 2. cookie是如何工作的？

request: Request Headers的cookie字段（以分号分隔的很多name=value字段）

response: 当服务端需要种cookie时，在http请求的Response Headers中添加Set-Cookie字段，浏览器接收到之后会自动解析识别，将cookie种下

#### 3. cookie 和 session 的区别？

* 存储位置不同： cookie数据存放在客户的浏览器上，session数据放在服务器上。
* 存储大小不同： 一般单个cookie保存的数据不能超过4k, 单个域名最多保存30个cookie（不同浏览器有差异）；session则无大小和数量限制。

#### 4. cookie各属性详解
* Name: cookie名
* Value: cookie值。
* Domain: cookie的域名。如果设成.example.com，那么子域名a.example.com和b.example.com，都可以使用.example.com的cookie;反之则不可以。
* Path: 允许读取cookie的url路径，一般设置为/。
* Expires： cookie过期时间。不设置，则为Session会话期，页面退出时cookie失效。
* HttpOnly: 设置为true时，只有http能读取。js只能读取未设置HttpOnly的cookie。
* Secure: 标记为Secure的cookie，只有https的请求可以携带。
* SameSite: 限制第三方url是否可以携带cookie。有3个值：Strict/Lax(默认)/None。（chrome51新增属性，chrome80+强制执行）

Strict: 仅允许发送同站点请求的的cookie

Lax: 允许部分第三方请求携带cookie，即导航目标网址的get请求。包括超链接 ，预加载和get表单三种形式发送cookie

None: 任意发送cookie，设置为None，（需要同时设置Secure，也就是说网站必须采用https）

* Priority：优先级，chrome的提案（firefox不支持），定义了三种优先级，Low/Medium/High，当cookie数量超出时，低优先级的cookie会被优先清除。

#### 5. js如何操作cookie

* 读 document.cookie，读取后的cookie是一个字符串，包含了所有cookie的name和value（用分号分隔），需要我们自行将cookie解析出来。
* 写cookie，一次只能写一个cookie，想要写多个cookie需要操作多次。
* 删除cookie，只需要将一个已经存在的cookie名字过期时间设置为过去的时间即可。
* 修改cookie，重新赋值就好，旧值会覆盖新值。

#### 6. 服务端如何读写cookie
```
res.setHeader('Set-Cookie', ['uid=123;maxAge: 900000; httpOnly: true']);
// 或者
res.cookie("uid",'123',{maxAge: 900000, httpOnly: true});

console.log(req.getHeader('Cookie')); // 拿到所有cookie
// 或者
console.log(req.cookie.name);
```

#### 7. 其他
* window.navigator.cookieEnabled  查看浏览器是否打开 Cookie 功能
* domain和path共同决定了cookie可以被哪些url访问。
* 跨域请求（CORS）中的cookie：首先cookie的SameSite需要设置为None。其次对于将Access-Control-Allow-Credentials设置为true的接口（表示允许发送cookie），需要我们在发送ajax请求时，将withCredentials属性设为true。
