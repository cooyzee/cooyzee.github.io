;(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    var fontSize = 20 * (clientWidth / 320);
    if (fontSize > 33.75) fontSize = 24;
    fontSize /= 2;
    docEl.style.fontSize = fontSize + 'px';
  };
  if (!doc.addEventListener) return;
  recalc();
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
