$(function () {

  if (window._utils && _utils.isMobile) {
    return;
  }

  // pan + zoom
  var $elem = $('svg').panzoom();

  $elem.panzoom('option', {
      duration: 300,
      minScale: 1,
      maxScale: 12,
      animate: false
  });

  var zoom = 0;
  $elem.parent().on('mousewheel', function(e) {
    // console.log(e.deltaX, e.deltaY, e.deltaFactor);
    zoom += e.deltaY
    $elem.panzoom('zoom', zoom, { focal: e });
  });

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
