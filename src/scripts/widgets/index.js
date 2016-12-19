// var _widgets = _widgets || {};
(function () {
  var height;
  var body = document.body;
  var html = document.documentElement;

  function iframeResize() {
    height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    window.parent.postMessage(["setHeight", height, document.location.href], "*");
  }

  window.addEventListener("DOMContentLoaded", function(event) {
    iframeResize();
  });

  window.addEventListener("resize", iframeResize);
})();
