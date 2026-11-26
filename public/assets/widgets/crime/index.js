var tip = d3.tip()
 .attr('class', 'd3-tip')
 .offset([-10, 0])
 .html(function(d) {
   return d.NAME+ ': '+
     d.murder +' ('+ Math.round(d.murder_rate)+' per 100k)'+
     '<div>2016 Population: '+ d.pop+ '</div>';
 });

var svg = d3.select('.svg-container').append('svg')
  .attr('xmlns', 'http://www.w3.org/2000/svg')
  .attr('version', '1.1')
  .attr('viewBox', '0 0 900 500')
  .attr('preserveAspectRatio', 'xMidYMid meet');

svg.call(tip);

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
.defer(d3.csv, 'crime-in-us-2016.csv')
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
      row.pop = crimeCity.pop;
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
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);
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
