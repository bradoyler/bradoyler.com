/* globals mapboxgl */

export default {
  name: 'Map',
  props: ['coords', 'reports'],
  mounted () {
    const reportDate = '3/30/2020'
    console.log('>>>>> Map', reportDate);

    mapboxgl.accessToken = window.mapbox_token

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-95.830,38.477],
      zoom: 3.5
    })

    // new mapboxgl.Marker()
    //   .setLngLat([-74.8477705,40.2470771])
    //   .addTo(map)

    window.map = map // export to window
    const that = this
    map.on('load', function () {
      console.log('map loaded!', that.reports)

      const geojson = turf.featureCollection(that.reports.map(r => {
        const cases = Number(r[reportDate])
        const properties = { cases, FIPS: r.FIPS, pop: 0, rate: 0 }
        if (r.pop) {
          const rate = Math.round(cases / (r.pop/10000))
          properties.html = `<strong>${r.Admin2}, ${r.Province_State}</strong><p>Pop: ${r.pop}, rate: ${rate}</p>`
          properties.rate = rate
          properties.pop = r.pop
        }
        return turf.point([r.Long, r.Lat], properties)
      }))

      map.addSource(`report`, { type: 'geojson', data: geojson })

      map.addLayer({
        id: `report`,
        type: 'circle',
        source: `report`,
        paint: {
          'circle-stroke-color': 'grey',
          'circle-stroke-width': 1,
          'circle-opacity': 1,
          'circle-radius': [
            'step',
            ['get', 'rate'],
            0,
            2, // rate per 10k
            2.0,
            6, // ..
            4.0,
            10, // ..
            5.0,
            100, // ..
            6.0,
            200, // ..
            10.0,
            250, // ..
            12.5
            ],
          'circle-color': 'rgb(165,15,21)'
        }
      })

      const popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false })

      map.on('mouseenter', 'report', function(e) {
        map.getCanvas().style.cursor = 'pointer';
        const description = e.features[0].properties.html;
        const coordinates = e.features[0].geometry.coordinates.slice();
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
      })
      map.on('mouseleave', 'report', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
      });
    })
  },
  template: `<div id='map'></div>`
}
