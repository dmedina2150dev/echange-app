import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import Chartick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'
import { Chart } from 'chart.js'

import router from '@/router'
import { dollarFilter, percentFilter } from '@/filter'

// para que use componentes o librerias externas
Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))

// Esta funcion de Vue, nor permite registrar un filtro de manera similar a como se hacia con un component
// Se utilizan como los pipes de Angular
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App), // -> Es una forma de reemplazar el seteo de nuestra aplicación dentro de nuestro componente.
}).$mount('#app') // -> Tiene el mismo propocito que el [el: '#app']
