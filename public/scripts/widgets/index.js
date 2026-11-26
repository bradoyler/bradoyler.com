// var _widgets = _widgets || {};
(function () {

  function iframeResize() {
    var body = document.body || {};
    var height = body.offsetHeight;
    window.parent.postMessage(["setHeight", height, document.location.href], "*");
  }

  window.addEventListener("DOMContentLoaded", function(event) {
    iframeResize();
  });

  window.addEventListener("resize", iframeResize);
})();
