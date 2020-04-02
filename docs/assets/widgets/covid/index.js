const reportDate = '3/30/2020'

const tip = d3.tip()
 .attr('class', 'd3-tip')
 .offset([-10, 0])
 .html(function(d) {
  const report = d[reportDate]
   return `
   ${d.Admin2}, ${d.Province_State} :
   <div>Confirmed cases: ${report}</div>
   <div>Population: ${d.pop}, cases per 10k residents: ${Math.round(report / (d.pop/10000))}</div>
   `
 });

const svg = d3.select('.svg-container').append('svg')
  .attr('xmlns', 'http://www.w3.org/2000/svg')
  .attr('version', '1.1')
  .attr('viewBox', '0 0 900 500')
  .attr('preserveAspectRatio', 'xMidYMid meet');

svg.call(tip);

const projection = d3.geoAlbersUsa();
const path = d3.geoPath().projection(projection)

const colorScale = d3.scaleThreshold()
  .domain([1,4,8,15,20,30,40,50,90])
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
.defer(d3.csv, '../counties.csv')
.defer(d3.json, '../us-states-simplified.json')
.defer(d3.csv, 'cases-us.csv')
.await(dataReady);

let topReport = 0
function dataReady(error, counties, states, covidReports) {
  if (error) throw error;
  const reports = covidReports.map(r => {
    const county = counties.find(c => +r.FIPS === +`${c.STATE}${c.COUNTY}`)
    if (county) {
      r.pop = Number(county.POPESTIMATE2019)
    } else {
      console.log('no match:', r.Admin2, r.FIPS)
    }
    return r
  })
  renderMap(states, reports)
}

function drawMapCircles(reports) {

	const circleGroup = svg.selectAll('circle')
		.data(reports)
		.enter()
    .append('g')
    .attr('transform', d => 'translate('+ projection([d.Long, d.Lat])+')')
    .attr('class', 'city');

  circleGroup
    .append('circle')
    .style('fill', d => {
      // let cases = Number(d[reportDate])
      let population = +d.pop
      if (d.pop > 250000) {
        population = 250000
      }
      return colorScale(population / 5000);
    })
    .style('stroke', 'grey')
    .style('fill-opacity', .8)
		.attr('r', d => {
      let cases = Number(d[reportDate])
      if (cases > 1500) {
        cases = 1500
      }
      let adjPop = d.pop
      if (!d.pop) {
        return 0
      } else if (d.pop < 80000) {
        adjPop = 80000
      }
      let rad = cases / (adjPop / 5000)
      if (rad > 5) {
        rad = 5.5
      }
		  return rad
		})
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);
}

function renderMap(states, reports) {
  svg.selectAll('*').remove(); // clear for re-render
  data = reports.filter(d => projection([d.Long, d.Lat]));

  svg.selectAll('.states')
    .data(topojson.feature(states, states.objects.states).features)
    .enter()
    .append('path')
    .attr('class', 'states')
    .attr('d', path)

  drawMapCircles(data);
}
