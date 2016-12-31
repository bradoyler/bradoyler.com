
var svg = d3.select('.svg-container').append('svg')
  .attr('xmlns', 'http://www.w3.org/2000/svg')
  .attr('version', '1.1')
  .attr('viewBox', '0 0 900 500')
  .attr('preserveAspectRatio', 'xMidYMid meet');

var projection = d3.geoAlbersUsa();
var path = d3.geoPath().projection(projection);

var colorScale = d3.scaleThreshold()
  .domain([1,4,8,15,20,30,40,50,60])
  .range([
    'rgb(255,245,240)',
		'rgb(254,224,210)',
		'rgb(252,187,161)',
		'rgb(252,146,114)',
		'rgb(251,106,74)',
		'rgb(239,59,44)',
		'rgb(203,24,29)',
		'rgb(165,15,21)',
		'rgb(103,0,13)',
  	]);

d3.queue()
.defer(d3.csv, '../cities-over-250k.csv')
.defer(d3.json, '../us-states-simplified.json')
.defer(d3.csv, 'crime-in-us-2015.csv')
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
      row.pop_2015 = crimeCity.pop_2015;
      row.murder = crimeCity.murder;
      row.murder_rate = crimeCity.murder_rate;
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
    .style('fill', function (d) {
      return colorScale(d.murder_rate);
    })
    .style('stroke', 'grey')
    .style('fill-opacity', .8)
		.attr('r', function (d) {
      //console.log(d.NAME+','+ Math.round(d.murder_rate));
		  return d.murder_rate ? (d.murder_rate * 0.5) : 0;
		})
    .on('mouseover', function () {
      var html = d3.select(this).text();
      d3.select('#panel').text(html);
    })
    .append('title')
    .text(function(d) {
      return d.NAME+ ' -'+
      '\nMurders: '+d.murder +' ('+ +Math.round(d.murder_rate) + ' for every 100k),'+
      '\n2015 Population: '+ d.pop_2015;
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