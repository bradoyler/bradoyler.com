$(function () {

  if (window._utils && _utils.isMobile) {
    return;
  }

  // pan + zoom
  var $elem = $('svg').panzoom();
  var zoomedIn = false;

  $elem.panzoom('option', {
      duration: 500,
      minScale: 1,
      maxScale: 12,
      animate: true
  });

  var zoom = 0;
  $elem.parent().on('dblclick', function(e) {
      e.preventDefault();

      zoom += 3
      if (zoom > 9) {
          $elem.panzoom('resetPan');
          $elem.panzoom('resetZoom');
          zoom = 0
          return;
      }

      $elem.panzoom('zoom', zoom, { focal: e });

  });
});
