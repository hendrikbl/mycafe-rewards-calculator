import Vue from 'vue'
import VueGtag from 'vue-gtag'

const getCookies = localStorage.getItem('cookies:accepted')

Vue.use(VueGtag, {
  config: { id: 'G-MBDRZKTMGW' },
  appName: 'MyCafé Rewards Calculator',
  bootstrap: getCookies === 'true',
  enabled: getCookies === 'true',
  pageTrackerScreenviewEnabled: true,
})
