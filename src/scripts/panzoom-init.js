$(function () {

  if (window._utils && _utils.isMobile) {
    return;
  }

  // pan + zoom
  var $elem = $('svg').panzoom();
  var zoomedIn = false;

  $elem.panzoom('option', {
      duration: 600,
      minScale: 1,
      maxScale: 10,
      animate: true
  });

  $elem.parent().on('dblclick', function(e) {
      e.preventDefault();

      if (zoomedIn) {
          $elem.panzoom('resetPan');
          $elem.panzoom('resetZoom');
          zoomedIn = false;
          return;
      }

      zoomedIn = true;
      var zoom = 3;
      $elem.panzoom('zoom', zoom, {
          focal: e
      });

  });
});
