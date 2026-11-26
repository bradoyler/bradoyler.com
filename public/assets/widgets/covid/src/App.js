/* globals fetch, d3 */
import Map from './Map.js'

export default {
  name: 'App',
  components: { Map },
  mounted () {
    console.log('appppp');
    this.loadData()
  },
  methods: {
    loadData: function () {
      Promise.all([d3.csv('cases-us.csv'), d3.csv('../counties.csv')])
        .then(responses => {
          const reports = responses[0]
          const counties = responses[1]
          this.reports = reports.map(r => {
            const fips = Math.round(Number(r.FIPS))
            const county = counties.find(c => fips === +`${c.STATE}${c.COUNTY}`)
            if (county) {
              r.pop = Number(county.POPESTIMATE2019)
            } else {
              console.log('no match:', r.Admin2, r.FIPS)
            }
            return r
          })
        })
    }
  },
  data: function () {
    return {
      location: '',
      coords: 'aaa',
      counties: [],
      reports: []
    }
  },
  template: `
      <div class="mx-auto p-1">
        <Map v-if="reports.length" :coords="coords" :reports="reports"></Map>
      </div>
    `
}
