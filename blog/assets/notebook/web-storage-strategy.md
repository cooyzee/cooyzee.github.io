# Web Storage Strategy

Web applications can store data locally within the user's browser

Before HTML5, application data had to be stored in cookies, included in every
server request. Web storage is more secure, and large amounts of data can be
stored locally, without affecting website performance.

HTML web storage provides two objects for storing data on the client:
* `window.localStorage` - stores data with no expiration date
* `window.sessionStorage` - stores data for one session(data is lost when the browser tab is closed)

## localStorage
```javascript
setItem("key", value)
getItem("key")
removeItem("key")
```
1. persistent
2. same-origin policy
3. client-side
4. secure
5. store up to 5MB or more

## sessionStorage
Just like the `localStorage` object, except that it stores the data for only one session.
The data is deleted when the user closes the specific browser tab.

1. not persistent

## cookie
We can set the expiration time for each cookie.
The data is sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) - increasing the amount of traffic between client and server.
1. store only limited data(4kb)
2. not secure
3. with every server request cookie data is sent to server
4. can be used both sides

```javascript
function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

function setCookie(name, value, days) {
  var d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

function deleteCookie(name) { 
  setCookie(name, '', -1); 
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
  // 
}
```
