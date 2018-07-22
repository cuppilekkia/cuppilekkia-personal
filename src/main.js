import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import throttle from 'lodash/throttle'
import './assets/sass/all.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted () {
    store.commit('setBreakpoints', JSON.parse(getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\\/gi, '').replace('"//', '').replace('//"', '').replace(/px/gi, '')))
    store.commit('changeWidth', window.innerWidth)
    window.addEventListener('resize', throttle(() => {
      store.commit('changeWidth', window.innerWidth)
    }, 300))
  },
  render: h => h(App)
}).$mount('#app')
