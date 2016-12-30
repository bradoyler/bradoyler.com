
var svg = d3.select('.svg-container').append('svg')
  .attr('xmlns', 'http://www.w3.org/2000/svg')
  .attr('version', '1.1')
  .attr('viewBox', '0 0 900 500')
  .attr('preserveAspectRatio', 'xMidYMid meet');

var projection = d3.geoAlbersUsa();
var path = d3.geoPath().projection(projection);

d3.queue()
.defer(d3.csv, '../cities-over-250k.csv')
.defer(d3.json, '../us-states-simplified.json')
.defer(d3.csv, 'crime-in-us.csv')
.await(dataReady);

var _cities = {}, _states = {}, _crime = {};

function dataReady(error, cities, states, crime) {
  if (error) throw error;
  _crime = crime;
  _cities = cities;
  _states = states;

  cities.map(function (row) {
    var crimeCity = crime.find(function (item) {
      return row.NAME === item.city;
    });

    if (crimeCity) {
      row.pop_2014 = crimeCity.pop_2014;
      row.pop_1950 = crimeCity.pop_1950;
      row.murder_rate = crimeCity.murder;
    }

    return row;
  });

  renderMap(_cities, _states, _crime);
}

function drawMapCircles(cities) {
	var circleGroup = svg.selectAll('circle')
		.data(cities)
		.enter()
    .append('g')
    .attr('transform', function(d) {
      return 'translate('+ projection([d.longitude, d.latitude])+')';
		})
    .attr('class', 'city');

  circleGroup
    .append('circle')
    .style("fill", "#820505")
		.attr('r', function (d) {
		  return d.murder_rate ? Math.round(d.murder_rate)* .8 : 0;
		})
    .append('title')
    .text(function(d) {
      return d.NAME+
      '\nMurders: '+Math.round(d.murder_rate) + ' for every 100k'+
      '\n2014 Population: '+ d.pop_2014 +
      '\n1950 Population: '+ d.pop_1950;
    });

  // circleGroup
  //   .append('text')
  //   .attr('class', 'text')
  //   .style('stroke', function (d) {
  //     if (d.murder_rate > 10) {
  //       return '#EEE';
  //     }
  //     return '#000';
  //   })
  //   .attr('dx', function(d){
  //     if (d.murder_rate > 10) {
  //       return -6;
  //     } else if (d.murder_rate) {
  //       return Math.round(d.murder_rate);
  //     }
  //     return 6;
  //   })
  //   .attr('dy', 3)
  //   .text(function(d) {
  //     if (parseInt(d.murder_rate)) {
  //       return Math.round(d.murder_rate);
  //     }
  //   });
}

function renderMap(cities, states, crime) {
  svg.selectAll('*').remove(); // clear for re-render
  cities = cities.filter(function(d) { return projection([d.longitude, d.latitude]); });

  svg.selectAll('.states')
    .data(topojson.feature(states, states.objects.states).features)
    .enter()
    .append('path')
    .attr('class', 'states')
    .attr('d', path)

  drawMapCircles(cities);
}
