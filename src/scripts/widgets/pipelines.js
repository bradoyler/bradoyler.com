var svg = d3.select('.svg-container').append('svg')
  .attr('xmlns', 'http://www.w3.org/2000/svg')
  .attr('version', '1.1')
  .attr('viewBox', '0 0 900 500')
  .attr('preserveAspectRatio', 'xMidYMid meet');

var projection = d3.geoAlbersUsa();
var path = d3.geoPath().projection(projection);

d3.queue()
.defer(d3.json, 'CrudeOil_Pipelines_US_201606.json')
.defer(d3.json, 'us-major-cities.json')
.defer(d3.json, 'us-states-simplified.json')
.defer(d3.json, 'PetroleumProduct_Pipelines_US_201606.json')
.await(dataReady);

var _crude = {}, _cities = {}, _states = {}, _petro = {};
function dataReady(error, crude, cities, states, petro) {
  if (error) throw error;
  _crude = crude;
  _cities = cities;
  _states = states;
  _petro = petro;
  renderMap(_crude, _cities, _states);
}

function renderMap(crude, cities, states, petro) {
  svg.selectAll('*').remove(); // clear for re-render

  var cnt=0;
  var colorLegend = {
    'CENTURION PIPELINE':'purple',
    'PLAINS PIPELINE':'darkred',
    'PHILLIPS 66 PIPELINE': 'grey',
     EXXONMOBIL:'blue',
     'KOCH PIPELINE': 'orange',
     'EXXONMOBIL WEST COAST':'blue',
     SHELL: 'red',
     SUNOCO: 'yellow',
     ENBRIDGE:'green',
     ENTERPRISE:'brown',
     other: '#000'
  };

  var crudeObjects = crude.objects.CrudeOil_Pipelines_US_201606;

  crudeObjects.geometries.sort(function(a, b){
    if(a.properties.Opername < b.properties.Opername) return -1;
    if(a.properties.Opername > b.properties.Opername) return 1;
    return 0;
  });

  svg.selectAll('.states')
    .data(topojson.feature(states, states.objects.states).features)
    .enter()
    .append('path')
    .attr('class', 'states')
    .attr('d', path)

  svg.selectAll('.pipelines')
    .data(topojson.feature(crude, crudeObjects).features)
    .enter()
    .append('path')
    .attr('class', 'pipelines')
    .attr('d', path)
    .style('stroke', function (d) {
      console.log(d.properties.Opername);
      return colorLegend[d.properties.Opername] || colorLegend.other;
    })
    .on('mouseover touchstart', function(d){
      var color = colorLegend[d.properties.Opername] || colorLegend.other;
      var label = '<span class="glyphicon glyphicon-oil" style="color:'+ color +'"></span> '+ d.properties.Opername+' - '+ d.properties.Pipename + ' (Crude)';
      d3.select('#panel')
        .html(label);
      d3.selectAll('.highlight').attr('class', 'pipelines');
      d3.select(this).attr('class','highlight');
    });

  if (petro) {
    var petroObjects = petro.objects.PetroleumProduct_Pipelines_US_201606;
    svg.selectAll('.petro_pipelines')
      .data(topojson.feature(petro, petroObjects).features)
      .enter()
      .append('path')
      .attr('class', 'petro_pipelines')
      .attr('d', path)
      .on('mouseover touchstart', function(d){
        d3.select('#panel')
          .html(d.properties.Opername+' - '+ d.properties.Pipename + ' (Petro)');
        d3.selectAll('.highlight_orange').attr('class', 'petro_pipelines');
        d3.select(this).attr('class','highlight_orange');
      });
  }
  svg.append('path')
    .datum(topojson.feature(cities, cities.objects.cities))
    .attr('d', path)
    .attr('class', 'city');

  svg.selectAll('.city-label')
    .data(topojson.feature(cities, cities.objects.cities).features)
    .enter().append('text')
    .attr('class', 'city-label')
    .attr('transform', function (d) { return 'translate(' + projection(d.geometry.coordinates) + ')'; })
    .attr('dy', '.70em')
    .attr('dx', '.50em')
    .text(function (d) {
      return d.properties.NAME;
    });
}

$('#showPetro').on('click', function (e) {
  var checked = $(this)[0].checked;
  if (checked) {
    renderMap(_crude, _cities, _states, _petro);
  } else {
    renderMap(_crude, _cities, _states);
  }
})
