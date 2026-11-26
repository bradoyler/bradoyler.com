/* global Vue, moment */
import App from './src/App.js'

Vue.use(window['vue-js-modal'].default, {
  dialog: false,
  dynamic: true
})

new Vue({
  render: h => h(App)
}).$mount(`#app`)
