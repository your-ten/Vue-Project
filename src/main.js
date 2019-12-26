import Vue from 'vue'
import 'lib-flexible'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import router from '@/router'
import Header from '@/components/Header/Header'
import Star from '@/components/Star/Star'
import store from '@/vuex/store'
import CartControl from '@/components/CartControl/CartControl'
import './validate'
import * as API from '@/api'
import i18n from './i18n'
import './Mock/mock-server'
import loading from '@/common/images/loading.gif'
import Split from '@/components/Split/Split'
import './filters'


Vue.prototype.$API = API
Vue.use(VueLazyload, {
  loading
})

Vue.config.productionTip = false

Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component('CartControl',CartControl)
Vue.component('Split',Split)
Vue.component(Button.name, Button);
new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
