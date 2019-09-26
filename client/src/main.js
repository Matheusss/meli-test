// POLYFILL
import 'babel-polyfill'

// STYLES
import 'normalize.css'
import '@/styles/general.scss'

// LIBS
import Vue from 'vue'

// FILTERS
import './filters/currencyFilter'

// MAIN COMPONENT
import App from './main/App.vue'

// ROUTER
import router from './main/router'

// STORE
import store from './main/store'

// i18n
import i18n from './main/i18n'

// MODULES
import './main/modules'

// SERVICE WORKER
import './main/registerServiceWorker'

// INTERCEPTOR
import './main/interceptor'

// CONFIG
Vue.config.productionTip = false

// VUE INSTANCE

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
